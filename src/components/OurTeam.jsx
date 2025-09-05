import Members from "./Members";

function OurTeam(){

  return (
    <>
      <div className="w-[85%] mx-auto py-20 flex flex-col justify-center items-center">

          <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Our Team</h2>
              <hr className="w-15 mt-5 mb-5"/>
          </div>
          
          <Members/>
            
      </div>
      <hr className="w-[85%] mx-auto border-0 h-[1px] bg-[#ddc7ab]" />
    </>
  );
};

export default OurTeam;