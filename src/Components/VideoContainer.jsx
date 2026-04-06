
// import f1thumbnail from "../assets/f1thumbnail.png"
// import song2 from "../assets/song2.png"
// import thumbnail3 from "../assets/thumbnail3.png"
// import thumbnail4 from "../assets/thumbnail4.png"
import VideoCards from './VideoCards'
import { YOUTUBE_API } from '../Utils/constants'
import { useQuery } from '@tanstack/react-query'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { closeState } from '../Utils/sidePanelSlice'
const fetchApi= async ()=>{
    const data=await fetch(YOUTUBE_API);
    const json_data=await data.json();
    // console.log(json_data.items)
    // console.log(json_data.items[0].snippet.thumbnails.maxres.url)
    
    return json_data.items;
  }
const VideoContainer = () => {
  
  const {data:videoData,isLoading}=useQuery({
    queryKey:["videos"],
    queryFn:fetchApi,
  })


      const toggleData=useSelector((store)=>store.sidePanel.isToggle);
      const dispatch=useDispatch();
      const toggleSidePanel=()=>{ dispatch(closeState(toggleData)); }
  
  
  return isLoading ?<h1>loading</h1> : (
    <div className=' grid grid-cols-3 gap-1 ml-2 mt-15 mb-5 '>
       {videoData.map((items)=>(
        <div key={items.id ||items.id.videoId }> 
    
      <Link to={"/watch?v="+items.id || "/watch?v="+items.id.videoId } onClick={()=>toggleSidePanel()} > <VideoCards info={items} /> </Link>
        </div>
      ))}  
    </div>
    
  )
}

export default VideoContainer