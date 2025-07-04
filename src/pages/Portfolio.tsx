import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, FileText, Image, Instagram, Github, Linkedin, Mail, Music, Video } from "lucide-react";

const Portfolio = () => {
  const skills = [
    "Python", "Java", "C++", "JavaScript", "React", "Node.js", 
    "HTML/CSS", "Git", "Data Structures", "Algorithms", "Machine Learning", "AI"
  ];

  const projects = [
    {
      title: "AI-Powered Web Application",
      description: "A machine learning project implementing neural networks for data prediction and analysis.",
      tech: ["Python", "TensorFlow", "Flask"],
      link: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, payment integration, and admin panel.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["JavaScript", "Express", "Socket.io"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--portfolio-navy))] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[hsl(var(--portfolio-navy))]/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[hsl(var(--portfolio-teal))]">Alugubelli Nivas</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[hsl(var(--portfolio-teal))] transition-colors font-medium uppercase tracking-wider">ABOUT</a>
            <a href="#skills" className="text-white hover:text-[hsl(var(--portfolio-teal))] transition-colors font-medium uppercase tracking-wider">SKILLS</a>
            <a href="#education" className="text-white hover:text-[hsl(var(--portfolio-teal))] transition-colors font-medium uppercase tracking-wider">EDUCATION</a>
            <a href="#projects" className="text-white hover:text-[hsl(var(--portfolio-teal))] transition-colors font-medium uppercase tracking-wider">PROJECTS</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hello,
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                This is <span className="text-[hsl(var(--portfolio-pink))]">ALUGUBELLI NIVAS</span>.
              </h2>
            </div>
            <div className="space-y-3 text-xl md:text-2xl text-white">
              <p>AI & ML Enthusiast,</p>
              <p>Ambitious B.Tech Student</p>
            </div>
            
            <Button className="bg-[hsl(var(--portfolio-pink))] hover:bg-[hsl(var(--portfolio-pink))]/80 text-white px-8 py-4 rounded-full text-lg font-semibold">
              Resume
            </Button>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent text-2xl"
                onClick={() => window.open('https://www.linkedin.com/in/nivas-alugubelli-94bb9a325', '_blank')}
              >
                <Linkedin size={28} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent text-2xl"
                onClick={() => window.open('https://github.com/nivas798', '_blank')}
              >
                <Github size={28} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent text-2xl"
                onClick={() => window.open('mailto:nivasalugubelli6@gmail.com', '_blank')}
              >
                <Mail size={28} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent text-2xl"
                onClick={() => window.open('https://www.instagram.com/__.nivasss04/', '_blank')}
              >
                <Instagram size={28} />
              </Button>
            </div>
          </div>
          
          {/* Code Panel with Yellow Border */}
          <div className="bg-[hsl(var(--portfolio-navy))] rounded-lg p-8 border-4 border-[hsl(var(--portfolio-yellow))] font-mono text-sm relative">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 bg-[hsl(var(--portfolio-teal))] rounded-full"></div>
              <div className="w-3 h-3 bg-[hsl(var(--portfolio-pink))] rounded-full"></div>
              <div className="w-3 h-3 bg-[hsl(var(--portfolio-yellow))] rounded-full"></div>
            </div>
            <div className="space-y-2 text-white">
              <div><span className="text-[hsl(var(--portfolio-pink))]">const</span> <span className="text-[hsl(var(--portfolio-teal))]">coder</span> = {`{`}</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">name</span>:<span className="text-[hsl(var(--portfolio-yellow))]">'Alugubelli Nivas'</span>,</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">skills</span>:[<span className="text-[hsl(var(--portfolio-yellow))]">'Python'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'Java'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'C++'</span>,</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-yellow))]">'React'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'HTML'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'CSS'</span>,</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-yellow))]">'Javascript'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'Node.js'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'Git'</span>,</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-yellow))]">'MySQL'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'MongoDB'</span>, <span className="text-[hsl(var(--portfolio-yellow))]">'AI'</span>,</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-yellow))]">'ML'</span>],</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">hardWorker</span>:<span className="text-[hsl(var(--portfolio-pink))]">true</span>,</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">quickLearner</span>:<span className="text-[hsl(var(--portfolio-pink))]">true</span>,</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">problemSolver</span>:<span className="text-[hsl(var(--portfolio-pink))]">true</span>,</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">motivated</span>:<span className="text-[hsl(var(--portfolio-pink))]">true</span>,</div>
              <div className="ml-4"><span className="text-[hsl(var(--portfolio-teal))]">interests</span>:<span className="text-[hsl(var(--portfolio-pink))]">function</span>() {`{`}</div>
              <div className="ml-8"><span className="text-[hsl(var(--portfolio-pink))]">return</span>(</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-teal))]">this</span>.<span className="text-[hsl(var(--portfolio-yellow))]">Music</span> &&</div>
              <div className="ml-12"><span className="text-[hsl(var(--portfolio-teal))]">this</span>.<span className="text-[hsl(var(--portfolio-yellow))]">VideoEditing</span></div>
              <div className="ml-8">)</div>
              <div className="ml-4">{`}`}</div>
              <div>{`};`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Avatar className="w-80 h-80 border-4 border-[hsl(var(--portfolio-teal))]">
                <AvatarImage src="/lovable-uploads/169e5a3e-23da-4821-9451-22e3cfd6e036.png" alt="Alugubelli Nivas" />
                <AvatarFallback className="text-6xl bg-[hsl(var(--portfolio-teal))] text-white">AN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-6 text-lg text-white">
              <h2 className="text-4xl font-bold mb-8 text-[hsl(var(--portfolio-teal))]">About Me</h2>
              <p className="leading-relaxed">
                Hi, I'm Alugubelli Nivas! I'm a passionate first-year B.Tech Computer Science Engineering 
                student specializing in Artificial Intelligence and Machine Learning at SRM Institute of 
                Science and Technology, Tiruchirappalli.
              </p>
              <p className="leading-relaxed">
                With a strong academic foundation achieving a CGPA of 9.5 in my first year, I'm driven 
                by curiosity and a desire to explore cutting-edge technologies in AI and ML. My journey 
                in computer science began with a fascination for problem-solving and has evolved into a 
                deep passion for creating intelligent systems.
              </p>
              <p className="leading-relaxed">
                I'm actively seeking opportunities to apply my knowledge through internships, projects, 
                and collaborations. Let's connect and explore the exciting world of technology together!
              </p>
              
              {/* Personal Traits */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-[hsl(var(--portfolio-gray))]">
                  <span className="text-[hsl(var(--portfolio-teal))]">Hard Worker:</span> true
                </div>
                <div className="text-[hsl(var(--portfolio-gray))]">
                  <span className="text-[hsl(var(--portfolio-teal))]">Quick Learner:</span> true
                </div>
                <div className="text-[hsl(var(--portfolio-gray))]">
                  <span className="text-[hsl(var(--portfolio-teal))]">Problem Solver:</span> true
                </div>
                <div className="text-[hsl(var(--portfolio-gray))]">
                  <span className="text-[hsl(var(--portfolio-teal))]">Motivated:</span> true
                </div>
              </div>
              
              {/* Hobbies */}
              <div className="pt-6">
                <div className="flex gap-4">
                  <div className="flex items-center gap-3 text-[hsl(var(--portfolio-gray))]">
                    <Music className="text-[hsl(var(--portfolio-yellow))]" size={18} />
                    <span>Listening to Music</span>
                  </div>
                  <div className="flex items-center gap-3 text-[hsl(var(--portfolio-gray))]">
                    <Video className="text-[hsl(var(--portfolio-yellow))]" size={18} />
                    <span>Video Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))]">SKILLS</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Programming Languages</h3>
              <div className="space-y-3">
                {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                  <div key={skill} className="text-[hsl(var(--portfolio-gray))] text-lg">{skill}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Frontend Development</h3>
              <div className="space-y-3">
                {["HTML", "CSS", "React", "Bootstrap"].map((skill) => (
                  <div key={skill} className="text-[hsl(var(--portfolio-gray))] text-lg">{skill}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Backend Development</h3>
              <div className="space-y-3">
                {["Node.js", "Git"].map((skill) => (
                  <div key={skill} className="text-[hsl(var(--portfolio-gray))] text-lg">{skill}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Databases</h3>
              <div className="space-y-3">
                {["MySQL", "MongoDB"].map((skill) => (
                  <div key={skill} className="text-[hsl(var(--portfolio-gray))] text-lg">{skill}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">DSA</h3>
              <div className="space-y-3">
                {["Data Structures and Algorithms", "Machine Learning", "AI"].map((skill) => (
                  <div key={skill} className="text-[hsl(var(--portfolio-gray))] text-lg">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))]">EDUCATION</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-[hsl(var(--portfolio-teal))] pl-8">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-semibold">2024-2028</span>
                <span className="text-[hsl(var(--portfolio-gray))]">Present</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">B.TECH CSE AI&ML</h3>
              <p className="text-[hsl(var(--portfolio-gray))] text-lg">SRM Institute of Science and Technology, Tiruchirappalli</p>
              <p className="text-[hsl(var(--portfolio-yellow))] font-semibold mt-2">CGPA: 9.5</p>
            </div>
            
            <div className="border-l-4 border-[hsl(var(--portfolio-teal))] pl-8">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-semibold">2020-2022</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HIGHER SECONDARY CERTIFICATE</h3>
              <p className="text-[hsl(var(--portfolio-gray))] text-lg">Sri Chaitanya Junior Kalasala, R.K.puram</p>
            </div>
            
            <div className="border-l-4 border-[hsl(var(--portfolio-teal))] pl-8">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-semibold">2018-2020</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SECONDARY SCHOOL CERTIFICATE</h3>
              <p className="text-[hsl(var(--portfolio-gray))] text-lg">Kakatiya High School, Miryalaguda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))]">PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-[hsl(var(--portfolio-dark-navy))] border-[hsl(var(--portfolio-teal))]/30 hover:border-[hsl(var(--portfolio-teal))] transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Image className="text-[hsl(var(--portfolio-yellow))] mt-1" size={24} />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-[hsl(var(--portfolio-gray))] mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-[hsl(var(--portfolio-teal))]/30 text-[hsl(var(--portfolio-teal))]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--portfolio-teal))]/50 text-[hsl(var(--portfolio-teal))] hover:bg-[hsl(var(--portfolio-teal))] hover:text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[hsl(var(--portfolio-dark-navy))] border-t border-[hsl(var(--portfolio-teal))]/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[hsl(var(--portfolio-gray))] text-lg">© 2024 Alugubelli Nivas. Built with passion and React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;