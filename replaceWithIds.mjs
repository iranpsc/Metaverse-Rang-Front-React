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

    const hobbiesArrayRegex = /const\s+hobbies\s*=\s*\[([\s\S]*?)\];/;
    const hobbiesMatch = content.match(hobbiesArrayRegex);

    if (hobbiesMatch) {
      let hobbiesContent = hobbiesMatch[1];

      const nameRegex = /name:\s*["'](.*?)["']/g;
      const names = [...hobbiesContent.matchAll(nameRegex)];

      for (const [fullMatch, name] of names) {
        const key = `citizenship-account:${name}`;
        const translation = translationMap.get(key);
        if (translation) {
          hobbiesContent = hobbiesContent.replace(
            fullMatch,
            `translationId: ${translation.id}`
          );
          modified = true;
          console.log(
            `✅ Replaced hobby name: "${name}" with ID: ${translation.id}`
          );
        }
      }

      if (modified) {
        newContent = newContent.replace(
          hobbiesArrayRegex,
          `const hobbies = [${hobbiesContent}];`
        );
      }
    }

    const patterns = [
      {
        regex:
          /getFieldTranslationByNames\(["']citizenship-account["'],\s*hobby\.name\)/g,
        replace: `getFieldTranslationByNames(hobby.translationId)`,
      },
      {
        regex: /getFieldTranslationByNames\((\d+)\)/g,
        replace: (match, id) => `getFieldTranslationByNames(${id})`,
      },
      {
        regex: /getFieldTranslationByNames\(["'](.*?)["'],\s*["'](.*?)["']\)/g,
        replace: (match, modalName, fieldName) => {
          const key = `${modalName}:${fieldName}`;
          const translation = translationMap.get(key);
          return translation
            ? `getFieldTranslationByNames(${translation.id})`
            : match;
        },
      },
    ];

    for (const pattern of patterns) {
      const matches = [...newContent.matchAll(pattern.regex)];
      for (const match of matches) {
        const replacement =
          typeof pattern.replace === "function"
            ? pattern.replace(...match)
            : pattern.replace;

        if (replacement && replacement !== match[0]) {
          newContent = newContent.replace(match[0], replacement);
          modified = true;
          console.log(`✅ Replaced: ${match[0]} with: ${replacement}`);
        }
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
