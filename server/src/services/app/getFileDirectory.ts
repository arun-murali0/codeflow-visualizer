import fs from 'fs';
import path from 'path';

export function getAllFiles(dir: string, fileList: string[] = []): string[] {
	const files = fs.readdirSync(dir);
	files.forEach((file) => {
		const filePath = path.join(dir, file);
		if (fs.statSync(filePath).isDirectory()) {
			getAllFiles(filePath, fileList);
		} else if (file.endsWith('.ts') || file.endsWith('.js')) {
			fileList.push(filePath);
		}
	});

	return fileList;
}
