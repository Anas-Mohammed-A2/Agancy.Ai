import React from 'react'
import assets from '../../public/assets/assets'
const Footer = ({ theme }) => {
    const footerUrls = [
        { id: '#hero', title: 'Home' },
        { id: '#services', title: 'Services' },
        { id: '#our-work', title: 'Our work' },
        { id: '#constat-us', title: 'Contact Us' },
    ]

    const SocialMediaLinkes = [assets.facebook_icon , assets.instagram_icon ,assets.linkedin_icon,assets.twitter_icon]
    return (
        <footer className='dark:text-white bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4
    sm:px-10 lg:px-24 xl:px-40'>
            {/* footer Top */}
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <div className='space-y-5 text-sm text-gray-700
dark:text-gray-400'>

                    {theme === "light" ?
                        <img src={assets.logo} alt="logo" className='w-32 sm:w-40' />

                        : <img src={assets.logo_dark} alt="logo" className='w-32 sm:w-40' />
                    }
                    <p className='mt-3 max-w-md'>From strategy to execution, we craft digital solutions that move
                        <br /> your business forward.</p>
                    <ul className='gap-8 flex'>{
                        footerUrls.map(({ id, title }) => (
                            <li key={id} className='hover:text-primary'><a href={id}>{title}</a></li>
                        ))
                    }</ul>
                </div>
                <div className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold'>Subscribe to our newsletter
                    </h3>
                    <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
               <div className='flex gap-2  '>
                <input type="email" placeholder='Enter your email' className='W-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>
<button className='px-6 rounded bg-primary text-white'>Susbcribe</button>
               </div>
               
                </div>
            </div>

            <hr className='border-gray-300 dark:border-gray-600 my-6' />
            {/* Bottom Footer */}
<div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
    <p>Copyright 2025 © agency.ai  -  All Right Reserved.</p>
    <div className='flex justify-between items-center gap-4'>
        {SocialMediaLinkes.map((src) => (
            <img key={src} src={src} alt="" className= "object-contain cursor-pointer opacity-80 hover:opacity-100" />
        ))}
    </div>
</div>
        </footer>
    )
}

export default Footer