const express = require('express')
const db =require('./db')
require('dotenv').config()

const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.json());
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Welcome to my hotel , how can i help you?')
})


const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes')

app.use('/person', personRoutes)
app.use('/menu', menuRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})