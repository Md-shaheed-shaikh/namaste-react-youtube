import React from 'react'
import profileIcon from "../assets/shahidYoutube.png"
import more from "../assets/more.png"
import song1 from "../assets/song1.png"

 const SearchPageVideoCards = ({info}) => {

 
// thumbnail={ items.snippet.thumbnails.maxres?.url || song1 }
//                     channelTitle={items.snippet.channelTitle }
//                     videoTitle={items.snippet.title }
//                     views={items.statistics.viewCount }
//                     duration={getMonthsAgo(items.snippet.publishedAt)}

  const {thumbnails,channelTitle,title}=info.snippet;
  

  return (
    <div className='videoCard flex g-3  w-350 h-80 cursor-pointer rounded-xl  p-5 mt-2  transition-transform duration-300 hover:scale-101'>
        <img src={thumbnails.high?.url || song1 } alt="image" className='rounded-xl w-180 h-70  object-fill '/>
            
            <div className='videoTitle pl-5 w-300'> 
                <div className='font-semibold text-xl '>{title}</div>
                <div className='text-gray-600' > views. <span>0 months ago</span></div>
                <div className='text-gray-600 flex items-center gap-2'> <div className='channelLogo '>
                <img src={profileIcon} alt="plus" className='w-8 h-8   object-cover rounded-full'/>
            </div>{channelTitle}</div>
                
                
            </div>
            
        
        <div className='Dots flex cursor-pointer hover:bg-gray-200 rounded-4xl h-10 w-17 items-center justify-center '>
              <img src={more} alt="image" className='w-7 h-7 object-fill ' />

            </div>
        
    </div>
  )
}



export default SearchPageVideoCards;