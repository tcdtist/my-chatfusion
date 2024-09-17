import mongoose from 'mongoose'

const conversationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

export default mongoose.model('Conversation', conversationSchema)
