import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO).
then(()=>console.log('db connected')).catch(err=>{
    console.log(err)
})

app.listen(4000,()=>{
    console.log('server started')
})

app.use('/auth',userRouter)