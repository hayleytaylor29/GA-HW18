//dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const turtleSchema = require('./models/model')
const turtles = require('./models/turtles')

//application object
const app = express()

//middleware to create new data
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));



//routes

// seed data
app.get('/seed',(req,res)=>{
    turtleSchema.create(turtles,(error, createdList)=>{
        console.log('get the log: ', createdList);
        res.json('/turtles')
    })
})

//turtles index route
app.get('/turtles', (req, res) => {
    //res.json let's us send a response as JSON data
    turtleSchema.find({},(error, getData)=>{
        // res.render('index.ejs',{
        //     data: getData
        // })
        res.json({getData})
    })
})

//home route for "hello world" to test server is working
// app.get('/', (req, res) => {
//     //res.json lets us send a response as JSON data
//     res.json({
//         response: "Hello Bread Heads"
//     })
// })


// //show route (send one turtle)
app.get('/turtles/:index', (req, res) => {
    //send turtles as JSON
    turtleSchema.find({}, (error, getData) => {
    res.json(getData[req.params.index])
    })
})


// //turtles index route (send all turtles)
app.post('/turtles', (req, res) => {
    //push the request body into the array
    turtleSchema.push(req.body)
    //send the turtles array as JSON
    res.json(turtles)
})

//turtles update route
app.put('/turtles/:id', (req, res) => {
    //replace the turtle at the specified index with the req body
    turtleSchema.findById(req.params.id, (error, getData) => {
    // turtles[req.params.index] = req.body
    getData = req.body
    //send the turtles array as JSON
    res.json(getData)
})
})

// //turtles delete route
app.delete('/turtles/:id', (req, res) => {
    //remove the turtle at the specified index
    turtleSchema.find({}, (error, getData) => {
        getData.splice(req.params.id, 1)
        res.json({getData})
    })
    // turtles.splice(req.params.index, 1)
    //send the turtles array as JSON
    
})


//listener
app.listen(1337, () => console.log("listening on port 1337"))
mongoose.connect('mongodb://localhost:27017/turtles', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});