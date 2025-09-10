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
        image: "./public/images/marcusTestimonial.png",
      },
      {
        id: 2,
        name: "Sarah Chen",
        title: "CTO, InnovateLab",
        quote:
          "The level of professionalism and attention to detail exceeded our expectations. Our team felt supported throughout the entire process, and the results speak for themselves.",
        rating: "5.0",
        image: "./public/images/sarahTestimonial.png",
      },
      {
        id: 3,
        name: "Marcus Rodriguez",
        title: "Founder, GreenTech Solutions",
        quote:
          "Working with this team transformed our approach to sustainability. Their expertise and dedication helped us achieve goals we thought were impossible.",
        rating: "4.9",
        image: "./public/images/marcusTestimonial.png",
      },
      {
        id: 4,
        name: "Emily Watson",
        title: "Director, Creative Studios",
        quote:
          "The creative solutions and innovative thinking brought our vision to life in ways we never imagined. Truly a game-changing partnership.",
        rating: "5.0",
        image: "./public/images/emilyTestimonial.png",
      },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => {
            const newIndex = (prev + 1) % testimonials.length
            console.log('Next testimonial:', newIndex, testimonials[newIndex].name)
            return newIndex
        })
    }

    const prevTestimonial = () => {
      setCurrentIndex((prev) => {
          const newIndex = (prev - 1 + testimonials.length) % testimonials.length
          console.log('Previous testimonial:', newIndex, testimonials[newIndex].name)
          return newIndex
      })
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-20 bg-[#f9f4e8] h-[100vh]">

            
                <div className="flex w-[85%] mx-auto h-70">                
                    
                  <div className="bg-[#fdd65b] rounded-b-full w-1/2 h-135 relative z-1">
                        <div className=" bg-[#00715d] w-25 h-25 rounded-b-full text-[#fdd65b] flex items-center justify-center gap-1 text-sm font-semibold">
                            <Star className="w-4 h-4 fill-[#fdd65b]" />
                            <p className="text-white">
                                {currentTestimonial.rating}
                            </p>                                
                        </div>
                        <img 
                            key={currentTestimonial.id}
                            src={currentTestimonial.image} 
                            alt={currentTestimonial.name} 
                            className="w-full h-110 object-contain rounded-b-full"
                            />
                    </div>
                    
                    <div className="w-200 h-100 bg-white relative -translate-x-10 z-0">
                      <div className="ml-20">
                        <div className="flex-1 text-center md:text-left min-h-[280px] flex flex-col justify-center">
                            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                              "{currentTestimonial.quote}"
                            </p>
                        </div> 

                        <div className="mb-8">
                          <h3 className="text-gray-900 text-xl md:text-2xl font-bold mb-1">{currentTestimonial.name}</h3>
                          <p className="text-gray-500 text-sm md:text-base">{currentTestimonial.title}</p>
                        </div> 

                        {/* Navegación */}
                        <div className="flex items-center justify-center md:justify-start gap-4 translate-y-30 -translate-x-15">
                          <button
                            variant="outline"
                            size="icon"
                            onClick={prevTestimonial}
                            className="cursor-pointer rounded-full p-1 hover:bg-[#fdd65b] duration-700 ease-in-out bg-[#f8efce]"
                          >
                            <ChevronLeft className="w-7 h-7" />
                          </button>

                          <button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            className="cursor-pointer rounded-full p-1 hover:bg-[#fdd65b] duration-700 ease-in-out bg-[#f8efce]"
                          >
                            <ChevronRight className="w-7 h-7" />
                          </button>
                        </div>                    
                    </div>
                    


                  </div>

                  
                    

                </div>   
                      
          
        </section>
  );
};

export default Testimonials;