
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-digigabonis-green to-digigabonis-lightgreen text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Le digital au service du Gabon
            </h1>
            <p className="text-lg mb-8 text-digigabonis-cream">
              DigiGabonis est une agence digitale 100% gabonaise spécialisée dans la création de sites web professionnels, modernes et sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-digigabonis-accent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-md text-center inline-flex items-center justify-center gap-2 transition-colors"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-md text-center transition-colors"
              >
                Nos services
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-[350px] bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="w-full h-16 bg-digigabonis-green flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-white/20 rounded h-8 mx-2"></div>
                </div>
                <div className="p-6">
                  <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="flex mb-4">
                    <div className="w-32 h-24 bg-digigabonis-green rounded mr-4"></div>
                    <div className="flex-1">
                      <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="w-2/3 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-200 rounded mb-6"></div>
                  <div className="w-32 h-10 bg-digigabonis-accent rounded"></div>
                </div>
              </div>
              <div className="absolute top-12 -right-8 w-24 h-24 bg-digigabonis-accent rounded-full flex items-center justify-center text-white font-bold text-sm p-4 transform rotate-12">
                100% Gabonais
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
