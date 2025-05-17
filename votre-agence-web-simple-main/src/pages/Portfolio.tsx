
import { Link } from "react-router-dom";
import { Github, Briefcase, User, Mail, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Portfolio = () => {
  // Sample portfolio data
  const projects = [
    {
      title: "Site E-commerce",
      description: "Création d'une boutique en ligne pour un détaillant local avec intégration de paiement.",
      tags: ["React", "Tailwind CSS", "Stripe"],
      link: "#"
    },
    {
      title: "Application Web pour Restaurant",
      description: "Système de commande en ligne avec gestion des menus et des réservations.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Site vitrine pour Salon de Beauté",
      description: "Site élégant avec galerie photos et système de prise de rendez-vous.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      link: "#"
    }
  ];

  const skills = [
    { name: "Développement Front-end", level: "Expert", items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"] },
    { name: "Développement Back-end", level: "Intermédiaire", items: ["Node.js", "Express", "Firebase", "MongoDB"] },
    { name: "Design", level: "Avancé", items: ["UI/UX Design", "Figma", "Responsive Design", "Adobe XD"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <div className="bg-gradient-to-r from-digigabonis-green to-digigabonis-lightgreen text-white">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">MBELE MINTSA Préga Dufren Claver</h1>
                <p className="text-xl font-light mb-6">Développeur Web & Designer</p>
              </div>
              <p className="text-lg text-digigabonis-cream">
                Développeur web passionné avec plus de 5 ans d'expérience dans la création de sites web et d'applications modernes.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild>
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </a>
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-white rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage src="/lovable-uploads/f8d65a09-4e51-4861-ad7a-189003a37223.png" alt="MBELE MINTSA Préga Dufren Claver" />
                  <AvatarFallback className="text-2xl">PM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about">À propos</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
          </TabsList>

          {/* About Me Tab */}
          <TabsContent value="about" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>À propos de moi</CardTitle>
                <CardDescription>Mon parcours et ma vision</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Passionné par le développement web depuis plus de 5 ans, je me spécialise dans la création de sites web modernes et d'applications
                  qui offrent une expérience utilisateur exceptionnelle.
                </p>
                <p>
                  Après avoir obtenu mon diplôme en informatique, j'ai travaillé pour plusieurs agences avant de fonder DigiGabonis,
                  une agence digitale 100% gabonaise dédiée à aider les entreprises locales à réussir leur transition numérique.
                </p>
                <p>
                  Ma philosophie est simple : créer des sites web qui non seulement sont beaux, mais aussi fonctionnels et optimisés pour
                  tous les appareils, tout en restant accessibles aux entreprises gabonaises de toute taille.
                </p>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-3">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>pregadufren@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>066 59 20 35</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-digigabonis-green text-xs px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.link} className="flex items-center justify-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Voir le projet
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{skill.name}</CardTitle>
                    <CardDescription>Niveau: {skill.level}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {skill.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Intéressé par une collaboration?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Je suis toujours ouvert à discuter de nouveaux projets ou opportunités professionnelles.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-digigabonis-green hover:bg-digigabonis-lightgreen">
              <a href="#contact">Me contacter</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
