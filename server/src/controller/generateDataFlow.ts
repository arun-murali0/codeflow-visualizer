import { Request, Response } from 'express';
import { generateFlowChart } from '../services/generateFlowCHart';
import { convertToMermaid } from '../services/chartFlow';
import { writeMermaidToFile } from '../utils/WriteFile';

export const generateDataFlow = (req: Request, res: Response) => {
	const projectPath = (req.query.ProjectPath as string) || './';
	try {
		const flowChart = generateFlowChart(projectPath);

		
		const mermaidCode = convertToMermaid(flowChart);

		writeMermaidToFile(mermaidCode);

		res.status(200).json({ flowChart: flowChart });
	} catch (error) {
		console.error({ error: error.message });
	}
};
