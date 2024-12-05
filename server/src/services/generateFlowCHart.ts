import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import fs from 'fs';
import { readFiles } from '../utils/fileReader';

export interface FlowData {
	type: string;
	name?: string;
	source?: string;
	file: string;
}

export const generateFlowChart = (projectPath: string): FlowData[] => {
	const files = readFiles(projectPath);
	const flowData: FlowData[] = [];

	files.forEach((file) => {
		const code = fs.readFileSync(file, 'utf-8');
		const ast = parse(code, {
			sourceType: 'module',
			plugins: ['jsx', 'typescript'],
		});

		traverse(ast, {
			ImportDeclaration(path) {
				const importSource = path.node.source.value;

				if (importSource.startsWith('.') || importSource.startsWith('/')) {
					flowData.push({ type: 'Import', source: importSource, file });
				}
			},
			FunctionDeclaration(path) {
				const name = path.node.id?.name || 'Unnamed Function';
				flowData.push({ type: 'Function', name, file });
			},
			ClassDeclaration(path) {
				const name = path.node.id?.name || 'Unnamed Class';
				flowData.push({ type: 'Class', name, file });
			},
			VariableDeclaration(path) {
				path.node.declarations.forEach((declaration) => {
					if (declaration.id.type === 'Identifier') {
						flowData.push({ type: 'Variable', name: declaration.id.name, file });
					} else if (declaration.id.type === 'ArrayPattern') {
						declaration.id.elements.forEach((element) => {
							if (element && element.type === 'Identifier') {
								flowData.push({ type: 'Variable', name: element.name, file });
							}
						});
					} else if (declaration.id.type === 'ObjectPattern') {
						declaration.id.properties.forEach((property) => {
							if (property.type === 'ObjectProperty' && property.value.type === 'Identifier') {
								flowData.push({ type: 'Variable', name: property.value.name, file });
							} else if (property.type === 'RestElement') {
								flowData.push({ type: 'Variable', name: 'rest', file });
							}
						});
					}
				});
			},
			ArrowFunctionExpression(path) {
				const parent = path.parent;
				let name = 'Arrow Function';

				if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
					name = parent.id.name;
				}

				flowData.push({ type: 'ArrowFunction', name, file });
			},
		});
	});

	return flowData;
};
