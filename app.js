import express from 'express'
import mongoose from 'mongoose'
import { config, configDotenv } from 'dotenv'
import http from 'http'
import userRouter from './routes/user.js'
import fileRouter from './routes/file.js'

configDotenv()

const app = express()
app.use(express.json())

const server = http.createServer(app)

mongoose.connect("mongodb://localhost:27017/abac_lab")
.then(() => {
  server.listen(3000, ()=> {
    console.log("server started at port 3000")
  })
})
.catch((err) => {
  console.log(`Error: ${err}`)
})