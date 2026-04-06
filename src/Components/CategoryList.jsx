import React from 'react'
import { useDispatch, } from 'react-redux'
import { toggleLivebtn } from '../Utils/toggleLiveSlice';
const CategoryList = () => {
  const dispatch=useDispatch();
  // const toggleLive=useSelector((store)=>store.toggleLive.isToggleLive)
  const list=["Gaming","Esport","JavaScript","News","Formula 1","Live","games","Gaming","Esport","JavaScript","News"]
  const handleLiveBtn=(category)=>{
      if(category==='Live') {
        dispatch(toggleLivebtn())
      }
  }
  return(
    <div className=' grid grid-flow-col auto-cols-max overflow-x-auto gap-4  fixed top-20 z-10 w-full  bg-white pb-2 pt-2 '>
      <div className='flex cursor-pointer bg-black text-white font-semibold rounded-lg whitespace-nowrap h-10  p-3 ml-8 text-md items-center justify-center'>
        All
      </div>
      {list.map((category,index)=><div key={index} onClick={()=>handleLiveBtn(category)} className='flex cursor-pointer bg-gray-100 font-semibold rounded-lg h-10 p-3 text-sm items-center justify-center hover:bg-gray-200'>
        {category}
      </div>)}
      
     
      
      

    </div>
  )
}

export default CategoryList