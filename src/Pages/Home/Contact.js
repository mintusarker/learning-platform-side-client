import React from 'react';
import { toast } from 'react-hot-toast';

import './Contact.css'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Form submitted, Thanks for reaching out', 5000)
        e.target.reset()
    }
    return (
        <div className='py-5 mt-5 first-part'>
            <div className='text-center pb-4'>
                <p className='fw-bold fs-1 border-bottom d-inline'>Contact Us</p>
                <p className=''>Submit the form to get in touch with us</p>
            </div>
            <div className='row align-items-baseline mx-auto w-auto pe-5 px-5 py-2'>

                <div className='col-lg-4 col-md-5 w-auto mx-auto border-start border-2 bg-opacity-1 rounded-2 ps-4 mb-5'>
                    <div className='py-8'>
                        <p className='fs-4 fw-semibold'>Have a question?</p>
                        <span className=''>Email us at mintosarker707@gmail.com</span>
                    </div>
                    <div className='pt-5 mt-4 '>
                        <span className='fs-5'>Current Location</span>
                        <p className=''>Dhaka, Bangladesh</p>
                    </div>
                </div>


                <form action="" onSubmit={handleSubmit} className=' row w-full mx-auto col-lg-6 col-md-7'>
                    <input type="text" name='name' placeholder='Enter your name' className='contact-input p-2 rounded-md' required />
                    <input type="email" name='name' placeholder='Enter your email' className='contact-input p-2 my-3 rounded-md' required />

                    <textarea style={{ height: '100px' }} name="message" rows="10" placeholder='Enter your message' className='contact-input p-2' required></textarea>

                    <button className='btn btn-outline-primary p-2 mt-4 w-25 mx-auto'>Let's talk</button>
                </form>

            </div>

            
        </div>


    );
};

export default Contact;