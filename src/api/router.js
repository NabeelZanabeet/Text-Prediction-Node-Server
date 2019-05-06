import express from 'express';
import predictionController from './controller';

const router = express.Router();

router.get('/api/:text', predictionController.mainResponse);

export default router;