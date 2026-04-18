import React from 'react'
import assets from '../../public/assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'

const Services = () => {
    const servicesData = [
        {
            title: "Advertising",
            desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: assets.ads_icon,

        },
        {
            title: "Content marketing",
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
            icon: assets.marketing_icon,

        },
        {
            title: "Content writing",
            desc: "We turn bold ideas into powerful digital solutions that connect...",
            icon: assets.content_icon,

        }, {
            title: "Social media",
            desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: assets.social_icon,

        },
    ]
    return (
        <div id='Services' className='overflow-hidden relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title="How can we help?" desc="From strategy to execution, we craft digital solutions that move your business forward." />
         <div className='flex flex-col md:grid grid-cols-2'>

            {servicesData.map((service, i) => ( 
                <ServicesCard key={i} index={i} service={service} />
            ))}

            </div>
        </div>
    )
}

export default Services