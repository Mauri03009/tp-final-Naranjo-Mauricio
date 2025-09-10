import CallToAction from "./CallToAction";
import NavBar from "./NavBar";

function IntroHero(){
  return (    
    <div className="flex flex-col justify-evenly h-full">
      <p className="text-3xl">Ta:</p>

      <div>
      <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-tight mb-4">
          Charity Is An <br /> Act Of A Soft <br /> Heart.
      </h1>
      <p className="text-md leading-relaxed font-thin text-[#70716d]">
        We've spent the last 7 years helping over 25,00000 <br/> teams just like yourself create and sustain <br /> successful online support.
      </p>       
      </div>

      <div className="h-fit mb-15">
        <CallToAction/>     
      </div>

      
        
      <NavBar referencia = "redes"/>
      
    </div>    
  );
};

export default IntroHero;