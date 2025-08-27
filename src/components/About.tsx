const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 gradient-text">About Me</h2>
          
          <div className="glass-card p-8 md:p-12 rounded-3xl animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a passionate Web Developer who loves creating colorful, interactive, and responsive websites. 
                  My focus is on blending creativity with clean code to deliver unique digital experiences.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Every project is an opportunity to push boundaries and create something beautiful that not only 
                  looks amazing but also provides an exceptional user experience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium">Creative</span>
                  <span className="bg-gradient-secondary px-4 py-2 rounded-full text-sm font-medium">Innovative</span>
                  <span className="bg-gradient-accent px-4 py-2 rounded-full text-sm font-medium">Detail-Oriented</span>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-glow">
                  <div className="w-56 h-56 bg-card rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;