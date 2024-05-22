import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import router from './routes/index.js'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port  = process.env.PORT || 5000

const app = express()
dotenv.config()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use("/api/v1",router)

app.use(express.static(join(__dirname,"./client/build")))

app.get("*",function(req,res){
    res.sendFile(join(__dirname,"./client/build/index.html"))
})

mongoose.connect(process.env.MONGOURL).then(()=>console.log("database connected"))

app.listen(port,()=>console.log(`app is running on port ${port}`))