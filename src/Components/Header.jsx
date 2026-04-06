import React, { useState,useEffect} from 'react'
import searchIcon from "../assets/search.png"
import voiceIcon from "../assets/voice.png"
import plusIcon from "../assets/plus.png"
import bellIcon from "../assets/bell.png"
import profileIcon from "../assets/shahidYoutube.png"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleState } from '../Utils/sidePanelSlice'
import { cacheAction } from '../Utils/suggestionSlice'
import { Link } from 'react-router-dom'
const Header = () => {
    const toggleData=useSelector((store)=>store.sidePanel.isToggle);
    const suggestionData=useSelector((store)=>store.suggestions);
    // console.log("suggestion",suggestionData)
    const dispatch=useDispatch();
       const toggleSidePanel=()=>{
            console.log(toggleData);
            dispatch(toggleState(toggleData));

        }
const[searchValue,setSearchValue]=useState("");
const[suggestions,setSuggestions]=useState([]);
const[showSuggestions,setShowSuggestions]=useState(false);
const suggestionsfetchApi=async ()=>{
        const data= await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchValue);
        const jsonData=await data.json();
        // console.log(jsonData)
        setSuggestions(jsonData[1]);
        dispatch(cacheAction({
            [searchValue]:jsonData[1]
        }))
        // const data2= await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=fun&type=video&key=AIzaSyAo4N7XsqEUAl4tZ6vEX7bI2Awy9JyEXbI");
        // const jsonData2= await data2.json();
        // console.log(jsonData2);

       
        
        console.log("API CALL",searchValue)
        
    }
 useEffect(()=>{
    const timer=setTimeout(()=>{
        
        if(suggestionData[searchValue]){
             setSuggestions(suggestionData[searchValue])
        }
        else{
                 suggestionsfetchApi();
                 
        }
    
    },300) ;

    return ()=>{
        clearTimeout(timer);
    }

 },[searchValue])
        



  return (
    <div className='flex justify-between h-20 pl-5 sticky top-0 z-50 bg-white'>
        <div className=' flex h-10  '>
            <img className='w-12 h-12 p-2 mt-1 hover:bg-gray-300 rounded-3xl  cursor-pointer' onClick={()=>toggleSidePanel()} src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu" />
            <img className='w-30 h-12 mt-1  cursor-pointer ' src="https://news.wirefly.com/sites/phonedog.com/files/styles/blog_entry/public/blog/content_images/2017/08/newyoutubelogo.jpg?itok=bReHTdT2" alt="youtube logo" />
        </div>
        <div className='flex h-10 mt-2  gap-5 pl-20  ' >
            <div className='flex-1 '>
                <div className='flex'> 
                <input type='text' placeholder='Search' className='border border-gray-300 border-r-none  rounded-l-full w-135 pl-5' 
                    value={searchValue}
                    onChange={(e)=>{setSearchValue(e.target.value), e.target.value?setShowSuggestions(true):setShowSuggestions(false)}}
                />
                <button className='h-10 w-15 pl-4 rounded-r-full border border-gray-300 hover:bg-gray-200 bg-gray-100 cursor-pointer'>
                 <img src={searchIcon} alt="search" className='  w-6 h-auto '/>
                </button>
                    </div>
                   { showSuggestions && suggestions.length>0 && <div className=' w-135 h-auto bg-white p-2 shadow-xl/30 mt-2 rounded-3xl'>
                    <ul className=' '>
                        {suggestions.map((items,index)=>{ 
                            return <Link to={"/results?search_query="+items} key={index} ><li 
                            className='flex items-center cursor-default gap-3 hover:bg-gray-100 px-1 py-2 rounded-lg '>
                            <img src={searchIcon} alt="search" className='  w-4 h-auto '/>{items}</li> </Link>
                        })
                    }
                    </ul>
                    </div>
                }
                </div>
                
                <button className='flex justify-center  items-center p-2 rounded-[100%] border-none hover:bg-gray-300 bg-gray-100 cursor-pointer '>
                 <img src={voiceIcon} alt="search" className='  w-6 h-auto   ' />
                </button>

        </div>
        <div className='flex gap-4 h-10 mt-3 pr-10 '>
            <button className='flex cursor-pointer bg-gray-100 hover:bg-gray-300 rounded-3xl h-9 w-25 p-1 items-center justify-center gap-2 text-sm font-semibold '>
                <img src={plusIcon} alt="plus" className='w-5'/>
                 Create
                </button>
            <div className='flex cursor-pointer hover:bg-gray-300 rounded-3xl h-9 w-10 p-1 items-center justify-center'>  <img src={bellIcon} alt="plus" className='w-7'/></div>
            <div className='flex cursor-pointer hover:bg-gray-300 rounded-3xl h-10 w-10  items-center justify-center'>  <img src={profileIcon} alt="plus" className='w-full h-full object-cover rounded-4xl'/></div>
            
        </div>
    </div>
  )
}

export default Header