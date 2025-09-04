import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, CheckCircle, Star, Award, Users, Car } from "lucide-react";
import heroImage from "@/assets/hero-driving-school.jpg";

const Index = () => {
  const formations = [
    {
      title: "Permis B - Conduite",
      description: "Formation complète à la conduite avec instructeurs expérimentés",
      duration: "20-30 heures",
      features: ["Voitures récentes", "Instructeurs qualifiés", "Horaires flexibles"]
    },
    {
      title: "Code de la Route",
      description: "Cours théoriques en salle avec supports modernes",
      duration: "Formation accélérée",
      features: ["Salle climatisée", "Tests blancs", "Suivi personnalisé"]
    },
    {
      title: "Simulateur de Conduite",
      description: "Préparation en toute sécurité avant la vraie conduite",
      duration: "Sessions flexibles",
      features: ["Technologie moderne", "Situations réelles", "Apprentissage sécurisé"]
    }
  ];

  const testimonials = [
    {
      name: "Amina B.",
      rating: 5,
      comment: "Excellente auto-école ! J'ai eu mon permis du premier coup grâce à leurs instructeurs patients et professionnels."
    },
    {
      name: "Mohamed K.",
      rating: 5,
      comment: "Formation de qualité, très bon accueil. Je recommande vivement Auto-école SHIMI !"
    },
    {
      name: "Fatima Z.",
      rating: 5,
      comment: "Équipe formidable, méthode d'enseignement efficace. Merci pour votre accompagnement !"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Auto-école SHIMI</h1>
                <p className="text-sm text-muted-foreground">Océan Rabat</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors">Accueil</a>
              <a href="#apropos" className="text-foreground hover:text-primary transition-colors">À propos</a>
              <a href="#formations" className="text-foreground hover:text-primary transition-colors">Formations</a>
              <a href="#tarifs" className="text-foreground hover:text-primary transition-colors">Tarifs</a>
              <a href="#avis" className="text-foreground hover:text-primary transition-colors">Avis</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button asChild variant="default" className="bg-accent hover:bg-accent-dark">
              <a href="tel:0663391155">
                <Phone className="w-4 h-4 mr-2" />
                Appeler
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Apprenez à conduire en toute confiance à Rabat
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Formation professionnelle avec des instructeurs expérimentés dans le quartier Océan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-accent-foreground">
              <a href="tel:0663391155">
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-accent-dark text-accent-foreground">
              <a href="https://maps.google.com/?q=Auto-ecole+Shimi+Rabat" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Itinéraire
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="#contact">
                Réserver votre place
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">À propos de nous</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Auto-école SHIMI - Océan Rabat vous accompagne dans l'apprentissage de la conduite avec professionnalisme et bienveillance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Expérience</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Plus de 15 ans d'expérience dans la formation à la conduite à Rabat</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Pédagogie</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Méthodes d'enseignement modernes adaptées à chaque élève</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Encadrement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p>Suivi personnalisé jusqu'à l'obtention de votre permis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formations */}
      <section id="formations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nos Formations</h2>
            <p className="text-xl text-muted-foreground">
              Des formations complètes pour tous les niveaux
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{formation.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{formation.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{formation.description}</p>
                  <ul className="space-y-2">
                    {formation.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-trust mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section id="tarifs" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Tarifs & Packs</h2>
            <p className="text-xl text-muted-foreground">
              Des forfaits adaptés à vos besoins
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Tarifs personnalisés</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6 text-muted-foreground">
                  Nous proposons des forfaits adaptés à vos besoins et votre budget. 
                  Contactez-nous pour un devis personnalisé.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent-dark">
                  <a href="tel:0663391155">
                    <Phone className="w-5 h-5 mr-2" />
                    Nous contacter pour un devis
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="avis" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Avis & Témoignages</h2>
            <p className="text-xl text-muted-foreground">
              Ce que disent nos élèves
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Contact</h2>
            <p className="text-xl text-muted-foreground">
              Retrouvez-nous à Océan, Rabat
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">02 Rue Abidjan, Océan, Rabat 10040</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a href="tel:0663391155" className="text-accent hover:underline">
                        0663-391155
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-muted-foreground">Lun-Sam: 8h-18h</p>
                    </div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Button asChild className="w-full bg-accent hover:bg-accent-dark">
                      <a href="tel:0663391155">
                        <Phone className="w-4 h-4 mr-2" />
                        Appeler maintenant
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="https://maps.google.com/?q=Auto-ecole+Shimi+Rabat" target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        Voir sur Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.534827!2d-6.8498!3d34.0209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzE1LjIiTiA2wrA1MCc1OS4zIlc!5e0!3m2!1sen!2sma!4v1635!5m2!1sen!2sma"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg"
        >
          <a 
            href="https://wa.me/212663391155" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;