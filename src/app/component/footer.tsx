import Image from 'next/image';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import {FaInstagramSquare } from 'react-icons/fa';
import {FaFacebookSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-gray-100'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
  src="/assets/logo9.jpg" // Direct path from the public folder
  alt="profile picture"
  width={100}
  height={100}
  className="rounded-full shadow-lg w-[50px]" // Example Tailwind classes for styling
/>
            <span className="ml-3 text-xl">Syeda Nameera</span>
          </a>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-green-700 sm:py-2 sm:mt-0 mt-4">
            © 2023 Syeda Nameera... —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/syeda-nameera-azam-b58454279/"
              className="text-blue-500"
            >
              <FaLinkedin className="text-2xl" />
            </a>

         
             <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/i.am.syeda.nameera?igsh=MW4wOXc4NzYxZW54bQ=="
              className="text-pink-700"
            >
              <FaInstagramSquare className="text-2xl" />
            
            </a>
 

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/syeda.nameera78?mibextid=kFxxJD"
              className=" text-blue-500"
            >
              <FaFacebookSquare  className="text-2xl" />
            
            </a>
             
           

          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
