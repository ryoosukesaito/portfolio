import CONSTANT_DATA from "../constants/page";
import Image from "next/image";

function Project() {
  return (
    <div className=" m-3 md:m-6 lg:m-10 lg:px-16">
      <div className="flex flex-col justify-center mx-5 relative z-30">
        <div className="grid grid-row-3 grid-cols-1 gap-10">
          {/* Setting Grid at above line */}
          <div className="rows-span-1 flex md:flex-row-reverse w-full">
            <div className="pr-10 relative flex justify-center items-center">
              <div className="text-[40px]  md:pl-10 md:text-[60px] lg:text-[70px] -mb-5 z-20 relative">
                Project
              </div>

              <div className="rounded-full bg-[#FFCA6E] blur h-20 w-20 min-[769px]:h-36 min-[769px]:w-36 absolute min-[769px]:-top-4 top-0"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-8">
            <div className="text-[30px] md:pl-10 md:text-[40px] lg:text-[50px] text-text-color1">
              My Projects
            </div>
            {CONSTANT_DATA.PROJECTS.map((item, idx) => (
              <div
                key={idx}
                className="my-10 min-[769px]:my-20 flex flex-col  xl:flex-row max-w-fit"
              >
                <div className="xl:hidden flex flex-col mb-5">
                  <h1 className="text-[20px] lg:text-[23px] text-text-color1 mb-3 border-b-2">
                    {item.title}
                  </h1>
                  <div className="flex justify-end text-[12px]">
                    <p>-{item.date}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-fit shadow-xl shadow-gray-400  hover:bg-[#242018]/50 group">
                  <Image
                    src={item.image}
                    alt="/"
                    width="700"
                    height="550"
                    className="group-hover:opacity-30"
                  />
                  <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <a
                      className="text-[#A29F85] bg-[#FCF9EB] font-gelasio rounded-md px-3 py-2"
                      href={item.url}
                      target="_blank"
                    >
                      Git Hub
                    </a>
                  </div>
                </div>

                <div className="flex flex-col max-w-lg mx-10">
                  <h1 className="hidden xl:block text-[25px] text-text-color1 border-b-2">
                    {item.title}
                  </h1>
                  <div className="flex justify-end text-[15px] ">
                    <p className="hidden xl:block">-{item.date}</p>
                  </div>
                  <div className="pl-3 mt-3 max-w-fit">
                    <p>{item.description}</p>

                    <div className="flex flex-row flex-wrap">
                      {Object.values(item.tools).map((tool, idx) => (
                        <p
                          className="text-white rounded-full bg-[#FFCA6E]/80 px-2 text-sm mr-3 mt-2 w-fit whitespace-nowrap"
                          key={idx}
                        >
                          {tool}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Circle design and Text on background */}
      <div className="absolute border border-[#A29F85]/20 rounded-full h-[40rem] w-[40rem] min-[426px]:h-[80rem] min-[426px]:w-[80rem] bg-transparent top-48  min-[426px]:-top-5 right-5 overflow-hidden z-10">
        <div className=" uppercase absolute font-oswald text-[300px] min-[426px]:text-[560px] bottom-4 -right-32 text-[#A29F85]/10">
          pro
        </div>
      </div>
    </div>
  );
}

export default Project;
