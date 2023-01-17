const express = require('express');
const fs = require('fs');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'all-views');
var path = require('path');         //path ที่อยู่
app.get('/', function (req, res) {
    fs.readFile('./data.json', (err, data) => {
        const listObj = JSON.parse(data);
        if (err) {
            res.status(400).send('Error List not found');
        } else {
            res.render('first_template', { lists: listObj });
        }
    });
});
app.listen(2000, function () {
    console.log('Listening on port 3000');
});
// add การใช้ไฟล์ Css
app.use(express.static(path.join(__dirname, '/')));
