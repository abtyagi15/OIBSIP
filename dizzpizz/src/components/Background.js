import React from 'react'
import BgOne from '../assests/bg_1.jpg';
import BgThree from '../assests/bg_3.jpg';
const Background = () => {
  return (
    <div className='w-full h-full absolute'>
        <img src={BgThree} alt="background-1" className='absolute z-[10] w-full h-full max-h-[700px] object-cover'/>
        <img src={BgOne} alt="background-2" className='absolute w-full h-full max-h-[700px] object-cover' />
    </div>
  )
}

export default Background;