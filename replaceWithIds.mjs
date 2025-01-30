const fs = require("fs").promises;
const path = require("path");

// Function to read and parse the JSON file
async function readTranslationFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading translation file:", error);
    return null;
  }
}

// Function to create ID to unique_id mapping from JSON structure
function createIdMapping(jsonData) {
  const mapping = new Map();

  // Traverse modals
  if (jsonData.modals) {
    jsonData.modals.forEach((modal) => {
      if (modal.tabs) {
        modal.tabs.forEach((tab) => {
          if (tab.fields) {
            tab.fields.forEach((field) => {
              if (field.id && field.unique_id) {
                mapping.set(field.id.toString(), field.unique_id);
                // Also map the field name if available
                if (field.name) {
                  mapping.set(field.name, field.unique_id);
                }
              }
            });
          }
        });
      }
    });
  }

  return mapping;
}

// Function to process a single file
async function processFile(filePath, idMapping) {
  try {
    let content = await fs.readFile(filePath, "utf8");

    // Match both single and double parameter patterns
    const regex = /getFieldTranslationByNames\("([^"]+)"(?:,\s*"([^"]+)")?\)/g;

    content = content.replace(regex, (match, param1, param2) => {
      // If single parameter, check if it's numeric
      if (!param2) {
        if (!isNaN(param1)) return match;
        const uniqueId = idMapping.get(param1);
        return uniqueId ? `getFieldTranslationByNames("${uniqueId}")` : match;
      }

      // If double parameter, check second parameter
      if (!isNaN(param2)) return match;
      const uniqueId = idMapping.get(param2);
      return uniqueId ? `getFieldTranslationByNames("${uniqueId}")` : match;
    });

    await fs.writeFile(filePath, content, "utf8");
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// ...existing code...
// Main function to process all files in a directory
async function processDirectory(directoryPath, idMapping) {
  try {
    const files = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(directoryPath, file.name);

      if (file.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath, idMapping);
      } else if (
        file.name.endsWith(".js") ||
        file.name.endsWith(".jsx") ||
        file.name.endsWith(".tsx")
      ) {
        // Process JavaScript/React files
        await processFile(fullPath, idMapping);
      }
    }
  } catch (error) {
    console.error("Error processing directory:", error);
  }
}

// Main execution
async function main() {
  const translationFilePath = "./fa.json"; // Path to your JSON file
  const sourceCodeDir = "./src"; // Path to your React project source code

  // Read and parse the translation file
  const translationData = await readTranslationFile(translationFilePath);
  if (!translationData) return;

  // Create ID to unique_id mapping
  const idMapping = createIdMapping(translationData);

  // Process all files in the source directory
  await processDirectory(sourceCodeDir, idMapping);

  console.log("Processing completed!");
}

// Run the script
main().catch(console.error);
