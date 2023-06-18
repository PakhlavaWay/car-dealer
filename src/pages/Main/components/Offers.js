import React from 'react'
import { NavLink } from 'react-router-dom'

const Offers = () => {
  return (
    <section className='bg-[#fff] py-8'>
        <div className='w-[70%] m-auto flex flex-col gap-8'>
            <h2 className='text-[#53494c] text-[clamp(3rem,_0.46vw,_3.8rem)] leading-tight tracking-widest border-b pb-4 w-fit m-auto px-4'>Looking for offers?</h2>
            <p className='text-[#53494c] text-[clamp(1rem,_1.64vw,_2rem)] m-auto'>Acquiring a car can often be a costly undertaking, but it doesn't have to be. At Major World, we offer a diverse selection of used cars at various price points, including options under <span className='font-bold text-[#53494c]'>$10,000</span> <span className='font-bold text-[#53494c]'>$15,000</span> and <span className='font-bold text-[#53494c]'>$20,000</span>. This way, you can choose from a range of affordable vehicles and drive home knowing you got a great deal.</p>
            <div className='text-black flex justify-center gap-16'>
                <NavLink to={'/'} className='rounded-md w-[30%] min-w-fit text-[clamp(1rem,_0.3vw,_4rem)] px-4 py-2 border-[#53494c] bg-[#f2efeb]'>Under 10k</NavLink>
                <NavLink to={'/'} className='rounded-md w-[30%] min-w-fit text-[clamp(1rem,_0.3vw,_4rem)] px-4 py-2 border-[#53494c] bg-[#f2efeb]'>Under 15k</NavLink>
                <NavLink to={'/'} className='rounded-md w-[30%] min-w-fit text-[clamp(1rem,_0.3vw,_4rem)] mx-auto px-4 py-2 border-[#53494c] bg-[#f2efeb]'>Under 20k</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Offers