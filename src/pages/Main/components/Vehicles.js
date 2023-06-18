import React from 'react'
import MySwiper from '../../../helpers/swiper/MySwiper'

const Vehicles = () => {
  return (
    <section className='py-8'>
        <div className='myWrapper'>
        <h2 className='text-[#53494c] text-[clamp(3rem,_0.46vw,_3.8rem)] leading-tight tracking-widest pb-4 w-fit m-auto px-4'>Featured Vehicles</h2>
        <MySwiper />
        </div>
        
    </section>
  )
}

export default Vehicles