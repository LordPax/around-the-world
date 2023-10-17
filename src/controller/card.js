import path from 'path';
const dirname = path.dirname(new URL(import.meta.url).pathname);

export const cardView = (req, res) => {
    const { code } = req.params;
    if (!code) return res.redirect('/');

    res.sendFile(path.join(dirname, '../page/card.html'));
};

export const getCards = (req, res) => {
    res.json(['test', 'test2']);
};
