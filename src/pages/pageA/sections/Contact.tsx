import React from 'react';
import { contactItems } from '../../../constants/navItems.constant';
import { li } from 'motion/react-client';
import { RiLinkedinBoxFill, RiGithubFill } from '@remixicon/react';
function Contact() {
  return (
    <section className='py-20'>
      <div className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800">
        {/* content  */}

        <div>
          <h2>Get In Touch</h2>
          <p className='mt-3.5 mb-7 '>
            Ready to work on your next project. Let's discuss how I can help
            bring your ideas to life.
          </p>

          {/* list  */}

          <ul className=''>
            {contactItems.map((item) => (
              <li key={item.id} className='flex items-center gap-1.5 '>
                <p className='text-white font-semibold '>{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </ul>

          {/* social profiles */}

          <div className="flex items-center gap-2 mt-6 ">
            <button className='hover:text-neutral-300 transition-colors' >
              <RiLinkedinBoxFill size={30} />
            </button > 
            <button className='hover:text-neutral-300 transition-colors'>
              <RiGithubFill size={30} />
            </button>
          </div>
        </div>

        {/* form  */}

        <form action="" className='grid gap-5'>
          {/* input filed */}

          <div className='grid gap-2 '>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              required
            />
          </div>
          {/* input filed */}

          <div className='grid gap-2 '>
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              placeholder="Your Email"
              className="input"
              required
            />
          </div>

          {/* text area  */}

          <div className='grid gap-2'>
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder='Message' className='h-40 border border-neutral-800 indent-4 py-2 resize-none'/> 
          </div>
          <button className='primary-btn max-w-max'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
