import React from 'react'

import HomeSwiper from "./components/HomeSwiper/HomeSwiper";
import SearchNav from "components/SearchNav/SearchNav";
import HomeNav from "./components/HomeNav/HomeNav";
import HomeFloor from "./components/HomeFloor/HomeFloor";
import "./Home.less"

export default function Home() {
  return (
    <div id='Home'>
      <SearchNav />
      <HomeSwiper />
      <HomeNav />
      <HomeFloor />
    </div>
  )
}
