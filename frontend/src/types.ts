export interface User {
  id: string
  name: string
  email: string
}

export interface Message {
  id: string
  text: string
  sender: User
  timestamp: Date
}
