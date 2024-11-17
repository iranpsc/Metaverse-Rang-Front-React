import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchJsonData(jsonUrl) {
  try {
    const response = await axios.get(jsonUrl);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching JSON:", error.message);
    throw error;
  }
}

function createTranslationMap(jsonData) {
  const translationMap = new Map();

  for (const modal of jsonData.modals) {
    const modalName = modal.name;
    for (const tab of modal.tabs || []) {
      for (const field of tab.fields || []) {
        const key = `${modalName}:${field.name}`;
        translationMap.set(key, {
          id: field.id,
          translation: field.translation,
          modalName,
          fieldName: field.name,
        });
      }
    }
  }

  return translationMap;
}

async function processFile(filePath, translationMap) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    let modified = false;
    let newContent = content;

    const functionRegex =
      /getFieldTranslationByNames\s*\(\s*["'](.*?)["']\s*,\s*["'](.*?)["']\s*\)/g;
    const functionMatches = [...content.matchAll(functionRegex)];

    if (functionMatches.length > 0) {
      console.log(`\n📝 Processing function calls in: ${filePath}`);

      for (const match of functionMatches) {
        const [fullMatch, modalName, fieldName] = match;
        const key = `${modalName}:${fieldName}`;
        const translation = translationMap.get(key);

        if (translation) {
          const newCall = `getFieldTranslationByNames(${translation.id})`;
          newContent = newContent.replace(fullMatch, newCall);
          modified = true;

          console.log(`✅ Successful function replacement:`);
          console.log(`   Before: ${fullMatch}`);
          console.log(`   After: ${newCall}`);
        }
      }
    }

    const menuItemRegex = /translationKey:\s*["'](.*?)["']/g;
    const menuMatches = [...content.matchAll(menuItemRegex)];

    if (menuMatches.length > 0) {
      console.log(`\n📝 Processing menu items in: ${filePath}`);

      for (const match of menuMatches) {
        const [fullMatch, fieldName] = match;
        const key = `central-page:${fieldName}`;
        const translation = translationMap.get(key);

        if (translation) {
          const newItem = `translationId: ${translation.id}`;
          newContent = newContent.replace(fullMatch, newItem);
          modified = true;

          console.log(`✅ Successful menu item replacement:`);
          console.log(`   Before: ${fullMatch}`);
          console.log(`   After: ${newItem}`);
        }
      }

      if (modified) {
        newContent = newContent.replace(
          /getFieldTranslationByNames\s*\(\s*["']central-page["']\s*,\s*item\.translationKey\s*\)/g,
          "getFieldTranslationByNames(item.translationId)"
        );
      }
    }

    if (modified) {
      await fs.writeFile(filePath, newContent);
      console.log(`✅ File ${filePath} updated successfully`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing file ${filePath}:`, error.message);
    return false;
  }
}

async function scanDirectory(dirPath, translationMap) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    let stats = {
      scanned: 0,
      modified: 0,
      errors: 0,
    };

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        if (!["node_modules", "build", "dist", ".git"].includes(entry.name)) {
          const subStats = await scanDirectory(fullPath, translationMap);
          stats.scanned += subStats.scanned;
          stats.modified += subStats.modified;
          stats.errors += subStats.errors;
        }
      } else if (entry.isFile() && /\.(js|jsx|ts|tsx)$/.test(entry.name)) {
        stats.scanned++;
        try {
          const wasModified = await processFile(fullPath, translationMap);
          if (wasModified) stats.modified++;
        } catch (error) {
          stats.errors++;
          console.error(`❌ Error in file ${fullPath}:`, error.message);
        }
      }
    }

    return stats;
  } catch (error) {
    console.error(`❌ Error scanning directory ${dirPath}:`, error.message);
    return { scanned: 0, modified: 0, errors: 1 };
  }
}

async function updateTranslations(srcPath, jsonUrl) {
  try {
    console.log("📥 Fetching JSON file...");
    const jsonData = await fetchJsonData(jsonUrl);
    console.log("✅ JSON file fetched successfully");

    console.log("🗺️ Creating translation map...");
    const translationMap = createTranslationMap(jsonData);
    console.log(
      `✅ Translation map created with ${translationMap.size} entries`
    );

    console.log(`\n🔍 Starting scan of directory ${srcPath}`);
    const stats = await scanDirectory(srcPath, translationMap);

    console.log("\n📊 Final Report:");
    console.log(`📁 Total files scanned: ${stats.scanned}`);
    console.log(`✏️ Files modified: ${stats.modified}`);
    console.log(`❌ Errors encountered: ${stats.errors}`);

    console.log("\n✨ Operation completed successfully");
  } catch (error) {
    console.error("❌ Error running the program:", error.message);
    process.exit(1);
  }
}

const srcPath = process.argv[2] || "./src";
const jsonUrl = process.argv[3] || "https://rgb.irpsc.com/lang/fa.json";

if (!srcPath) {
  console.error("❌ Please provide the src path");
  console.error("Usage: node replaceWithIds.mjs <src-path> [json-url]");
  process.exit(1);
}

console.log("🚀 Starting replacement operation...\n");
updateTranslations(srcPath, jsonUrl);