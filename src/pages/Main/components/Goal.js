import React from 'react'
import goalImg from '../images/goal.PNG'

const Goal = () => {
  return (
    <section className='bg-[#f2efeb] py-8'>
        <div className='myWrapper flex justify-between'>
            <img src={goalImg} alt='car' className='w-[47%] rounded-md'/>
            <div className='w-[48%] flex flex-col justify-center gap-6'>
                <h2 className='text-[#53494c] text-[clamp(3rem,_0.46vw,_3.8rem)] leading-tight'>
                Our vision is to be the most trusted and respected car dealer in Ohio.
                </h2>
                <button className='w-[30%] rounded-md min-w-fit mx-auto text-white bg-[#53494c] px-6 py-3 font-light text-[clamp(1rem,_0.2vw,_3rem)]'>CONTACT US</button>
            </div>
        </div>
    </section>
  )
}

export default Goal