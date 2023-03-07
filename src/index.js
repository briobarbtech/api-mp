const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings

const port = 3000;
app.set('port', process.env.PORT || port)
app.set('json spaces', 2);
// Middlewares

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// Routes

app.get('/', (req, res) => {
    res.json({'title': 'Hello Nodejs & Express!'})
})

// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server running on ${app.get('port')}`)
});
