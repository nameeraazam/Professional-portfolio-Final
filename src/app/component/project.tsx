import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-700">
              My Projects
            </h1>
            
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/project6.jpeg" // Use absolute path from public directory
                  width={300}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Language Translator Tool
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://langauge-translator-tool.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/noice.webp" // Use absolute path from public directory
                  width={280}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                    Expense Tracker App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Have a Look!
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://expense-tracker-app-six-pearl.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/generi.avif" // Use absolute path from public directory
                  width={300}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                    Quotes Generator App
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Have a Look!
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://quotes-generator-tau-one.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            
           {/* Project */}
           <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/niimi.webp" // Use absolute path from public directory
                  width={300}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                    My Resume
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Have a Look!
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://static-resume-part1.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>





 {/* Project */}
 <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/dash.jpeg" // Use absolute path from public directory
                  width={300}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                    Social Media Dashboard
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Have a Look!
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://social-media-dashboard-steel-one.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>





 {/* Project */}
 <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
              <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assets/nooon.png" // Use absolute path from public directory
                  width={300}  // Set desired width
                  height={250} // Set desired height
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-700 mb-1">
                    HTML&CSS portfolio website
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Have a Look!
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Hic aspernatur quo laborum suscipit porro aliquid atque
                    quasi. Fuga tenetur dolor voluptatem placeat suscipit
                    molestiae accusantium neque praesentium doloremque
                    distinctio! Dolores!
                  </p>
                  <Link
                    target="_blank"
                    href={"https://portfolio-2-mu-eosin.vercel.app/"}
                  >
                    <p className="leading-relaxed text-green-700 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>






















































          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      