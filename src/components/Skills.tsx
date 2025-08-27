const Skills = () => {
  const skills = [
    { name: "HTML", icon: "🌐", level: "Expert", color: "bg-gradient-primary" },
    { name: "CSS", icon: "🎨", level: "Expert", color: "bg-gradient-secondary" },
    { name: "JavaScript", icon: "⚡", level: "Advanced", color: "bg-gradient-accent" },
    { name: "Responsive Design", icon: "📱", level: "Expert", color: "bg-gradient-primary" },
    { name: "Figma", icon: "🎭", level: "Intermediate", color: "bg-gradient-secondary" },
    { name: "Git & GitHub", icon: "🔧", level: "Advanced", color: "bg-gradient-accent" }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:glow-effect group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${skill.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:animate-glow transition-all duration-300`}>
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:gradient-text transition-all duration-300">
                {skill.name}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {skill.level}
              </p>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 ${skill.color} rounded-full transition-all duration-700 group-hover:w-full`}
                  style={{ 
                    width: skill.level === 'Expert' ? '90%' : skill.level === 'Advanced' ? '75%' : '60%' 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;