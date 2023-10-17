import { Router } from 'express';
import { cardView } from '../controller/card.js';
import path from 'path';
const dirname = path.dirname(new URL(import.meta.url).pathname);

const router = new Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(dirname, '../page/main.html'));
});
router.get('/:code/view', cardView);

export default router;
