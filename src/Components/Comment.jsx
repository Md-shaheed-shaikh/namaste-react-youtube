import React from 'react'
import profileIcon from "../assets/shahidYoutube.png"
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { replyToggleState } from '../Utils/replySlice';
const Comment = ({info}) => {
    
    const dispatch=useDispatch();
    const showReplies=()=>{dispatch(replyToggleState(info.id));}
  return (
    <div className=' bg-gray-50 p-5 shadow-lg hover:shadow-2xl h-auto'>
      <div className='flex gap-3'>
    <div className=' cursor-pointer hover:bg-gray-300 rounded-3xl h-10 w-10  items-center justify-center'>  <img src={profileIcon} alt="plus" className='w-full h-full object-cover rounded-4xl'/></div>
    <div> 
            <div className='font-semibold'>{info.name}</div>
            <div>{info.comment}</div>            
    </div>
    </div>
    <div className='flex items-center'>
      <div className='font-bold cursor-pointer rounded-2xl ml-8 mt-2 w-30 text-center p-2 hover:bg-gray-100 ' onClick={()=>showReplies()} > {info.reply.length} replies ↩ </div>
      
    </div>
   

    </div>
  )
}

export default Comment