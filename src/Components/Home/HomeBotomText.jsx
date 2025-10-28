import React from 'react'
import { Link } from 'react-router-dom'

const HomeBotomText = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-2 text-white'>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-23 flex items-center px-14 border-white rounded-full uppercase mb-3'>
        <Link className='text-[6vw] mt-3' to='/projects'>Projets</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-23 flex items-center px-14 border-white rounded-full uppercase mb-3'>
        <Link className='text-[6vw] mt-3' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBotomText