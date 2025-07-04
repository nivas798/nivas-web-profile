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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400">Alugubelli Nivas</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-5xl md:text-7xl font-bold">
                Hello,
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold">
                This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ALUGUBELLI NIVAS</span>.
              </h2>
            </div>
            <div className="space-y-2 text-xl md:text-2xl text-slate-300">
              <p>AI & ML Enthusiast,</p>
              <p>Ambitious B.Tech Student</p>
            </div>
            
            {/* Personal Traits */}
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Hard Worker</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Quick Learner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Motivated</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
                onClick={() => window.open('https://www.instagram.com/__.nivasss04/', '_blank')}
              >
                <Instagram size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-slate-500/50 text-slate-300 hover:bg-slate-500/10"
                onClick={() => window.open('https://github.com/nivas798', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10"
                onClick={() => window.open('https://www.linkedin.com/in/nivas-alugubelli-94bb9a325', '_blank')}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-red-500/50 text-red-300 hover:bg-red-500/10"
                onClick={() => window.open('mailto:nivasalugubelli6@gmail.com', '_blank')}
              >
                <Mail size={20} />
              </Button>
            </div>
            
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg">
              View Resume
            </Button>
          </div>
          
          {/* Code Animation Panel */}
          <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/30 font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="space-y-1 text-slate-300">
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">student</span> = {`{`}</div>
              <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-yellow-300">'Alugubelli Nivas'</span>,</div>
              <div className="ml-4"><span className="text-green-400">education</span>: <span className="text-yellow-300">'B.Tech CSE AI&ML'</span>,</div>
              <div className="ml-4"><span className="text-green-400">university</span>: <span className="text-yellow-300">'SRM IST Tiruchirappalli'</span>,</div>
              <div className="ml-4"><span className="text-green-400">year</span>: <span className="text-yellow-300">'2024-2028'</span>,</div>
              <div className="ml-4"><span className="text-green-400">cgpa</span>: <span className="text-cyan-400">9.5</span>,</div>
              <div className="ml-4"><span className="text-green-400">skills</span>: [<span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'AI'</span>, <span className="text-yellow-300">'ML'</span>],</div>
              <div className="ml-4"><span className="text-green-400">passionate</span>: <span className="text-cyan-400">true</span></div>
              <div>{`};`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Avatar className="w-80 h-80 border-4 border-cyan-500">
                <AvatarImage src="/lovable-uploads/33017918-f731-4d52-bccd-4a14b6dd9c6e.png" alt="Alugubelli Nivas" />
                <AvatarFallback className="text-6xl bg-gradient-to-br from-cyan-500 to-blue-600">AN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                Hi, I'm Alugubelli Nivas! I'm a passionate first-year B.Tech Computer Science Engineering 
                student specializing in Artificial Intelligence and Machine Learning at SRM Institute of 
                Science and Technology, Tiruchirappalli.
              </p>
              <p>
                With a strong academic foundation achieving a CGPA of 9.5 in my first year, I'm driven 
                by curiosity and a desire to explore cutting-edge technologies in AI and ML. My journey 
                in computer science began with a fascination for problem-solving and has evolved into a 
                deep passion for creating intelligent systems.
              </p>
              <p>
                I'm actively seeking opportunities to apply my knowledge through internships, projects, 
                and collaborations. Let's connect and explore the exciting world of technology together!
              </p>
              
              {/* Hobbies */}
              <div className="border-t border-slate-600 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Hobbies & Interests</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full">
                    <Music className="text-cyan-400" size={18} />
                    <span>Listening to Music</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-700/50 px-4 py-2 rounded-full">
                    <Video className="text-purple-400" size={18} />
                    <span>Video Editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "C++", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "HTML/CSS", "Git"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Data Structures", "Algorithms", "AI"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
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
      <section id="education" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="text-cyan-400 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">Bachelor of Technology - CSE AI&ML</h3>
                      <span className="text-cyan-400 font-semibold">2024-2028</span>
                    </div>
                    <p className="text-slate-300 mb-2">SRM Institute of Science and Technology, Tiruchirappalli</p>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30">CGPA: 9.5</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-blue-400 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">Higher Secondary Certificate</h3>
                      <span className="text-blue-400 font-semibold">2020-2022</span>
                    </div>
                    <p className="text-slate-300">Sri Chaitanya Junior Kalasala, R.K.puram</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <User className="text-purple-400 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">Secondary School Certificate</h3>
                      <span className="text-purple-400 font-semibold">2018-2020</span>
                    </div>
                    <p className="text-slate-300">Kakatiya High School, Miryalaguda</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-cyan-500/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Image className="text-cyan-400 mt-1" size={24} />
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10"
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
      <footer className="py-8 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 Alugubelli Nivas. Built with passion and React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;