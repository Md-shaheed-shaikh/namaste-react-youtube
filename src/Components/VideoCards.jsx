import React from 'react'
import profileIcon from "../assets/shahidYoutube.png"
import more from "../assets/more.png"
import song1 from "../assets/song1.png"

 const VideoCards = ({info}) => {

  const getMonthsAgo = (dateString) => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  const years = currentDate.getFullYear() - givenDate.getFullYear();
  const months = currentDate.getMonth() - givenDate.getMonth();

  return years * 12 + months;
};
 
// thumbnail={ items.snippet.thumbnails.maxres?.url || song1 }
//                     channelTitle={items.snippet.channelTitle }
//                     videoTitle={items.snippet.title }
//                     views={items.statistics.viewCount }
//                     duration={getMonthsAgo(items.snippet.publishedAt)}

  const {thumbnails,channelTitle,title,publishedAt}=info.snippet;
  const {viewCount}=info.statistics;
  const duration=getMonthsAgo(publishedAt)

  return (
    <div className='videoCard  min-h-auto cursor-pointer hover:bg-gray-50 hover:shadow-sm rounded-xl p-2 mt-2 transition-transform duration-300 hover:scale-101'>
        <img src={thumbnails.maxres?.url || song1 } alt="image" className='rounded-xl   object-fill'/>
        <div className='videoInfo flex  justify-between mt-2 gap-3'>
            <div className='channelLogo'>
                <img src={profileIcon} alt="plus" className='w-10 h-10   object-cover rounded-full'/>
            </div>
            <div className='videoTitle flex-1 '> 
                <div className='font-semibold '>{title}</div>
                <div className='text-gray-600'>{channelTitle}</div>
                <div className='text-gray-600' > {viewCount} views. <span>{duration} months ago</span></div>
                
            </div>
            <div className='Dots cursor-pointer hover:bg-gray-200 rounded-3xl h-9 w-9 p-1  items-center justify-center'>
              <img src={more} alt="image" className='w-7 h-7 object-fill ' />

            </div>
        </div>

    </div>
  )
}



export default VideoCards;