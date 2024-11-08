"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import heroImage from '../../../public/assets/goodone.avif';
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Content Creator",
                  "Video Editor",
                  "Entrepreneur",
                  "Accountant",
                  "Debater",
                  "Writer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[40px] h-[2px] bg-green-700 mb-4"></div>
          <p className="mb-8 leading-relaxed font-medium">
            Crafting high-performance websites with precision. Optimizing user experience through innovative coding, Expert website development solutions, Building robust, scalable, and secure websites, Your vision, our expertise.
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
              <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                Contact💌
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full mx-auto"
            alt="hero"
            src={heroImage}
            width={330}
            height={330}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
