import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Title from './Title'
import Input from './Input'
import assets from '../../public/assets/assets'
const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "dd1bb409-e938-4a3e-8aef-cb74a4b66bed");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();

            if (data.success) {
                event.target.reset();
                setResult("");
                toast.success("Form submitted successfully");
            } else {
                setResult("");
                toast.error(data.message || "Submission failed");
            }
        } catch (error) {
            setResult("");
            toast.error(error.message || "Network error");
        }
    };

    return (
        <div id='contact-us' className='w-full flex-col flex flex-center items-center gap-7 px-4 sm:px-12
lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title="Reach out to us" desc="Ready to grow your brand? Let’s connect and build something exceptional together." />

            <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={onSubmit}>
                <Input title="Your name" type="text" placeholder="Enter your name" img={assets.person_icon} name="name" />
                <Input title="Email id" type="email" placeholder="Enter your email" img={assets.email_icon} name="email" />

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300
       dark:border-gray-600' name="message" required />
                </div>
                {result ? (
                    <p className="sm:col-span-2 text-sm text-gray-600 dark:text-gray-400">{result}</p>
                ) : null}
                <button type='submit' disabled={result === "Sending...."} className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all disabled:opacity-60 disabled:pointer-events-none'>Send <img src={assets.arrow_icon} alt="arrow icon" width={14} /></button>
            </form>
        </div>
    )
}

export default ContactUs