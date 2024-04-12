'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';
const links = [
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];
const Navbar = () => {
  // STATES
  const [open, setOpen] = useState(false);
  //   BURGER CONSTS
  const topBurger = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const middleBurger = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomBurger = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };
  //   END BURGER CONSTS
  //   MENU CONSTS
  const mobileMenu = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: '0',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };
  const menuItems = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  //   END MENU CONSTS

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* LOGO */}
      <div className='w-1/3'>
        <Link
          href='/'
          className='flex items-center justify-center text-sm bg-black rounded-md p-1 font-semibold w-24'
        >
          <span className='text-white'>Sepi</span>
          <span className='flex items-center justify-center text-black bg-white ml-1 rounded-sm w-12 h-8'>
            DN
          </span>
        </Link>
      </div>
      {/* END LOGO */}
      {/* LINKS */}
      <div className='hidden md:flex justify-center gap-4 w-1/3 text-xl'>
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* END LINKS */}
      {/* SOCIALS */}
      <div className='hidden md:flex items-center justify-end gap-2 w-1/3'>
        <Link href='#'>
          <Image
            src='/github.png'
            alt='github'
            height={28}
            width={28}
          />
        </Link>
        <Link href='#'>
          <Image
            src='/instagram.png'
            alt='instagram'
            height={28}
            width={28}
          />
        </Link>
        <Link href='#'>
          <Image
            src='/facebook.png'
            alt='facebook'
            height={28}
            width={28}
          />
        </Link>
        <Link href='#'>
          <Image
            src='/pinterest.png'
            alt='pinterest'
            height={28}
            width={28}
          />
        </Link>
      </div>
      {/* END SOCIALS */}
      {/* HAMBURGER */}
      <div className='md:hidden'>
        <button
          className='w-10 h-8 flex flex-col justify-between relative z-50'
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topBurger}
            animate={open ? 'opened' : 'closed'}
            className={`w-10 h-1 origin-left ${
              open ? 'bg-white' : 'bg-black'
            } rounded`}
          ></motion.div>
          <motion.div
            variants={middleBurger}
            animate={open ? 'opened' : 'closed'}
            className={`w-10 h-1 ${
              open ? 'bg-white' : 'bg-black'
            } rounded`}
          ></motion.div>
          <motion.div
            variants={bottomBurger}
            animate={open ? 'opened' : 'closed'}
            className={`w-10 h-1 origin-left ${
              open ? 'bg-white' : 'bg-black'
            } rounded`}
          ></motion.div>
        </button>
      </div>
      {/* END HAMBURGER */}
      {/* MOBILE LINKS */}
      {open && (
        <motion.div
          variants={mobileMenu}
          initial='closed'
          animate='opened'
          className='flex flex-col items-center justify-center gap-8 absolute top-0 bottom-0 right-0 left-0 bg-black text-white text-4xl z-30'
        >
          {links.map((link) => (
            <motion.div
              variants={menuItems}
              key={link.url}
            >
              <Link href={link.url}>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* END MOBILE LINKS */}
    </div>
  );
};

export default Navbar;
