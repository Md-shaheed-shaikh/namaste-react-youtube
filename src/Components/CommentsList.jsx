import React from 'react'
import Comment from './Comment'
import { useSelector } from 'react-redux';
const CommentsList = ({comments}) => {
    const replyToggleData=useSelector((store)=>store.showReplies);

  return (
    <div>
        {comments.map((info)=>{
           return <div key={info.id} className='my-2 p-1'> 
           <div><Comment info={info}/></div> 
           {replyToggleData[info.id] && <div className='pl-5 rounded-bl-lg  border-l border-gray-400' ><CommentsList comments={info.reply}/></div>}
           </div>
        })}
    </div>
  )
}

export default CommentsList