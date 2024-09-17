import { Request, Response } from 'express'
import Conversation from '../models/Conversation'
import Message from '../models/Message'

export const getConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await Conversation.find().populate('participants', 'username')
    res.json(conversations)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching conversations' })
  }
}

export const getConversationMessages = async (req: Request, res: Response) => {
  try {
    const { conversationId } = req.params
    const messages = await Message.find({ conversation: conversationId })
      .populate('sender', 'username')
      .sort({ timestamp: 1 })
    res.json(messages)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching messages' })
  }
}
