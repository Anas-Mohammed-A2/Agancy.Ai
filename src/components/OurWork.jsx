import React from 'react'
import Title from './Title'
import assets from '../../public/assets/assets'

const OurWork = () => {
    const workData = [
        {
            title: "Mobile app marketing",
            desc: "We turn bold ideas into powerful digital solutions that connect...",
            img: assets.work_mobile_app,

        },
        {
            title: "Dashboard management",
            desc: "We turn bold ideas into powerful digital solutions that connect...",
            img: assets.work_dashboard_management,

        }, {
            title: "Fitness app promotion",
            desc: "We turn bold ideas into powerful digital solutions that connect...",
            img: assets.work_fitness_app,

        }
    ]
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title={"Our latest work"} desc={"Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-6">
                {workData.map((project, i) => (
                    <div key={i} className='gap-1.5 flex flex-col sm:text-start text-center sm:items-start items-center hover:scale-102 duration-500
                    transition-all cursor-pointer'>
                        <img src={project.img} alt="img" className='w-[70%] rounded-xl sm:w-full' />
                <h3>{project.title}</h3>
                  <p className='text-sm text-gray-400 w-5/6'>{project.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurWork