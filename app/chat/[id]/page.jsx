import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

function ChatPage({params}) {
  return (
    <div>
        <Chat chatId={params.id}/>
        <ChatInput chatId={params.id}/>
    </div>
  )
}

export default ChatPage