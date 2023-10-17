import { Router } from 'express';
import { getCards } from '../controller/card.js';

const router = new Router();

router.get('/', getCards);

export default router;
