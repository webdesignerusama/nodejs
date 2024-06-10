const mongoose=require('mongoose')
require('dotenv').config()

// const mongoURL='process.env.MONGODB_URL_LOCAL'
 const mongoURL=process.env.MONGODB_URL
mongoose.connect(mongoURL, {
    
})
// returns a connection object
const db= mongoose.connection;
// following event listeners to react to certain events 

db.on('connected', ()=>{
    console.log('connected to mongodb server')
})
db.on('error', (err)=>{
    console.log('mongodb connection error', err)
})
db.on('disconnected', ()=>{
    console.log('mongodb server disconnected')
})


module.exports=db
