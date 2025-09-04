import NavBar from "./NavBar";

function IntroHero(){
  return (    
    <div className="h-full flex justify-evenly flex-col gap-15">
      <p className="text-3xl">Ta:</p>

      <div>
      <h1 className="text-4xl lg:text-[4.5rem] font-bold leading-tight mb-4">
          Charity Is An <br /> Act Of A Soft <br /> Heart.
      </h1>
      <p className="text-md leading-relaxed font-thin text-[#70716d]">
        We've spent the last 7 years helping over 25,00000 <br/> teams just like yourself create and sustain <br /> successful online support.
      </p>       
      </div>
      
      <NavBar referencia = "redes"/>
    </div>    
  );
};

export default IntroHero;