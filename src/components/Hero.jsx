import IntroHero from "./IntroHero";
import NavBar from "./NavBar";

function Hero(){
  return (
    <div className="relative h-[120vh] bg-gradient-to-r from-[#f9f4e8] from-50% to-[#fdd65b] to-50%">   

      <section className="w-[85%] mx-auto flex justify-center">
        <div className="w-1/2 h-[120vh]">
          <IntroHero/>
        </div>

        

        <div className="w-1/2 flex flex-col justify-between">
          <div className="h-[20vh] w-full flex justify-end items-center">
            <NavBar referencia="nav" />
          </div>
          <img
            className="h-[100vh] w-full object-cover object-center self-start"
            src="./public/images/charityGirl.jpg"
            alt=""/>
        </div>
      </section>
    </div> 
  );
};

export default Hero;