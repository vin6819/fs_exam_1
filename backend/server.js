import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Note from './noteModel.js'
import connectDB from './db.js'
const app=express()

app.use(cors())
app.use(express.json())
await connectDB()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/savenote', async (req, res) => {
    const {curr, date} = req.body
    
    const createdNote=await Note.create({
        content:curr,
        date:date
    })
    return res.json({data:createdNote})
})

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})