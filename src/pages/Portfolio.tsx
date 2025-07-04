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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[hsl(var(--professional-navy))]">Alugubelli Nivas</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-[hsl(var(--professional-gray))] hover:text-[hsl(var(--professional-navy))] transition-colors font-medium">Home</a>
            <a href="#about" className="text-[hsl(var(--professional-gray))] hover:text-[hsl(var(--professional-navy))] transition-colors font-medium">About</a>
            <a href="#skills" className="text-[hsl(var(--professional-gray))] hover:text-[hsl(var(--professional-navy))] transition-colors font-medium">Skills</a>
            <a href="#education" className="text-[hsl(var(--professional-gray))] hover:text-[hsl(var(--professional-navy))] transition-colors font-medium">Education</a>
            <a href="#projects" className="text-[hsl(var(--professional-gray))] hover:text-[hsl(var(--professional-navy))] transition-colors font-medium">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-[hsl(var(--professional-navy))] leading-tight">
                Hello,
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-[hsl(var(--professional-navy))] leading-tight">
                This is <span className="text-transparent bg-clip-text bg-[var(--gradient-accent)]">ALUGUBELLI NIVAS</span>.
              </h2>
            </div>
            <div className="space-y-3 text-xl md:text-2xl text-[hsl(var(--professional-gray))]">
              <p className="font-medium">AI & ML Enthusiast,</p>
              <p className="font-medium">Ambitious B.Tech Student</p>
            </div>
            
            {/* Personal Traits */}
            <div className="grid grid-cols-2 gap-6 text-base text-[hsl(var(--professional-gray))]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[hsl(var(--professional-gold))] rounded-full"></div>
                <span className="font-medium">Hard Worker</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[hsl(var(--professional-navy))] rounded-full"></div>
                <span className="font-medium">Quick Learner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[hsl(var(--professional-gray))] rounded-full"></div>
                <span className="font-medium">Problem Solver</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[hsl(var(--professional-gold))] rounded-full"></div>
                <span className="font-medium">Motivated</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="border-[hsl(var(--professional-navy))]/30 text-[hsl(var(--professional-navy))] hover:bg-[hsl(var(--professional-navy))]/10 hover:border-[hsl(var(--professional-navy))]"
                onClick={() => window.open('https://www.instagram.com/__.nivasss04/', '_blank')}
              >
                <Instagram size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-[hsl(var(--professional-gray))]/30 text-[hsl(var(--professional-gray))] hover:bg-[hsl(var(--professional-gray))]/10 hover:border-[hsl(var(--professional-gray))]"
                onClick={() => window.open('https://github.com/nivas798', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-[hsl(var(--professional-navy))]/30 text-[hsl(var(--professional-navy))] hover:bg-[hsl(var(--professional-navy))]/10 hover:border-[hsl(var(--professional-navy))]"
                onClick={() => window.open('https://www.linkedin.com/in/nivas-alugubelli-94bb9a325', '_blank')}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-[hsl(var(--professional-gold))]/40 text-[hsl(var(--professional-gold))] hover:bg-[hsl(var(--professional-gold))]/10 hover:border-[hsl(var(--professional-gold))]"
                onClick={() => window.open('mailto:nivasalugubelli6@gmail.com', '_blank')}
              >
                <Mail size={20} />
              </Button>
            </div>
            
            <Button className="bg-[var(--gradient-professional)] hover:shadow-[var(--shadow-professional)] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              View Resume
            </Button>
          </div>
          
          {/* Professional Code Panel */}
          <div className="bg-[hsl(var(--professional-light-gray))] rounded-xl p-8 border border-gray-200 font-mono text-sm shadow-[var(--shadow-card)]">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-2 text-[hsl(var(--professional-dark-gray))]">
              <div><span className="text-purple-600 font-semibold">const</span> <span className="text-blue-600 font-semibold">student</span> = {`{`}</div>
              <div className="ml-4"><span className="text-green-600">name</span>: <span className="text-amber-600">'Alugubelli Nivas'</span>,</div>
              <div className="ml-4"><span className="text-green-600">education</span>: <span className="text-amber-600">'B.Tech CSE AI&ML'</span>,</div>
              <div className="ml-4"><span className="text-green-600">university</span>: <span className="text-amber-600">'SRM IST Tiruchirappalli'</span>,</div>
              <div className="ml-4"><span className="text-green-600">year</span>: <span className="text-amber-600">'2024-2028'</span>,</div>
              <div className="ml-4"><span className="text-green-600">cgpa</span>: <span className="text-[hsl(var(--professional-gold))] font-semibold">9.5</span>,</div>
              <div className="ml-4"><span className="text-green-600">skills</span>: [<span className="text-amber-600">'Python'</span>, <span className="text-amber-600">'AI'</span>, <span className="text-amber-600">'ML'</span>],</div>
              <div className="ml-4"><span className="text-green-600">passionate</span>: <span className="text-[hsl(var(--professional-gold))] font-semibold">true</span></div>
              <div>{`};`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[hsl(var(--professional-light-gray))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--professional-navy))]">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Avatar className="w-80 h-80 border-4 border-[hsl(var(--professional-gold))] shadow-[var(--shadow-card)]">
                <AvatarImage src="/lovable-uploads/169e5a3e-23da-4821-9451-22e3cfd6e036.png" alt="Alugubelli Nivas" />
                <AvatarFallback className="text-6xl bg-[var(--gradient-professional)] text-white">AN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-6 text-lg text-[hsl(var(--professional-gray))]">
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
              
              {/* Hobbies */}
              <div className="border-t border-gray-300 pt-8">
                <h3 className="text-xl font-semibold mb-6 text-[hsl(var(--professional-navy))]">Hobbies & Interests</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                    <Music className="text-[hsl(var(--professional-gold))]" size={18} />
                    <span className="font-medium">Listening to Music</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200">
                    <Video className="text-[hsl(var(--professional-navy))]" size={18} />
                    <span className="font-medium">Video Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--professional-navy))]">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-[hsl(var(--professional-navy))]">Programming Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[hsl(var(--professional-gold))]/10 text-[hsl(var(--professional-navy))] border-[hsl(var(--professional-gold))]/30 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-[hsl(var(--professional-navy))]">Web Development</h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "HTML/CSS", "Git"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[hsl(var(--professional-navy))]/10 text-[hsl(var(--professional-navy))] border-[hsl(var(--professional-navy))]/30 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-[hsl(var(--professional-navy))]">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-3">
                  {["Machine Learning", "Data Structures", "Algorithms", "AI"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-[hsl(var(--professional-gray))]/10 text-[hsl(var(--professional-navy))] border-[hsl(var(--professional-gray))]/30 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-[hsl(var(--professional-light-gray))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--professional-navy))]">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <BookOpen className="text-[hsl(var(--professional-gold))] mt-1" size={28} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[hsl(var(--professional-navy))]">Bachelor of Technology - CSE AI&ML</h3>
                      <span className="text-[hsl(var(--professional-gold))] font-semibold">2024-2028</span>
                    </div>
                    <p className="text-[hsl(var(--professional-gray))] mb-3 text-lg">SRM Institute of Science and Technology, Tiruchirappalli</p>
                    <Badge className="bg-[hsl(var(--professional-gold))]/10 text-[hsl(var(--professional-navy))] border-[hsl(var(--professional-gold))]/30">CGPA: 9.5</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <FileText className="text-[hsl(var(--professional-navy))] mt-1" size={28} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[hsl(var(--professional-navy))]">Higher Secondary Certificate</h3>
                      <span className="text-[hsl(var(--professional-navy))] font-semibold">2020-2022</span>
                    </div>
                    <p className="text-[hsl(var(--professional-gray))] text-lg">Sri Chaitanya Junior Kalasala, R.K.puram</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <User className="text-[hsl(var(--professional-gray))] mt-1" size={28} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-[hsl(var(--professional-navy))]">Secondary School Certificate</h3>
                      <span className="text-[hsl(var(--professional-gray))] font-semibold">2018-2020</span>
                    </div>
                    <p className="text-[hsl(var(--professional-gray))] text-lg">Kakatiya High School, Miryalaguda</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--professional-navy))]">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-professional)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Image className="text-[hsl(var(--professional-gold))] mt-1" size={24} />
                    <h3 className="text-xl font-bold text-[hsl(var(--professional-navy))]">{project.title}</h3>
                  </div>
                  <p className="text-[hsl(var(--professional-gray))] mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-[hsl(var(--professional-navy))]/30 text-[hsl(var(--professional-navy))]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[hsl(var(--professional-navy))]/30 text-[hsl(var(--professional-navy))] hover:bg-[hsl(var(--professional-navy))] hover:text-white"
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
      <footer className="py-12 bg-[hsl(var(--professional-navy))] border-t border-[hsl(var(--professional-gray))]/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/80 text-lg">© 2024 Alugubelli Nivas. Built with passion and React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;