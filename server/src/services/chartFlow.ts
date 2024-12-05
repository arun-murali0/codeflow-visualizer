import { FlowData } from "./generateFlowCHart";

export const convertToMermaid = (flowData: FlowData[]): string => {
  let mermaidCode = 'graph TD\n'; // Start the Mermaid flow chart syntax

  // Loop through the flow data and create nodes and relationships
  flowData.forEach((data) => {
    switch (data.type) {
      case 'Import':
        // Create nodes for imports (e.g., Import from 'module')
        mermaidCode += `${data.file} -->|Imports| ${data.source}\n`;
        break;

      case 'Function':
        // Create nodes for functions
        mermaidCode += `${data.name || 'Unnamed Function'} -->|Calls| ${data.file}\n`;
        break;

      case 'Class':
        // Create nodes for classes
        mermaidCode += `${data.name || 'Unnamed Class'} -->|Has methods| ${data.file}\n`;
        break;

      case 'Variable':
        // Create nodes for variables
        mermaidCode += `${data.name} -->|Declared in| ${data.file}\n`;
        break;

      case 'ArrowFunction':
        // Create nodes for Arrow functions
        mermaidCode += `${data.name || 'Unnamed Arrow Function'} -->|Declared in| ${data.file}\n`;
        break;

      default:
        break;
    }
  });

  return mermaidCode; // Return the Mermaid syntax as a string
};
