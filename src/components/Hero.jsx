import IntroHero from "./IntroHero";
import NavBar from "./NavBar";

function Hero(){
  return (
    <div className="relative w-full h-screen">
  
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white"></div>
        <div className="w-1/2 bg-[#fdd65b]"></div>
      </div>

    
      <section className="relative flex h-full max-w-[95%] mx-auto">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <IntroHero />
        </div>

        <div className="w-1/2 flex flex-col justify-between">

          <div className="h-[20vh] w-[95%] flex justify-end items-center">
            <NavBar referencia="nav" />
          </div>

          <img
            className="w-[95%] h-[80vh] object-cover"
            src="./public/images/prueba.jpg"
            alt=""/>

        </div>
      </section>
    </div> 
  );
};

export default Hero;