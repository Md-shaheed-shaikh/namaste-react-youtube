import React, { useState } from 'react'
import ChatMessages from './ChatMessages'
import { addMessage } from '../Utils/liveChatSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { generateName,generateMessage } from '../Utils/helper'
import { useRef } from 'react'
const LiveChat = () => {
        const dispatch=useDispatch();
        const chatMessages=useSelector((store)=>store.liveChat.messages);
        const chatRef = useRef(null);
        const [sendMessage,setSendMessage]=useState("");
  useEffect(()=>{
    const div = chatRef.current;
  div.scrollTop = div.scrollHeight;
         const timer= setInterval(()=>{
             dispatch(addMessage({
              name:generateName(),
              message:generateMessage(),
             }))
          },500)
  
          return ()=>{
            clearInterval(timer);
          }
        },[dispatch])

  return (
    <div  >
      <div ref={chatRef} className='h-150 border rounded-2xl p-2 overflow-y-scroll'>
        {chatMessages.map((c,index)=>{
          return <ChatMessages key={index}  name={c.name} message={c.message}/>
          }) }
      </div>
        <form className='bg-gray-100 rounded mt-2 h-15 p-2 flex gap-2 items-center' 
         onSubmit={(e)=>{
             e.preventDefault();
            dispatch(addMessage({
              name:"Shahid",
              message:sendMessage,
            }))
            setSendMessage("")
          }} >
          <input className='p-2 shadow-2xl bg-white rounded' type="text" placeholder='send message'
          value={sendMessage}
          onChange={(e)=>{
            setSendMessage(e.target.value)
          }}
           />
          <button className='cursor-pointer bg-gray-900 hover:bg-gray-300 rounded-lg h-7 w-15  items-center justify-center gap-2 text-m font-semibold text-white'>send</button>
        </form>
    </div>
  )
}

export default LiveChat