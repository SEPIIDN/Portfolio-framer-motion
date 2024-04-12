'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setError(false);
    setSuccess(false);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey:
            process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true), form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0vh' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <form
          onSubmit={sendEmail}
          ref={form}
          className='w-full h-full flex flex-col items-center justify-center gap-8 bg-red-50 lg:w-1/3'
        >
          <span>Name</span>
          <input
            required
            name='user_name'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none w-3/4'
          />
          <span>Email</span>
          <input
            required
            name='user_email'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none w-3/4'
          />
          <span>Company</span>
          <input
            name='user_company'
            type='text'
            className='bg-transparent border-b-2 border-b-black outline-none w-3/4'
          />
          <span>Your Message</span>
          <textarea
            name='user_message'
            rows='6'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none w-3/4'
          />
          <button className='bg-purple-200 rounded font-semibold text-gray-600 w-3/4 py-2'>
            Send
          </button>
          {success && (
            <span className='text-green-500 font-semibold'>
              your message has been sent!
            </span>
          )}
          {error && (
            <span className='text-red-500 font-semibold'>
              something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
