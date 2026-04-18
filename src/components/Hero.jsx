import React from 'react'
import assets from '../../public/assets/assets'

const Hero = () => {
    return (
        <section className='Hero relative overflow-x-clip flex flex-col items-center justify-center gap-6 py-20 px-4 sm:px-12
lg:px-24 xl:px-40 text-center w-full text-gray-700
dark:text-white'>
            <div className='gap-3 flex flex-initial items-center border border-gray-300 rounded-full p-1.5 pr-4 dark:border-primary'>
                <img src={assets.group_profile} alt="img" className='w-20' />
                <span className='text-xs font-medium'>Trusted by 10k+ people</span>
            </div>


            <div className="w-full max-w-5xl">
                <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
                 xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</h1>
                <p className='mt-4 text-center text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg pb-3 mx-auto'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
            </div>
            <div className="relative w-full overflow-hidden">
                <img src={assets.hero_img} alt="hero img" className='mx-auto w-full max-w-6xl h-auto object-contain' />
                <img
                    src={assets.bgImage1}
                    alt=""
                    aria-hidden="true"
                    className='pointer-events-none select-none absolute -z-10 hidden sm:block top-1/2 right-0 -translate-y-1/2 w-[520px] lg:w-[680px] max-w-none dark:hidden opacity-40'
                />
            </div>
        </section>
    )
}

export default Hero