const mongoose=require('mongoose')
const mongoURL='mongodb://0.0.0.0:27017/hotels'
 
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
