import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CommentsContainer from './CommentsContainer'
import { closeState } from '../Utils/sidePanelSlice'
import WatchpageSuggestion from './WatchpageSuggestion'
import TitleAndDescription from './TitleAndDescription'
import LiveChat from './LiveChat'
const Watch = () => {
   const [searchParams]=useSearchParams();
   console.log(searchParams.get("v"))
   const vid=searchParams.get("v");
     const toggleLive=useSelector((store)=>store.toggleLive.isToggleLive)
   const toggleData=useSelector((store)=>store.sidePanel.isToggle);
      const dispatch=useDispatch();
      const toggleSidePanel=()=>{ dispatch(closeState(toggleData)); }
      useEffect(()=>{
        toggleSidePanel();
      },[])
      
  return (
  <div className='mt-20'>
      <div className='flex items-start '>
          {/* vertical - video , title , comments */}
            <div>     
                <div className='pl-5 '>
                <iframe className='rounded-3xl' width="1100" height="560" src={"https://www.youtube.com/embed/"+vid } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>   
                </div>

                <div className='m-5 p-5 bg-gray-100 rounded-2xl h-50 text-center'>
                {/* Video Title and Description */}
                <TitleAndDescription/>
                </div>

                <div className='p-2'>
                {/* comments */}
                <div> <CommentsContainer/></div>
                </div>
            </div>
             {/* side panel suggestions video cards , live chats */}
             <div className='mr-2'>  
                {toggleLive?<LiveChat />:<div></div>}
                <WatchpageSuggestion/>
              </div>
        
        </div>

        

          
    </div>
    
  )
}

export default Watch