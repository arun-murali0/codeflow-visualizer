import fs from 'fs';
import path from 'path';

export const writeMermaidToFile = (mermaidCode: string): void => {
	const date = new Date();

	const publicFolderPath = path.resolve(__dirname, '../../public');

	// Construct the full file path, using the project name
	const filePath = path.join(publicFolderPath, `flowchart ${date.getMilliseconds()} + .mmd`);

	try {
		// Check if the public folder exists, if not, create it
		if (!fs.existsSync(publicFolderPath)) {
			fs.mkdirSync(publicFolderPath, { recursive: true });
		}

		// Write the Mermaid code to the file
		fs.writeFileSync(filePath, mermaidCode, 'utf-8');
		console.log(`Mermaid flowchart saved to ${filePath}`);
	} catch (error) {
		console.error('Error writing to file:', error.message);
	}
};
