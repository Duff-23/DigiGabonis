
import { Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 mb-4 text-digigabonis-green" />,
      title: "Création de sites vitrines",
      description: "Des sites web sur mesure adaptés à l'image et aux besoins de votre entreprise.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-digigabonis-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
      title: "Sites e-commerce",
      description: "Développement de boutiques en ligne pour vendre vos produits et services sur internet.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-digigabonis-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
      title: "Hébergement & nom de domaine",
      description: "Solutions d'hébergement sécurisées et enregistrement de noms de domaine personnalisés.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-digigabonis-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>,
      title: "Référencement SEO",
      description: "Optimisation de votre site pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-digigabonis-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DigiGabonis propose des solutions web complètes pour transformer votre présence en ligne et accélérer votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
