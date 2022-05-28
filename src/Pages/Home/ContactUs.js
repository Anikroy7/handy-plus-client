import React from 'react';

const ContactUs = () => {
    return (
        <section className='mt-24 bg-slate-300' >
            <div className='text-center p-9 '>
                <h4 className='text-secondary font-semibold text-xl'>Conatact Us</h4>

                <input type="email" required placeholder="Type your email" className="input w-full max-w-xs mt-6" /><br />
                <input type="text" required placeholder="Subject" className="input w-full max-w-xs mt-3 " /><br />
                <textarea className="textarea w-full h-24 mt-4 max-w-xs" placeholder="Your message"></textarea>
                <div>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-4">Submit</button>
                </div>
            </div>
        </section>
    );
};
export default ContactUs;