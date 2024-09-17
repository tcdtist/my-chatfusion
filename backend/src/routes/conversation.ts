import express from 'express'
import { getConversations, getConversationMessages } from '../controllers/conversation'

const router = express.Router()

router.get('/', getConversations)
router.get('/:conversationId/messages', getConversationMessages)

export default router
