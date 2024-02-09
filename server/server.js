const express=require('express')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
const data=require('./data')

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/data',async(req,res)=>{
    console.log('inside')
    try {
        res.json(data)
    } catch (error) {
        console.log("Error saending the data to the client",error)
    }
})

app.listen(4000,()=>{
    console.log("Connected")
})