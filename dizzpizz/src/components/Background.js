import React from 'react'
import BgOne from '../assests/bg_1.jpg';
import BgThree from '../assests/bg_3.jpg';
const Background = () => {
  return (
    <div className='relative'>
        <img src={BgOne} alt="background-1" className='absolute w-full max-h-[700px] object-cover' />
        <img src={BgThree} alt="background-1" className='absolute w-full max-h-[700px] object-cover'/>
    </div>
  )
}

export default Background;