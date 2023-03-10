const express = require('express');

const app = express();

const router = require('./Routers/form');

const bodyParser = require('body-parser');


app.use(express.static('views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use("",router)



app.listen(3000,() => {
console.log('listening on 3000');
});