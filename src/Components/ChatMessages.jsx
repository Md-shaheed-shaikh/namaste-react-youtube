import React from 'react'
import profileIcon from "../assets/shahidYoutube.png"
const ChatMessages = ({name,message}) => {
  return (
    <div className='flex gap-2 mb-2 hover:border rounded-xl cursor-default p-1'>
                <div className=' hover:bg-gray-300 rounded-3xl h-8 w-8  items-center justify-center'>  <img src={profileIcon} alt="plus" className='w-full h-full object-cover rounded-4xl'/></div>
                <div className='mt-0.5 font-semibold text-gray-900'>@{name} <span className='mt-0.5 ml-1 text-sm text-gray-600 '>{message}</span></div>
                
            </div>
  )
}

export default ChatMessages