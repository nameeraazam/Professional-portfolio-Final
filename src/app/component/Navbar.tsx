import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-black body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/assets/logo9.jpg"
              alt="profile picture"
              width={100}
              height={100}
              className="rounded-full shadow-lg w-[50px]"
            />
            <span className="ml-3 text-xl">SyedaNameera</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold">
            <Link href="#about" className="mr-5 hover:text-green-700">Home</Link>
            <Link href="#skills" className="mr-5 hover:text-green-700">About</Link>
            <Link href="#project" className="mr-5 hover:text-green-700">Projects</Link>
            <Link href="#contact" className="mr-5 hover:text-green-700">Contact</Link>
          </nav>
          <a
            href="/assets/my.cv.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 
            focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0"
          >
            Download CV
            <AiOutlineCloudDownload className='text-xl ml-2' />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
