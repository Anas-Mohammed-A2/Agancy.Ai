import React from 'react'
import Title from './Title'
import { teamData } from '../../public/assets/assets'

const Teams = () => {

    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
  xl:px-40 pt-30 text-gray-800 dark:text-white'>
            {/* title */}
            <Title title="Meet the team" desc="A passionate team of digital experts dedicated to your
            brand’s success."/>
            {/* cards */}
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {teamData.map((person, i) => (
                    <div key={i} className='cursor-pointer flex max-sm:flex-col items-center gap-5 p-4
                        rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl
                        hover:scale-103 transition-all duration-400'>
                        <img src={person.image} alt="personImg" className='w-12 h-12 rounded-full'/>
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{person.name}</h3>
                            <span className='text-xs opacity-60'>{person.title}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Teams