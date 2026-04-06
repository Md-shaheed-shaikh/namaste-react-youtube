
import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Watch from './Watch'
import Body from './Body'
import MainContainer from './MainContainer'
import SearchPage from './SearchPage'
import VideoContainer from './VideoContainer'
export const AppRouter=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
       children:[
                {
                    path:"/",
                    element:<VideoContainer/>,
                },{
             path:'/watch',
             element:<Watch/>,
        }, 
        {
             path:'/results',
             element:<SearchPage/>,
        }],
      errorElement:"error"
    },
    
  ]
)