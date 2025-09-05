import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

function Testimonials(){
    const testimonials = [
      {
        id: 1,
        name: "Mustafa Kamal",
        title: "CEO, Tangle",
        quote:
          "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters.",
        rating: "5.0",
        image: "./public/images/menTeam1.png",
        bgColor: "bg-yellow-400",
      },
      {
        id: 2,
        name: "Sarah Chen",
        title: "CTO, InnovateLab",
        quote:
          "The level of professionalism and attention to detail exceeded our expectations. Our team felt supported throughout the entire process, and the results speak for themselves.",
        rating: "5.0",
        image: "/professional-woman-short-hair-smile.png",
        bgColor: "bg-blue-400",
      },
      {
        id: 3,
        name: "Marcus Rodriguez",
        title: "Founder, GreenTech Solutions",
        quote:
          "Working with this team transformed our approach to sustainability. Their expertise and dedication helped us achieve goals we thought were impossible.",
        rating: "4.9",
        image: "/professional-man-with-beard-in-business-attire.jpg",
        bgColor: "bg-green-400",
      },
      {
        id: 4,
        name: "Emily Watson",
        title: "Director, Creative Studios",
        quote:
          "The creative solutions and innovative thinking brought our vision to life in ways we never imagined. Truly a game-changing partnership.",
        rating: "5.0",
        image: "/professional-woman-with-long-hair-in-creative-work.jpg",
        bgColor: "bg-purple-400",
      },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <>

            <div className="w-[85%] mx-auto py-20">
                <div className="flex gap-8">
                
                    <div className="w-[40%]">
                        <div className="bg-[#fdd65b] rounded-b-full w-full h-120">
                            <div className=" bg-[#00715d] w-25 h-25 rounded-b-full text-[#fdd65b] flex items-center justify-center gap-1 text-sm font-semibold">
                                <Star className="w-4 h-4 fill-[#fdd65b]" />
                                <p className="text-white">
                                    {currentTestimonial.rating}
                                </p>                                
                            </div>
                            <img 
                                src={currentTestimonial.image} 
                                alt={currentTestimonial.name} 
                                className="w-full h-95 mx-auto object-contain rounded-b-full"
                                />
                        </div>
                    </div> 

                    <div className="w-[45%] ml-10">
                        <div className="flex-1 text-center md:text-left min-h-[280px] flex flex-col justify-center">
                            <blockquote className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                              "{currentTestimonial.quote}"
                            </blockquote>
                        </div> 

                        <div className="mb-8">
                          <h3 className="text-gray-900 text-xl md:text-2xl font-bold mb-1">{currentTestimonial.name}</h3>
                          <p className="text-gray-500 text-sm md:text-base">{currentTestimonial.title}</p>
                        </div>                    
                    </div>

                    <div className="relative top-110 right-140">

                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <button
                              variant="outline"
                              size="icon"
                              onClick={prevTestimonial}
                              className="rounded-full bg-white p-3 cursor-pointer hover:bg-[#f3e48e] duration-500 ease-in-out"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>

                            <button
                              variant="outline"
                              size="icon"
                              onClick={nextTestimonial}
                              className="rounded-full bg-white p-3 cursor-pointer hover:bg-[#f3e48e] duration-500 ease-in-out"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                    </div>                                                
                </div>    
            </div>
        <hr className="w-[85%] mx-auto border-0 h-[1px] bg-[#ddc7ab]" />
        
    </>
  );
};

export default Testimonials;