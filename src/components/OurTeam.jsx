import Members from "./Members";

function OurTeam(){

  return (
    <section className="bg-[#f9f4e8]">
      <div className="w-[85%] mx-auto flex flex-col justify-center items-center">

          <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Our Team</h2>
              <hr className="w-15 mt-5 mb-5"/>
          </div>
          
          <Members/>
            
      </div>
      
      <hr className="mt-20 w-[85%] mx-auto border-0 h-[1px] bg-[#d3cec2]" />

    </section>
  );
};

export default OurTeam;