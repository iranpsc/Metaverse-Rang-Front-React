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

  // Recursive function to traverse the JSON structure
  function traverse(obj) {
    if (typeof obj === "object" && obj !== null) {
      if (obj.id && obj.unique_id) {
        mapping.set(obj.id.toString(), obj.unique_id);
      }
      Object.values(obj).forEach(traverse);
    }
  }

  traverse(jsonData);
  return mapping;
}

// Function to process a single file
async function processFile(filePath, idMapping) {
  try {
    let content = await fs.readFile(filePath, "utf8");

    // Regular expression to find getFieldTranslationByNames function calls
    const regex = /getFieldTranslationByNames\s*\(\s*(\d+)\s*\)/g;

    // Replace numeric IDs with unique_ids
    content = content.replace(regex, (match, numericId) => {
      const uniqueId = idMapping.get(numericId);
      if (uniqueId) {
        return `getFieldTranslationByNames("${uniqueId}")`;
      }
      console.warn(
        `No unique_id found for numeric ID: ${numericId} in file: ${filePath}`
      );
      return match;
    });

    // Write the modified content back to the file
    await fs.writeFile(filePath, content, "utf8");
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

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
