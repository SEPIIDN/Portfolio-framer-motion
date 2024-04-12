'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0vh' }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row lg:overflow-clip lg:px-8'>
        {/* HERO */}
        <div className='relative h-1/2 lg:h-full md:w-1/2 lg:w-1/3'>
          <Image
            src='/hero.png'
            alt='hero'
            fill
            className='object-contain'
          />
        </div>
        {/* END HERO */}
        {/* INTRO */}
        <div className='flex flex-col justify-center gap-4 px-4 h-1/2 sm:mt-8 md:mt-0 md:w-1/2 lg:h-full lg:w-2/3 lg:mr-10'>
          <h1>
            Lorem ipsum dolor sit amet elit.
            Repellendus, sed.
          </h1>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente nobis
            exercitationem, ipsam eveniet facilis
            aliquid at delectus molestiae alias,
            inventore, laborum suscipit quia
            itaque sint ea similique nemo
            cupiditate accusamus. Adipisci nulla
            architecto, repudiandae officiis
            pariatur odit dolore beatae incidunt
            numquam amet consequuntur modi
            aliquid, illo quis voluptatum cumque
            fugit.
          </p>
          <div className='flex justify-center md:justify-start gap-8'>
            <button className='bg-black px-8 py-2 rounded-md border-2 border-black text-white hover:bg-white hover:text-black hover:border-black transition duration-300'>
              View My Work
            </button>
            <button className='bg-white px-8 py-2 rounded-md border-2 border-black text-black hover:bg-black hover:text-white transition duration-300'>
              Contact Me
            </button>
          </div>
        </div>
        {/* END INTRO */}
      </div>
    </motion.div>
  );
};

export default Homepage;
