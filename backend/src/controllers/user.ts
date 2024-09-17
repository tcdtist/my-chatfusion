import { Request, Response } from 'express'
import User from '../models/User'

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' })
  }
}
