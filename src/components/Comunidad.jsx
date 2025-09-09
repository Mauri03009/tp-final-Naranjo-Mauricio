
function Comunidad(){
  const campaigns = [
    { title: "Covid - 19", image: "./public/images/covid.jpg"},
    { title: "Food Bank", image: "./public/images/comida.jpg"},
  ]

  return (
    <section className="bg-[#f9f4e8]">
        <div className="w-[85%] mx-auto flex justify-center gap-4 py-20">

            <div className="w-[80%] py-10 flex flex-col">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Support Your <br /> Community</h2>
                <hr className="w-15 mt-5 mb-5" />
                <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">
                    The legal definition of a charitable organization (and of charity) varies between countries and in charity law effects charitable organizations also vary.
                </p>
                <div className="flex gap-9 mt-15">
                    <div className="bg-white">
                        <img src="./public/images/covid.jpg" className="w-95 h-60 object-cover"/>
                        <h3 className="text-1xl font-bold text-gray-800 p-5">Covid - 19</h3>
                    </div>
                    <div className="bg-white">
                        <img src="./public/images/comida.jpg" className="w-95 h-60 object-cover"/>
                        <h3 className="text-1xl font-bold text-gray-800 p-5">Food Bank</h3>
                    </div>
                </div>
            </div>
            
                         
            <div className="w-[30%] h-147 flex flex-col items-center justify-between mt-10">
                <div className="w-full bg-white">
                    <img src="./public/images/bottle.jpg" className="w-full h-100 object-cover"/>
                    <h3 className="text-1xl font-semibold text-gray-800 p-5">Safe Water</h3>
                </div>
                <a className="underline font-bold text-[#2a3b38]" href="#">View all Campaign</a>
                
            </div>
        
        </div>
        <hr className="w-[85%] mx-auto border-0 h-[1px] bg-[#e3ded2]" />
    </section>
  );
};

export default Comunidad;