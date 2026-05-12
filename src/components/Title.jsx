import React from 'react'

const Title = ({title , desc}) => {
  return (
    <div className='flex flex-col items-center gap-2'>
     <h3 className='text-3xl sm:text-5xl font-medium'>{title}</h3>
     <p className='text-gray-500 dark:text-white/75 max-w-lg text-center mb-6'>{desc}</p>
    </div>
  )
}

export default Title