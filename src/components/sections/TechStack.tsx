import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';

export function TechStack() {
  const inventoryStack = [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
  ];

  const webStack = [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  ];

  const androidStack = [
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'XML', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Xml_logo.svg' },
    { name: 'Firestore', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg' },
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  ];

  return (
    <AnimatedSection id="tech" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built with Modern Technology</h2>
          <p className="text-text-secondary text-lg">A robust and scalable tech stack chosen for performance and reliability.</p>
        </div>

        <div className="space-y-12">
          {/* Inventory */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center text-primary-400">Inventory Management System</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {inventoryStack.map((tech) => (
                <Card key={tech.name} className="flex flex-col items-center justify-center p-6 w-32 h-32 hover:scale-105 transition-transform bg-background/50 border-primary-500/10 hover:border-primary-500/30">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-3 object-contain filter drop-shadow-md" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Web Tracking */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center text-purple-400">Web Tracking Application</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {webStack.map((tech) => (
                <Card key={tech.name} className="flex flex-col items-center justify-center p-6 w-32 h-32 hover:scale-105 transition-transform bg-background/50 border-purple-500/10 hover:border-purple-500/30">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-3 object-contain filter drop-shadow-md" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Android */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-center text-green-400">Android GPS Application</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {androidStack.map((tech) => (
                <Card key={tech.name} className="flex flex-col items-center justify-center p-6 w-32 h-32 hover:scale-105 transition-transform bg-background/50 border-green-500/10 hover:border-green-500/30">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 mb-3 object-contain filter drop-shadow-md" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
