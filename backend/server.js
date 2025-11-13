import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectionCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import reservationRouter from './routes/reservationRoute.js'

const app = express()

const port = process.env.PORT || 4000

connectDB();
connectionCloudinary();

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/reservation', reservationRouter)

app.get('/', (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('server started on port ' +port))