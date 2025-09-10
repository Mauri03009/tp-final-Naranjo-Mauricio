import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function TestimonialsDos(){
    const testimonials = [
      {
        id: 1,
        name: "Mustafa Kamal",
        title: "CEO, Tangle",
        quote:
          "We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters.",
        rating: "5.0",
        image: "./public/images/mustafaTestimonial.png",
        bgColor: "bg-yellow-400",
      },
      {
        id: 2,
        name: "Sarah Chen",
        title: "CTO, InnovateLab",
        quote:
          "The level of professionalism and attention to detail exceeded our expectations. Our team felt supported throughout the entire process, and the results speak for themselves.",
        rating: "5.0",
        image: "./public/images/sarahTestimonial.png",
        bgColor: "bg-blue-400",
      },
      {
        id: 3,
        name: "Marcus Rodriguez",
        title: "Founder, GreenTech Solutions",
        quote:
          "Working with this team transformed our approach to sustainability. Their expertise and dedication helped us achieve goals we thought were impossible.",
        rating: "4.9",
        image: "./public/images/marcusTestimonial.png",
        bgColor: "bg-green-400",
      },
      {
        id: 4,
        name: "Emily Watson",
        title: "Director, Creative Studios",
        quote:
          "The creative solutions and innovative thinking brought our vision to life in ways we never imagined. Truly a game-changing partnership.",
        rating: "5.0",
        image: "./public/images/emilyTestimonial.png",
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
        <section className="py-20 bg-[#f9f4e8] h-[100vh]">
            <motion.div 
                className="flex w-[85%] mx-auto h-70"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={currentTestimonial.id}
                        className="bg-[#fdd65b] rounded-b-full w-1/2 h-135 relative z-1"
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <motion.div 
                            className=" bg-[#00715d] w-25 h-25 rounded-b-full text-[#fdd65b] flex items-center justify-center gap-1 text-sm font-semibold"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
                        >
                            <Star className="w-4 h-4 fill-[#fdd65b]" />
                            <p className="text-white">
                                {currentTestimonial.rating}
                            </p>                                
                        </motion.div>
                        <motion.img 
                            src={currentTestimonial.image} 
                            alt={currentTestimonial.name} 
                            className="w-full h-110 object-contain rounded-b-full"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        />
                    </motion.div>
                </AnimatePresence>
                
                <motion.div 
                    className="w-200 h-100 bg-white relative -translate-x-10 z-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="ml-20">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={`quote-${currentTestimonial.id}`}
                                className="flex-1 text-center md:text-left min-h-[280px] flex flex-col justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <motion.p 
                                    className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    "{currentTestimonial.quote}"
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={`info-${currentTestimonial.id}`}
                                className="mb-8"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <motion.h3 
                                    className="text-gray-900 text-xl md:text-2xl font-bold mb-1"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                >
                                    {currentTestimonial.name}
                                </motion.h3>
                                <motion.p 
                                    className="text-gray-500 text-sm md:text-base"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                >
                                    {currentTestimonial.title}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navegación */}
                        <motion.div 
                            className="flex items-center justify-center md:justify-start gap-4 translate-y-30 -translate-x-15"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.button
                                variant="outline"
                                size="icon"
                                onClick={prevTestimonial}
                                className="cursor-pointer rounded-full p-1 hover:bg-[#fdd65b] duration-700 ease-in-out bg-[#f8efce]"
                                whileHover={{ scale: 1.1, backgroundColor: "#fdd65b" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronLeft className="w-7 h-7" />
                            </motion.button>

                            <motion.button
                                variant="outline"
                                size="icon"
                                onClick={nextTestimonial}
                                className="cursor-pointer rounded-full p-1 hover:bg-[#fdd65b] duration-700 ease-in-out bg-[#f8efce]"
                                whileHover={{ scale: 1.1, backgroundColor: "#fdd65b" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronRight className="w-7 h-7" />
                            </motion.button>
                        </motion.div>                    
                    </div>
                </motion.div>
            </motion.div>                      
        </section>
  );
};

export default TestimonialsDos;