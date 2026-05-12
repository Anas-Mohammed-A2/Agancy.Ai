import React from 'react'

const Input = ({ title, type, placeholder, img,name }) => {
    return (
        <div>
            <p className='mb-2 text-sm font-medium'>{title}</p>
            <div className="flex pl-3 rounded-lg border border-gray-300
dark:border-gray-600">
                <img src={img} alt="inputIcon" />
                <input type={type} placeholder={placeholder} name={name} className='w-full outline-none text-sm p-3' required />
            </div>
        </div>
    )
}

export default Input