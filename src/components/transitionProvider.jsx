'use client';
import { AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div
        key={pathname}
        className='w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100'
      >
        <motion.div
          className='w-screen h-screen fixed bg-black rounded-b-lg z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className='fixed top-0 bottom-0 right-0 left-0 w-fit h-fit m-auto z-50 text-white text-8xl cursor-default uppercase'
          initial={{ opacity: 1, zIndex: 100 }}
          animate={{ opacity: 0, zIndex: 0 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {pathname === '/'
            ? 'HOME'
            : pathname.substring(1)}
        </motion.div>
        <motion.div
          className='w-screen h-screen fixed bg-black rounded-b-lg bottom-0 z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', delay: 0.5 }}
          transition={{ delay: 0.5 }}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
