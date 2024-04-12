'use client';
import Brain from '@/components/Brain';
import {
  motion,
  useInView,
  useScroll,
} from 'framer-motion';
import { useRef } from 'react';
const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  // SKILL VIEW
  const skillRef = useRef();
  const skillIsInView = useInView(skillRef);

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0vh' }}
      transition={{ duration: 1 }}
    >
      {/* MAIN CONTAINER */}
      <div
        className='flex h-full overflow-y-scroll'
        ref={containerRef}
      >
        {/* INTRO */}
        <div className='flex flex-col gap-24 py-4 px-16 md:gap-32 lg:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2 xl:gap-[500px]'>
          {/* BIOGRAPHY */}
          <div className='flex flex-col gap-12 lg:mt-20'>
            <h1>Biography</h1>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis
              aliquid nobis non, iure asperiores
              consequuntur repellendus sequi
              beatae. Iusto eius iure voluptas
              esse numquam, tempora, nam similique
              molestiae excepturi odio est soluta
              recusandae sunt quod inventore culpa
              molestias quam debitis nesciunt ut
              minima ipsum non, reiciendis facere!
              Est, ipsam sint!
            </p>
            <span className='font-light italic'>
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iure,
              sunt?
            </span>
          </div>
          {/* END BIOGRAPHY */}
          {/* SKILLS */}
          <div
            className='flex flex-col gap-12'
            ref={skillRef}
          >
            <motion.h1
              initial={{ x: '-100vw' }}
              animate={
                skillIsInView ? { x: 0 } : {}
              }
              transition={{ delay: 0.2 }}
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{ x: '-100vw' }}
              animate={
                skillIsInView ? { x: 0 } : {}
              }
              transition={{ delay: 0.4 }}
              className='flex flex-wrap gap-4'
            >
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                JavaScript
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                TypeScript
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                NextJS
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                React
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                HTML
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                CSS
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                FramerMotion
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Wordpress
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Elementor
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Visualcomposer
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                PostgreSQL
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Prisma
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Tailwind
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Bootstrap
              </div>
              <div className='rounded bg-black text-sm text-white px-4 py-1 border-2 border-black cursor-pointer hover:bg-white hover:text-black duration-300'>
                Jose
              </div>
            </motion.div>
          </div>
          {/* END SKILLS */}
          {/* EXPERIENCE */}
          <div className='pb-48'>
            <h1>Experience</h1>
            {/* EXPERIENCE ITEM */}
            <div className='flex justify-between gap-4 mt-8'>
              <div className='w-1/3'>
                <h3 className='bg-white py-2 px-4 rounded-md'>
                  Junior Web Developer
                </h3>
                <p className='p-2 text-justify'>
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
                <p className='p-2 font-semibold text-red-400'>
                  2023 - Present
                </p>
                <p className='py-1 px-2 bg-white text-sm font-semibold rounded inline'>
                  Breezens
                </p>
              </div>
              <div className='w-1/6 flex justify-center'>
                <div className='w-1 h-full rounded bg-gray-500 relative'>
                  <div className='w-5 h-5 rounded-full ring-4 ring-red-300 bg-white absolute -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'></div>
            </div>
            {/* END EXPERIENCE ITEM */}
            {/* EXPERIENCE ITEM */}
            <div className='flex justify-between gap-4'>
              <div className='w-1/3'></div>
              <div className='w-1/6 flex justify-center'>
                <div className='w-1 h-full rounded bg-gray-500 relative'>
                  <div className='w-5 h-5 rounded-full ring-4 ring-red-300 bg-white absolute -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'>
                <h3 className='bg-white py-2 px-4 rounded-md'>
                  Junior Web Developer
                </h3>
                <p className='p-2 text-justify'>
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
                <p className='p-2 font-semibold text-red-400'>
                  2023 - Present
                </p>
                <p className='py-1 px-2 bg-white text-sm font-semibold rounded inline'>
                  Chekad
                </p>
              </div>
            </div>
            {/* END EXPERIENCE ITEM */}
            {/* EXPERIENCE ITEM */}
            <div className='flex justify-between gap-4'>
              <div className='w-1/3'>
                <h3 className='bg-white py-2 px-4 rounded-md'>
                  Junior Web Developer
                </h3>
                <p className='p-2 text-justify'>
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
                <p className='p-2 font-semibold text-red-400'>
                  2023 - Present
                </p>
                <p className='py-1 px-2 bg-white text-sm font-semibold rounded inline'>
                  Norinnet
                </p>
              </div>
              <div className='w-1/6 flex justify-center'>
                <div className='w-1 h-full rounded bg-gray-500 relative'>
                  <div className='w-5 h-5 rounded-full ring-4 ring-red-300 bg-white absolute -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'></div>
            </div>
            {/* END EXPERIENCE ITEM */}
          </div>
          {/* ENDEXPERIENCE */}
        </div>
        {/* END INTRO */}
        {/* SVG */}
        <div className='hidden sticky top-0 z-30 lg:block w-1/3 xl:w-1/2'>
          <Brain
            scrollYProgress={scrollYProgress}
          />
        </div>
        {/* END SVG */}
      </div>
    </motion.div>
  );
};

export default About;
