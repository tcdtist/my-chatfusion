import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database'
import conversationRoutes from './routes/conversation'
import userRoutes from './routes/user'

dotenv.config()
const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/conversations', conversationRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
