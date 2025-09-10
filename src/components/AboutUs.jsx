
function AboutUs(){
  return (
    <section className="bg-[#f9f4e8] py-20">
        
        <div className="mx-auto w-[85%] flex">

            <img className="w-1/2 h-135 object-top object-cover rounded-t-full z-1" src="./public/images/aboutUs.jpg" alt="" />

            <div className="w-1/2 h-100 self-baseline-last -translate-x-10 z-0 bg-white flex flex-col justify-center">
                <div className="translate-x-10 pl-10 bg-white h-full flex flex-col justify-center">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">About Us</h2>
                    <hr className="w-15 mt-5 mb-5"/>
                    <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">The legal definition of a charitable organization (and of <br /> charity) varies between countries and in some instances <br /> regions of the country. The regulation, the tax treatment, and <br /> the way in which charity law affects charitable organizations <br /> also vary.</p>
                    <a className="mt-5 underline font-bold text-[#2a3b38] cursor-pointer hover:text-[#00705c]">Read More</a>
                </div>

                
            </div>

        </div>

        <hr className="mt-20 w-[85%] mx-auto border-0 h-[1px] bg-[#d3cec2]" />

    </section>
    
  );
};

export default AboutUs;