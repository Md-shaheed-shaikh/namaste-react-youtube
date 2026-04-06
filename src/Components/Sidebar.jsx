import React from 'react'
import shortsIcon from "../assets/shorts.png"
import homeIcon from "../assets/home.png"
import sideArrowIcon from "../assets/sideArrow.png"
import downArrowIcon from "../assets/downArrow.png"
import profileIcon from "../assets/shahidYoutube.png"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {

  const toggleData=useSelector((store)=>store.sidePanel.isToggle)
  if(!toggleData) return null;
  return  (
    <div className=' w-60  fixed top-20 h-[calc(100vh-5rem)] flex flex-col pl-2 overflow-y-auto overflow-x-hidden  bg-white  '>
        {/* Home-shorts */}
        <div className=' w-50   text-center text-sm '>
          <Link to={'/'}><div className='home bg-gray-100 hover:bg-gray-200 rounded-xl h-10 flex items-center gap-5 p-5 font-semibold cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            Home</div> </Link>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            Shorts</div>
        </div>
      <div className="border border-gray-200 mt-3 w-55"> </div>
    
    {/* Subscriptions */}
      <div className=' w-50   text-center'>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-2 p-4  mt-3 text-[18px] font-semibold cursor-pointer'>
            Subscriptions
            <img src={sideArrowIcon} alt="plus" className='w-5'/>
            </div>
        
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5 cursor-pointer'>
            <img src={profileIcon} alt="plus" className='w-7 h-7 object-cover rounded-full'/>
            KRAFTON
            </div>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5  cursor-pointer'>
            <img src={profileIcon} alt="plus" className='w-7 h-7 object-cover rounded-full'/>
            TalkEsports
            </div>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5  cursor-pointer'>
            <img src={profileIcon} alt="plus" className='w-7 h-7 object-cover rounded-full'/>
            Akshaysaini
            </div>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5  cursor-pointer'>
            <img src={profileIcon} alt="plus" className='w-7 h-7 object-cover rounded-full'/>
            peopleofemaan
            </div>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5 text-sm  cursor-pointer'>
            <img src={downArrowIcon} alt="plus" className='w-7'/>
            Show more
            </div>
      </div>
      <div className="border border-gray-200 mt-3 w-55"> </div>

      {/* You */}
      <div className=' w-50   text-center text-sm '>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-2 p-5 mt-3 text-[18px]  font-semibold cursor-pointer'>
            You
            <img src={sideArrowIcon} alt="plus" className='w-5'/>
            </div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            History</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            Playlist</div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            Watch later</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            Liked videos</div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            Your videos</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            Downloads</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-5   cursor-pointer'>
            <img src={downArrowIcon} alt="plus" className='w-7'/>
            Show more
            </div>
        </div>
      <div className="border border-gray-200 mt-3 w-55"> </div>

    {/* Explore */}
    <div className=' w-50   text-center text-sm '>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-2 p-5  mt-3 text-[18px]  font-semibold cursor-pointer'>
            Explore   </div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            Shopping</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            Music</div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            Flims</div>
            
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-4   cursor-pointer'>
            <img src={downArrowIcon} alt="plus" className='w-7'/>
            Show more
            </div>
        </div>
      <div className="border border-gray-200 mt-3 w-55"> </div>

{/* More from youtube */}
    <div className=' w-50   text-center text-sm '>
        <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-2 p-5  mt-3 text-[17px]  font-semibold cursor-pointer'>
            More from youtube   </div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            YouTube Premium</div>
            <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-4 p-4 cursor-pointer '>
            <img src={shortsIcon} alt="plus" className='w-8'/>
            YouTube Music</div>
          <div className='home hover:bg-gray-100 rounded-xl h-10 flex items-center gap-5 p-5  cursor-pointer'>
            <img src={homeIcon} alt="plus" className='w-6'/>
            YouTube Kids</div>
          
        </div>
      <div className="border border-gray-200 mt-3 w-55"> </div>


    </div>
  )
}

export default Sidebar