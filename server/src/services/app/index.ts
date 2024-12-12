import { parseCodeToAst } from './ParserService';

export const ParserServices = {
	parseCodeToAst: (code: string) => {
		return parseCodeToAst(code);
	},
};
