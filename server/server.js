import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes) 


app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})
