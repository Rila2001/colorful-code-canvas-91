const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-accent rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Your Name
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            Passionate Web Developer
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            Creating colorful, interactive, and responsive websites that blend creativity with clean code
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="glass-card px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 glow-effect">
              View My Work
            </button>
            <button className="bg-gradient-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;