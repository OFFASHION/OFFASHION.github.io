import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Truck } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We're committed to providing exceptional service.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "We curate only the finest fashion pieces from trusted brands worldwide.",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Shop with confidence knowing your data and transactions are protected.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your fashion finds to you faster.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">About FASHIONOVA</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Your destination for the latest fashion trends, premium quality, and exceptional shopping experience.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, FASHIONOVA has grown to become one of the leading online fashion destinations. 
                We started with a simple mission: to make high-quality fashion accessible to everyone.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we serve millions of customers worldwide, offering an extensive collection of clothing, 
                accessories, and lifestyle products from both established and emerging designers.
              </p>
              <p className="text-muted-foreground">
                Our commitment to quality, style, and customer satisfaction drives everything we do. 
                We're not just selling fashion—we're helping you express your unique style and confidence.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-fashion-strong">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                alt="Fashion store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core principles guide our business and shape every decision we make
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to bringing you the best fashion experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Founder", image: "photo-1494790108377-be9c29b29330" },
              { name: "Michael Chen", role: "Creative Director", image: "photo-1507003211169-0a1dd7228f2d" },
              { name: "Emily Rodriguez", role: "Head of Operations", image: "photo-1438761681033-6461ffad8d80" },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${member.image}?w=400&q=80`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
