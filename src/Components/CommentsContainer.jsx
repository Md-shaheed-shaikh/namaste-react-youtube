import React from 'react'
import CommentsList from './CommentsList'
import { commentData } from '../Utils/commentData'
const CommentsContainer = () => {
  return (
    <div className='bg-gray-50 w-280 pl-4'>
        <div className='text-2xl font-bold my-2'>Comments :</div>
        <CommentsList comments={commentData}/>
        
    </div>
  )
}

export default CommentsContainer