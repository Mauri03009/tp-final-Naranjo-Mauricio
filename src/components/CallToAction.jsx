import { Play } from "lucide-react";

function CallToAction() {
  return (    
      <div className="flex lg:flex-row items-center gap-5 w-[90%] h-10">
        
        {/* Botón Donate Now */}
        <div className="flex flex-col items-center lg:items-start">
          <button className="bg-[#00715d] hover:bg-[#005a4a] text-white px-4 py-3 lg:px-5 lg:py-4 font-bold text-lg lg:text-xl transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Donate Now
          </button>
        </div>

        {/* Línea conectora */}
        <img src="/icons/arrow.png" alt="Flecha" className="w-30" />

        {/* Sección de video */}
        <div className="flex flex-col items-center lg:items-end">
          <div className="relative">
            {/* Círculo de fondo */}
            <div className="w-48 h-48 lg:w-40 lg:h-40 bg-[#f9f4e8] rounded-full flex items-center justify-center relative overflow-hidden">
              
              {/* Texto circular */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  className="w-30 h-30 lg:w-50 lg:h-50" 
                  viewBox="0 0 200 200" 
                  fill="none"                   
                >
                  <defs>
                    <path 
                      id="textPath" 
                      d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text 
                    className="text-[#4a4a4a] text-[1.5rem] font-medium"
                    fill="currentColor"
                  >
                    <textPath href="#textPath" startOffset="4%" textLength="470" >
                      Learn about us through this video
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Botón de reproducción central */}
              <a href="https://www.youtube.com/" target="blank">
                <button 
                      className="relative z-10 w-8 h-8 lg:w-17 lg:h-17 bg-[#fdd65b] hover:bg-[#d6b64d] rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
                  <Play 
                    className="w-5 h-5 lg:w-5 lg:h-5 text-black ml-1 group-hover:scale-110 transition-transform duration-300" 
                    fill="currentColor"                    
                  />
                </button>              
              </a>
            </div>
          </div>
        </div>

      </div>
    
  );
}

export default CallToAction;
