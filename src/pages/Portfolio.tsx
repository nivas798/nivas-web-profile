import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, FileText, Image, Instagram, Github, Linkedin, Mail, Music, Video, GraduationCap, Calendar, MapPin, Award, Code, Globe, Zap, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const skills = [
    "Python", "Java", "C++", "JavaScript", "React", "Node.js", 
    "HTML/CSS", "Git", "Data Structures", "Algorithms", "Machine Learning", "AI"
  ];

  const projects = [
    {
      title: "🔗 NaviX – Ultra Interactive Navigation",
      role: "UI/UX Designer & Frontend Developer",
      description: "A futuristic, animation-rich web experience designed to revolutionize digital navigation. Features fluid micro-interactions, adaptive layouts, magnetic cursor effects, and performance-optimized transitions for visually immersive user journeys.",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "#",
      icon: Code,
      color: "teal",
      features: ["Animated multi-section landing with custom cursor effects", "Interactive navigation with smooth transitions", "Gradient-based glassmorphic UI components", "Responsive design for all devices"]
    },
    {
      title: "⏱️ Stopwatch Pro – Precision Timer",
      role: "Frontend Developer & UI Designer", 
      description: "A beautifully designed web application built for high-accuracy time tracking. Combines precision timing with modern glassmorphic design, perfect for athletes, developers, and productivity-focused users.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      icon: Globe,
      color: "pink",
      features: ["Millisecond-level timing accuracy", "Animated lap time tracking", "Glassmorphism styling", "Mobile-friendly responsive UI"]
    },
    {
      title: "🎮 Tic Tac Toe Fun – Interactive Game",
      role: "Frontend Developer & UI Animator",
      description: "A vibrant, kid-friendly browser game that reimagines classic tic-tac-toe with colorful visuals, playful animations, sound effects, and celebratory interactions for an engaging gaming experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
      icon: Zap,
      color: "yellow",
      features: ["Animated 3x3 game grid with interactive cells", "Dynamic player turns and live scoring", "Winning animations with confetti celebration", "Sound toggle and Web Audio API integration"]
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Programming Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "Python", level: 85 },
                  { name: "Java", level: 80 },
                  { name: "C++", level: 75 },
                  { name: "JavaScript", level: 70 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--portfolio-gray))] text-lg">{skill.name}</span>
                      <span className="text-[hsl(var(--portfolio-teal))] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[hsl(var(--portfolio-dark-navy))] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[hsl(var(--portfolio-teal))] to-[hsl(var(--portfolio-cyan))] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Frontend Development</h3>
              <div className="space-y-4">
                {[
                  { name: "HTML", level: 90 },
                  { name: "CSS", level: 85 },
                  { name: "React", level: 75 },
                  { name: "Bootstrap", level: 80 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--portfolio-gray))] text-lg">{skill.name}</span>
                      <span className="text-[hsl(var(--portfolio-teal))] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[hsl(var(--portfolio-dark-navy))] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[hsl(var(--portfolio-teal))] to-[hsl(var(--portfolio-cyan))] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Backend & Databases</h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js", level: 70 },
                  { name: "MySQL", level: 80 },
                  { name: "MongoDB", level: 75 },
                  { name: "Git", level: 85 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--portfolio-gray))] text-lg">{skill.name}</span>
                      <span className="text-[hsl(var(--portfolio-teal))] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[hsl(var(--portfolio-dark-navy))] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[hsl(var(--portfolio-teal))] to-[hsl(var(--portfolio-cyan))] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">AI & Machine Learning</h3>
              <div className="space-y-4">
                {[
                  { name: "Machine Learning", level: 70 },
                  { name: "Data Structures", level: 85 },
                  { name: "Algorithms", level: 80 },
                  { name: "Artificial Intelligence", level: 65 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--portfolio-gray))] text-lg">{skill.name}</span>
                      <span className="text-[hsl(var(--portfolio-teal))] text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[hsl(var(--portfolio-dark-navy))] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[hsl(var(--portfolio-teal))] to-[hsl(var(--portfolio-cyan))] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
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
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* B.Tech Card */}
            <Card className="bg-[hsl(var(--portfolio-dark-navy))] border-[hsl(var(--portfolio-teal))]/30 hover:border-[hsl(var(--portfolio-teal))] transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[hsl(var(--portfolio-teal))]/20 p-4 rounded-full mb-4">
                    <GraduationCap className="text-[hsl(var(--portfolio-teal))] w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-[hsl(var(--portfolio-yellow))] w-4 h-4" />
                    <span className="text-[hsl(var(--portfolio-yellow))] font-semibold">2024-2028</span>
                    <Badge className="bg-[hsl(var(--portfolio-teal))]/20 text-[hsl(var(--portfolio-teal))] text-xs">Present</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">B.TECH CSE AI&ML</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-[hsl(var(--portfolio-gray))] w-4 h-4" />
                    <p className="text-[hsl(var(--portfolio-gray))] text-sm">SRM IST Tiruchirappalli</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-[hsl(var(--portfolio-yellow))] w-4 h-4" />
                    <span className="text-[hsl(var(--portfolio-yellow))] font-bold">CGPA: 9.5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Higher Secondary Card */}
            <Card className="bg-[hsl(var(--portfolio-dark-navy))] border-[hsl(var(--portfolio-teal))]/30 hover:border-[hsl(var(--portfolio-teal))] transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[hsl(var(--portfolio-pink))]/20 p-4 rounded-full mb-4">
                    <BookOpen className="text-[hsl(var(--portfolio-pink))] w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-[hsl(var(--portfolio-yellow))] w-4 h-4" />
                    <span className="text-[hsl(var(--portfolio-yellow))] font-semibold">2020-2022</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">HIGHER SECONDARY</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-[hsl(var(--portfolio-gray))] w-4 h-4" />
                    <p className="text-[hsl(var(--portfolio-gray))] text-sm">Sri Chaitanya Junior Kalasala</p>
                  </div>
                  <p className="text-[hsl(var(--portfolio-gray))] text-xs">R.K.puram</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Secondary School Card */}
            <Card className="bg-[hsl(var(--portfolio-dark-navy))] border-[hsl(var(--portfolio-teal))]/30 hover:border-[hsl(var(--portfolio-teal))] transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[hsl(var(--portfolio-yellow))]/20 p-4 rounded-full mb-4">
                    <FileText className="text-[hsl(var(--portfolio-yellow))] w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-[hsl(var(--portfolio-yellow))] w-4 h-4" />
                    <span className="text-[hsl(var(--portfolio-yellow))] font-semibold">2018-2020</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">SECONDARY SCHOOL</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="text-[hsl(var(--portfolio-gray))] w-4 h-4" />
                    <p className="text-[hsl(var(--portfolio-gray))] text-sm">Kakatiya High School</p>
                  </div>
                  <p className="text-[hsl(var(--portfolio-gray))] text-xs">Miryalaguda</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[hsl(var(--portfolio-navy))]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))]">PROJECTS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              const iconColorClass = project.color === 'teal' ? 'text-[hsl(var(--portfolio-teal))]' :
                                   project.color === 'pink' ? 'text-[hsl(var(--portfolio-pink))]' :
                                   'text-[hsl(var(--portfolio-yellow))]';
              const bgColorClass = project.color === 'teal' ? 'bg-[hsl(var(--portfolio-teal))]/20' :
                                 project.color === 'pink' ? 'bg-[hsl(var(--portfolio-pink))]/20' :
                                 'bg-[hsl(var(--portfolio-yellow))]/20';
              
              return (
                <Card key={index} className="bg-[hsl(var(--portfolio-dark-navy))] border-[hsl(var(--portfolio-teal))]/30 hover:border-[hsl(var(--portfolio-teal))] transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className={`${bgColorClass} p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`${iconColorClass} w-8 h-8`} />
                      </div>
                       <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                       <p className="text-[hsl(var(--portfolio-yellow))] text-sm font-semibold mb-4">{project.role}</p>
                       <p className="text-[hsl(var(--portfolio-gray))] mb-4 leading-relaxed text-sm">{project.description}</p>
                       
                       {/* Key Features */}
                       <div className="mb-4">
                         <h4 className="text-[hsl(var(--portfolio-teal))] text-sm font-semibold mb-2">Key Features:</h4>
                         <ul className="text-[hsl(var(--portfolio-gray))] text-xs space-y-1">
                           {project.features.map((feature, idx) => (
                             <li key={idx} className="flex items-start gap-2">
                               <span className="text-[hsl(var(--portfolio-teal))] text-xs mt-1">•</span>
                               <span>{feature}</span>
                             </li>
                           ))}
                         </ul>
                       </div>

                       <div className="flex flex-wrap gap-2 mb-6 justify-center">
                         {project.tech.map((tech) => (
                           <Badge key={tech} variant="outline" className="border-[hsl(var(--portfolio-teal))]/30 text-[hsl(var(--portfolio-teal))] text-xs">
                             {tech}
                           </Badge>
                         ))}
                       </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-[hsl(var(--portfolio-teal))]/50 text-[hsl(var(--portfolio-teal))] hover:bg-[hsl(var(--portfolio-teal))] hover:text-white group-hover:shadow-lg transition-all duration-300"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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