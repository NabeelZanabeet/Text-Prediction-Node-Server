import express from 'express';
import predictionController from './controller';

const router = express.Router();

router.get('/api/:text/:cursorPosition/:lineNum', predictionController.mainResponse);
router.get('/dictionary/:word', predictionController.dictionary);
router.get('/', predictionController.mainPage);

export default router;