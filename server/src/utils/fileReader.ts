import fs from 'fs';
import path from 'path';

// Recursively read files from a starting directory
export function readFiles(dir: string, fileList: string[] = []): string[] {
  // Check if the directory exists
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return fileList;
  }

  // Read the contents of the directory
  const files = fs.readdirSync(dir);

  // Iterate over each file or sub-directory in the directory
  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // Check if the current path is a directory and ignore 'node_modules'
    const stats = fs.lstatSync(filePath);
    if (stats.isDirectory() && file !== 'node_modules') {
      // Recursively process subdirectories
      readFiles(filePath, fileList);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      // If it's a .js, .jsx, .ts, or .tsx file, add it to the list
      fileList.push(filePath);
    }
  });

  return fileList;
}
