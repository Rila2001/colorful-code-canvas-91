import portfolioImage from '@/assets/portfolio-project.jpg';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import blogImage from '@/assets/blog-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Creative Portfolio",
      description: "A vibrant personal site with animations and interactive elements that showcase creativity and technical skills.",
      image: portfolioImage,
      gradient: "bg-gradient-primary",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "E-Commerce Landing Page",
      description: "Colorful, modern product showcase with responsive design and smooth user experience.",
      image: ecommerceImage,
      gradient: "bg-gradient-secondary",
      tech: ["HTML", "CSS", "Responsive"]
    },
    {
      title: "Blog Template",
      description: "Stylish blog built with clean HTML & CSS, featuring modern typography and engaging layouts.",
      image: blogImage,
      gradient: "bg-gradient-accent",
      tech: ["HTML", "CSS", "Design"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-effect group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-muted px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button className={`${project.gradient} px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 flex-1`}>
                    View Live
                  </button>
                  <button className="glass-card px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 flex-1">
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;