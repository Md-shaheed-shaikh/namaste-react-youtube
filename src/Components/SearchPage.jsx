
import { YOUTUBE_SEARCH_API } from '../Utils/constants'
import { useSearchParams } from 'react-router-dom'
import { API_KEY } from '../Utils/constants'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closeState } from '../Utils/sidePanelSlice'
import { Link } from 'react-router-dom'
import SearchPageVideoCards from './SearchPageVideoCards'
const SearchPage = () => {

     const toggleData=useSelector((store)=>store.sidePanel.isToggle);
      const dispatch=useDispatch();
      const toggleSidePanel=()=>{ dispatch(closeState(toggleData)); }

    console.log("searchp page")
    const [searchParams]=useSearchParams();
    // const [searchResults,setSearchResults]=useState();
    const getQuery=searchParams.get("search_query");
    console.log("inside getquery",getQuery);

    const fetchApi=async ()=>{
        const data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${getQuery}&type=video&key=${API_KEY}`);
        const jsonData=await data.json();
         console.log(jsonData);
         return jsonData.items || [];
       
    }
    


     
  const {data:searchResults,isLoading}=useQuery({
    queryKey:["Results",getQuery],
    queryFn:fetchApi,
    refetchOnWindowFocus: false,
  })
   return isLoading ?<h1>loading</h1> :(
    <div className='mt-10'>
        {searchResults.map((items)=>(
        <div key={items.id.videoId } className={`${toggleData ? "ml-60" : "ml-0"} flex-1  w-500` }> 
    
      <Link to={"/watch?v="+items.id.videoId } onClick={()=>toggleSidePanel()} > <SearchPageVideoCards info={items} /> </Link>
      <div className="border-b border-gray-300 mt-2"></div>
        </div>
      ))}
    </div>
  )
}

export default SearchPage