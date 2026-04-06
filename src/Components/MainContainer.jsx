import React from 'react'
import CategoryList from './CategoryList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
const MainContainer = () => {

  const toggleData=useSelector((store)=>store.sidePanel.isToggle);
  return (
    <div className={`${toggleData ? "ml-64" : "ml-0"} flex-1 w-100  `}>
        <CategoryList/>
        <Outlet/>
    </div>
  )
}

export default MainContainer