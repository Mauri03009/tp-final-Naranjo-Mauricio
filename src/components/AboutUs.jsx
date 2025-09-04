
function AboutUs(){
  return (
    <>
        
        <div className="mx-auto w-[85%] py-20 flex justify-center items-center gap-20">

            <img className="w-1/2 h-135 object-top object-cover rounded-t-full" src="./public/images/aboutUs.jpg" alt="" />

            <div className="w-1/2 flex flex-col justify-center">
                <div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">About Us</h2>
                    <hr className="w-15 mt-5 mb-5"/>
                    <p className="text-[1rem] text-gray-600 leading-relaxed">The legal definition of a charitable organization (and of <br /> charity) varies between countries and in some instances <br /> regions of the country. The regulation, the tax treatment, and <br /> the way in which charity law affects charitable organizations <br /> also vary.</p>

                </div>

                <a className="mt-5 underline font-bold text-[#2a3b38] cursor-pointer">Read More</a>
            </div>

        </div>
        <hr className="w-[85%] mx-auto border-0 h-[1px] bg-[#ddc7ab]" />
    </>
    
  );
};

export default AboutUs;