const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const mango = require('./models/mango')

require('dotenv').config({ path: './config/.env' })

// Connection to DB
connectDB()

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

app.get('/api', async (req, res) => {
   try {
      let allMangos = await mango.find({}, '-_id')

      res.json(allMangos)
   } catch (err) {
      console.log(err)
   }
})

app.get('/api/:name', async (req, res) => {
   try {
      const name = req.params.name

      let specificMango = await mango.findOne(
         { name: { $regex: `^${name}$`, $options: 'i' } },
         '-_id'
      )

      res.json(specificMango)
   } catch (err) {
      console.log(err)
   }
})

app.listen(process.env.PORT, () => {
   console.log(`The server is running on port ${process.env.PORT}`)
})
