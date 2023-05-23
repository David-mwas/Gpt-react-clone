"use client"
import { useSession,signOut } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'

function SideBar() {
  const {data:session}=useSession();
 
  return (
    <div className='flex flex-col h-screen p-2 '>
        <div className="flex-1">
           <div>
            {/* newchat */}
            <NewChat/>
            <div>
                {/* model selection */}
            </div>
            {/* map via chat rows */}
            
           </div>
        </div>
        {session && (
          //https://lh3.googleusercontent.com/a/AGNmyxbQYWTSHXntFKiflGvMlZzlPx0b9jH3A9nob1-ccQ=s96-c
          <img 
          onClick={()=>signOut()}
          src={session.user?.image}
          alt={`${session.user?.name} google pic`}
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 shadow-lg shadow-gray-400'
          />
        )}
    </div>
  )
}

export default SideBar