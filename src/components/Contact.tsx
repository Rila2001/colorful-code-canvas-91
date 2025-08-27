const Contact = () => {
  const contacts = [
    {
      type: "Email",
      value: "yourname@email.com",
      icon: "📧",
      gradient: "bg-gradient-primary",
      href: "mailto:yourname@email.com"
    },
    {
      type: "LinkedIn",
      value: "linkedin.com/in/yourname",
      icon: "🔗",
      gradient: "bg-gradient-secondary",
      href: "https://linkedin.com/in/yourname"
    },
    {
      type: "GitHub",
      value: "github.com/yourname",
      icon: "💻",
      gradient: "bg-gradient-accent",
      href: "https://github.com/yourname"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's create something amazing together!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={contact.type}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:glow-effect group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${contact.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:animate-glow transition-all duration-300`}>
                  {contact.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {contact.type}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-md">
                Have a project in mind? Let's discuss how we can bring your vision to life with creative and professional web solutions.
              </p>
              <button className="bg-gradient-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border/20 text-center">
        <p className="text-muted-foreground">
          © 2024 Your Name. Designed & Built with ❤️ and lots of ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;