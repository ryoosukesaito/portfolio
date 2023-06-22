import CONSTANT_DATA from "./constants/page";

export default function Page() {
  return (
    <div className="my-5 lg:my-10 lg:px-10 overflow-hidden w-screen">
      <div className="flex flex-col justify-center mx-5 relative z-30">
        <div className="grid grid-row-1 lg:grid-flow-row  lg:grid-rows-2 lg:grid-cols-2 gap-7 lg:gap-10 mb-10">
          {/* Setting Grid at above line */}
          <div className="max-w-md md:max-w-lg lg:mb-10 relative">
            <div className="md:pl-10">
              <div className="text-[40px] md:text-[60px] lg:text-[70px] -mb-5 z-20 relative">
                <div>Ryosuke</div>
                <div>Saito</div>
              </div>

              <div className="md:text-[20px] lg:text-[25px] text-text-color1 mt-3 z-20 relative">
                Front-end Developer
              </div>
              <div className="rounded-full bg-[#FFCA6E] blur h-24 w-24 min-[769px]:h-48 min-[769px]:w-48 absolute top-4"></div>
            </div>
          </div>

          <div className="flex -mb-9 lg:mb-0 justify-end min-[376px]:justify-center  items-center lg:row-span-2 ">
            <div
              style={{
                backgroundImage: `url("/assets/DSC05459.JPG")`,
              }}
              className="bg-center bg-cover w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] min-[769px]:w-[440px] min-[769px]:h-[440px] overflow-hidden rounded-full "
            ></div>
          </div>

          <div className="max-w-lg">
            <div>
              <h3 className="text-[50px] text-text-color1">Info</h3>
              <p>
                As a front end specializing in React and Node, I have experience
                developing web applications using React and server-side
                development using Node.js, allowing me to develop full stack
                applications. I am passionate about self-growth and am always
                working to learn the latest technologies.I am currently working
                on 1+ front-end projects for my diploma program. I am excellent
                at working in teams and enjoy collaboration with peers
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[30px]  md:text-[40px] lg:text-[50px] text-text-color1">
              My Skills
            </h3>
            <div className="flex justify-start items-start pt-3">
              <div className="text-[#5F6367] grid grid-flow-row grid-cols-5 gap-3 md:gap-8">
                {Object.values(CONSTANT_DATA.SKILL_ICONS).map((skill, idx) => (
                  <div key={idx}>
                    <div className="md:m-5">
                      <i className="text-[60px] m-0 flex justify-center items-center">
                        {skill.icon}
                      </i>
                      <p className="flex justify-center text-[12px] md:text-[16px]">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circle design and Text on background */}
      <div className="absolute border border-[#A29F85]/20 rounded-full h-[40rem] w-[40rem] min-[426px]:h-[80rem] min-[426px]:w-[80rem] bg-transparent top-48  min-[426px]:-top-5 right-5 overflow-hidden z-10">
        <div className=" uppercase absolute font-oswald text-[300px] min-[426px]:text-[560px] bottom-4 right-4 text-[#A29F85]/10">
          rs
        </div>
      </div>
    </div>
  );
}
