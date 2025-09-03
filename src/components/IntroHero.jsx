import NavBar from "./NavBar";

function IntroHero(){
  return (

    <section className="flex justify-center w-[90%]">
      <div className="h-full w-[90vh] flex justify-evenly flex-col gap-15">
        <p className="text-3xl">Ta:</p>

        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Charity Is An <br /> Act Of A Soft <br /> Heart.
        </h1>

        <p className="text-lg leading-relaxed">
          We've spent the last 7 years helping over 25,00000 <br/> teams just like yourself create and sustain <br /> successful online support.
        </p>       
         
        <NavBar referencia = "redes"/>
      </div>
            
    </section>
    
  );
};

export default IntroHero;