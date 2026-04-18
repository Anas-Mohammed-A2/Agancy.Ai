import React from 'react'

const ServicesCard = ({ service, index }) => {
    return (
        <div className='cursor-pointer overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100
dark:shadow-white/10  hover:border-primary duration-130' >
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 '>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt="icon" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
                <div className='flex-1 gap-2'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm'>{service.desc}</p>
                </div>
            </div>


        </div >
        // ServicesCard
    )
}

export default ServicesCard

/*
Card
 └── Inner Flex Container
      ├── Icon Box
      │    └── img
      └── Text Box
           ├── h3
           └── p
           */ 