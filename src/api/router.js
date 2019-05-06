import express from 'express';
import predictionController from './controller';

const router = express.Router();

router.get('/', predictionController.mainResponse);

export default router;