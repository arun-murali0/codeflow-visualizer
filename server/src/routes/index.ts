import { Router } from 'express';
import { generateDataFlow } from '../controller/generateDataFlow';

const router = Router();

router.get('/generate-chart', generateDataFlow);

export default router;
