const express = require('express');
const port = 3000;
const app = express();
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
app.get('/', (req, res) => res.render('index.pug'));
app.get('/page', (req, res) => {
    const { page } = req.query;
    res.render('board.pug', { page });
});    
app.get('/posts', (req, res) => {});
app.listen(port, () => console.log(`Server listening on port ${port}!`));