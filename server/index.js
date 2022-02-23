const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: 'root',
    password: '',
    host: '127.0.0.1',
    database: 'test'
})
function handleConnect(){
    
    db.connect((err)=>{
        if(err){
            console.log(err)
            setTimeout(handleConnect, 6000)
        } else console.log('Db --- Connect')
    })
    db.on('error', function(err){
        console.log('Error DB --- ', err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR' || err.fatal === false){
            handleConnect()
        } else if(err){
            db = reconnect(db)
        }
    })
    
}
handleConnect()

//api
app.get('/products', (req,res)=>{
    db.query("SELECT * FROM `product`",(err,result)=>{
        if(err){
            console.log('Error --- ', err)
            res.send({message: "Error"})
        } else {
            res.send(result)
        }
    })
})



app.listen(3000, ()=>{
    console.log("App --- Connect")
})
