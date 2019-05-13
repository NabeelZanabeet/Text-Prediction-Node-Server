import express from 'express';
import predictionController from './controller';

const router = express.Router();

router.get('/api/:text/:cursorPosition/:lineNum', predictionController.mainResponse);
router.get('/', predictionController.mainPage);

export default router;