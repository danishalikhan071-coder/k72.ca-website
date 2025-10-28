import React from 'react'
import Video from '../Components/Home/Video'
import HomeHeroText from '../Components/Home/HomeHeroText'
import HomeBotomText from '../Components/Home/HomeBotomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
      <Video/>
      </div>
      <div className='h-screen w-screen relative overflow-hidden justify-between flex flex-col'>
        <HomeHeroText/>
        <HomeBotomText/>
      </div>
    </div>
    
  )
}

export default Home