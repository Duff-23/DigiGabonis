
const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Forfaits</h2>
          <div className="w-20 h-1 bg-digigabonis-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des offres adaptées à tous les budgets pour répondre à vos besoins digitaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Package */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2 text-digigabonis-green">Starter</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">50 000</span>
                <span className="text-gray-500 mb-1">FCFA</span>
              </div>
              <p className="text-gray-600 mb-6">
                Solution idéale pour les petites entreprises et les entrepreneurs individuels.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Site 1 page (one-page)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Design responsive (mobile/PC)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Formulaire de contact</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block w-full py-3 px-6 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
              >
                Choisir ce forfait
              </a>
            </div>
          </div>
          
          {/* Pro Package */}
          <div className="bg-gradient-to-b from-digigabonis-green/5 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-digigabonis-green transform md:-translate-y-4 relative">
            <div className="absolute top-0 inset-x-0 bg-digigabonis-green text-white text-center py-1 text-sm font-medium">
              Populaire
            </div>
            <div className="p-8 pt-12">
              <h3 className="text-xl font-bold mb-2 text-digigabonis-green">Pro</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">100 000</span>
                <span className="text-gray-500 mb-1">FCFA</span>
              </div>
              <p className="text-gray-600 mb-6">
                Solution complète pour les entreprises souhaitant développer leur présence en ligne.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3-4 pages personnalisées</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Design unique et responsive</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>SEO de base inclus</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Intégration réseaux sociaux</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block w-full py-3 px-6 text-center bg-digigabonis-green hover:bg-digigabonis-lightgreen text-white font-medium rounded-lg transition-colors"
              >
                Choisir ce forfait
              </a>
            </div>
          </div>
          
          {/* Premium Package */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-2 text-digigabonis-green">Premium</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">150 000</span>
                <span className="text-gray-500 mb-1">FCFA</span>
              </div>
              <p className="text-gray-600 mb-6">
                Solution avancée pour une présence web professionnelle et complète.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Jusqu'à 7 pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Blog intégré</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>SEO avancé</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-digigabonis-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Maintenance 3 mois incluse</span>
                </li>
              </ul>
              <a 
                href="#contact" 
                className="block w-full py-3 px-6 text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
              >
                Choisir ce forfait
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
