import { AnimatedSection } from '../ui/AnimatedSection';
import { Card } from '../ui/Card';
import { Code, Link, Mail, Send } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  const team = [
    {
      name: 'Lalasa',
      dept: 'Dept of CSE, NBKRIST',
      role: 'Developer',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'Mothi Sri',
      dept: 'Dept of CSE, NBKRIST',
      role: 'Developer',
      linkedin: '#',
      github: '#',
      email: '#'
    },
    {
      name: 'Anvesh',
      dept: 'Dept of CSE, NBKRIST',
      role: 'Developer',
      linkedin: '#',
      github: '#',
      email: '#'
    }
  ];

  return (
    <AnimatedSection id="contact" className="bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet The Team</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            The dedicated developers behind the Smart College Bus Tracking & Inventory Management System.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {team.map((member) => (
            <Card key={member.name} className="flex flex-col items-center justify-center text-center p-12 group">
              <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
              <p className="text-text-secondary mb-2">{member.dept}</p>
              <p className="text-primary-400 font-medium mb-8 text-lg">{member.role}</p>
              
              <div className="flex gap-4 min-h-[40px]">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#0A66C2] transition-colors">
                    <Link size={18} />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-text-secondary hover:text-white hover:bg-[#333] transition-colors">
                    <Code size={18} />
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center text-text-secondary hover:text-white hover:bg-red-500 transition-colors">
                    <Mail size={18} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-text-secondary">Interested in using Project Traco or have questions? Contact our team through email.</p>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
              ></textarea>
              <Button type="button" className="w-full gap-2 justify-center">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
