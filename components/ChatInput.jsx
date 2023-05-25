"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

function ChatInput({chatId}) {
  const [prompt,setPrompt] = useState();
  return (
    <div>
      <form className='p-5 space-x-5 flex-1'>
        <input
        value={prompt}
        onChange={(e)=>setPrompt(e,target.value)} 
        type={text}
        placeholder="Type your text here..."
        />
        <button type='submit'>
          <PaperAirplaneIcon
          className='h-4 w-4 -rotate-45' 
          />
        </button>
      </form>
      <div>
        {/* model selection */}
      </div>
    </div>
  )
}

export default ChatInput