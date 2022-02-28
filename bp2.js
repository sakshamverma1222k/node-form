
var express = require("express")
var bodyparser = require("body-parser")
var http = require("http")
const path = require("path")
const port = 3000

var app = express()

app.use('/login',express.static(path.join(__dirname)))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))  // used to accept the passed value in the related html file
app.get('/', (req,res)=>{
  res.send("Hello World!")
})
app.get('/login', (req,res)=>{
  res.sendFile(path.join(__dirname,'file.html')) //to get a file file.html ==> path.join(__dirname,'file.html')
})
app.post('/login', (req,res)=>{
  console.log(req.body)
  res.json({success : true})
})
app.listen(port)
