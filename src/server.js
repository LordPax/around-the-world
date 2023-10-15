import express from 'express';
import mainRouter from './route/main.js';

const app = express();
app.use((req, res, next) => {
    if (
        ['POST', 'PATCH', 'PUT'].includes(req.method) &&
        !req.is('application/json')
    ) {
        res.sendStatus(400);
    } else {
        next();
    }
});

app.use(express.json());
app.use(mainRouter);
app.use('/assets', express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
