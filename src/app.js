const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const indexRouter = require('./routes/index')

const app = express();

dotenv.config()

// Settings

const port = 3000;
app.set('port', process.env.PORT || port)
app.set('json spaces', 2);

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")))

// Routes

app.use('/', indexRouter)
app.use('/api/data',require('./routes/data.js'));
app.use(require('./routes/mp.js'))



// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server running on ${app.get('port')}`)
});



// TODO: crear clase productos con diferentes tiempos y precios. 
// TODO: pasar esos items para crear los payments
// TODO: pasar desde el frontend los productos