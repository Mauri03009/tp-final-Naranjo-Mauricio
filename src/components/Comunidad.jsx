
function Comunidad(){
  const campaigns = [
    { title: "Covid - 19", image: "./public/images/covid.jpg"},
    { title: "Food Bank", image: "./public/images/comida.jpg"},
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[95%] mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">Support Your <br /> Community</h2>
                <hr className="w-15 mt-5 mb-5" />
                <p className="text-lg text-gray-600 leading-relaxed">
                    The largest collection of charity being organizations listed of charities across fundraiser countries used
                    to raise money from a large number of people.
                </p>
                <div className="flex gap-4 mt-15">
                    <div>
                        <img src="./public/images/covid.jpg" className="w-75 h-48 object-cover"/>
                        <h3 className="text-1xl font-semibold text-gray-800 p-5">Covid - 19</h3>
                    </div>
                    <div>
                        <img src="./public/images/comida.jpg" className="w-75 h-48 object-cover"/>
                        <h3 className="text-1xl font-semibold text-gray-800 p-5">Food Bank</h3>
                    </div>
                </div>
            </div>
            
                         
            <div className="h-136 w-fit flex flex-col items-center justify-between">
                <div>
                    <img src="./public/images/bottle.jpg" className="w-75 h-96 object-cover"/>
                    <h3 className="text-1xl font-semibold text-gray-800 p-5">Safe Water</h3>
                </div>
                <a className="underline font-bold text-[#2a3b38]" href="#">View all Campaign</a>
                
            </div>

            
            


        </div>

      </div>
    </section>
  );
};

export default Comunidad;