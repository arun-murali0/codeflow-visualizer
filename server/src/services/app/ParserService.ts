import * as parser from '@babel/parser';
import { File } from '@babel/types';
import fs from 'fs';

export const analyzeCode = (filePath: string) => {
	let ast: File;
	const code = fs.readFileSync(filePath, 'utf-8');

	// parse code into an AST
	try {
		ast = parser.parse(code, {
			plugins: ['typescript', 'jsx'],
			sourceType: 'module',
		});

		return ast;
	} catch (error) {
		console.log(error);
		return;
	}
};
