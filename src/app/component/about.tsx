import Image from 'next/image';
import React from 'react';
import goodone from '../../../public/assets/goodone.avif';

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[350px]"
              alt="hero"
              src={goodone}
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I am a highly analytical front-end developer with expertise in HTML, CSS, JavaScript, and various front-end frameworks. I develop dynamic and responsive interfaces that meet client needs. With a deep understanding of front-end development best practices, I am a passionate web developer with a year of experience, specializing in crafting innovative digital solutions that bring ideas to life.
              <br />I am a frontend skilled web developer with expertise in HTML5, CSS3, JavaScript, Next.js, TypeScript, and Figma. Proficient in Agile methodologies, version control systems (Git, SVN), and UI/UX design principles. Results-driven web developer with a year of experience driving digital innovation.
              <br />Currently pursuing a BBA (Bachelor of Business Administration). I am also a designer and content writer.
            </p>
            <div className="flex justify-center">
              <a href="/assets/my.cv.jpg" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
