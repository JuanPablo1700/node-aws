const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/upload', (req, res) => {
    const { title, photo } = req.body;
    console.log(title, photo);
    res.send('File uploaded');
});

module.exports = router;