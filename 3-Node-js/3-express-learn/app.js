

const express = require('express');
// const logger = require('./middlewares/logger');
const logger=require('morgan')
const app = express();


//------------------------------------------------------------
/*
app.get("/", (req, res) => {

    // res.write("Hello World");
    // res.end();

    // or

    res.send("Hello World!");

});


app.get('/todos', (req, res) => {
    let todos = ['eat', 'sleep', 'work'];
    //res.send(todos);
    res.json(todos)
})


app.get('/view', (req, res) => {
    let string = `
        <div>
            <span>Nag</span>
        </div>
    `
    res.send(string)
})


app.get('/old-path', (req, res) => {
    // partial/complete request processing
    res.redirect(301, 'new-path');
})


app.get('/new-path', (req, res) => {
    // partial/complete request processing
    res.send('welcome to new-path')
})

*/
//------------------------------------------------------------
// express - middleware
//------------------------------------------------------------

/*

const fs = require('fs');

app.get('/', (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // fs.readFile('./public/index.html', (err, data) => {
    //     res.write(data)
    //     res.end();
    // })

    // or

    // var stream = fs.createReadStream('./public/index.html');
    // stream.on('data', (chunk) => {
    //     res.write(chunk)
    // })
    // stream.on('end', () => {
    //     res.end();
    // })

    //or

    // fs.createReadStream('./public/index.html').pipe(res);

    // or

    res.sendFile(__dirname + '/public/index.html')


})


app.get('/css/bootstrap.css', (req, res) => {
    // fs.createReadStream('./public/css/bootstrap.css').pipe(res);
    // or
    res.sendFile(__dirname + '/public/css/bootstrap.css')
});


*/

// or

/*

app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
    console.log('Validation.....');
    next();
})

app.use((req, res, next) => {
    console.log('Authentcation.....');
    next();
})

app.use((req, res, next) => {
    console.log('DataParsing.....');
    next();
})

app.use('/todos', (req, res, next) => {
    res.send(['eat', 'sleep', 'work'])
})

app.use('/products', (req, res, next) => {
    res.send(['item-1', 'item-2', 'item-3'])
})

 */

app.use(logger('tiny'));
app.use(express.static(__dirname + '/public'));
app.use('/todos', (req, res, next) => {
    res.send(['eat', 'sleep', 'work'])
})



app.listen(3000, () => {
    console.log("listening at http://localhost:3000");
})