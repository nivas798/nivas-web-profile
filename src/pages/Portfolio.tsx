import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
      link: "https://github.com/nivas798/PRODIGY_WD_01",
      icon: Code,
      color: "teal",
      features: ["Animated multi-section landing with custom cursor effects", "Interactive navigation with smooth transitions", "Gradient-based glassmorphic UI components", "Responsive design for all devices"]
    },
    {
      title: "⏱️ Stopwatch Pro – Precision Timer",
      role: "Frontend Developer & UI Designer", 
      description: "A beautifully designed web application built for high-accuracy time tracking. Combines precision timing with modern glassmorphic design, perfect for athletes, developers, and productivity-focused users.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/nivas798/PRODIGY_WD_02",
      icon: Globe,
      color: "pink",
      features: ["Millisecond-level timing accuracy", "Animated lap time tracking", "Glassmorphism styling", "Mobile-friendly responsive UI"]
    },
    {
      title: "🎮 Tic Tac Toe Fun – Interactive Game",
      role: "Frontend Developer & UI Animator",
      description: "A vibrant, kid-friendly browser game that reimagines classic tic-tac-toe with colorful visuals, playful animations, sound effects, and celebratory interactions for an engaging gaming experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/nivas798/PRODIGY_WD_03",
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
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent"
                onClick={() => window.open('https://www.linkedin.com/in/nivas-alugubelli-94bb9a325', '_blank')}
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent"
                onClick={() => window.open('https://github.com/nivas798', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent"
                onClick={() => window.open('mailto:nivasalugubelli6@gmail.com', '_blank')}
              >
                <Mail size={20} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent"
                onClick={() => window.open('https://www.instagram.com/__.nivasss04/', '_blank')}
              >
                <Instagram size={20} />
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
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))] animate-fade-in">SKILLS</h2>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))] animate-fade-in">EDUCATION</h2>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-[hsl(var(--portfolio-teal))] animate-fade-in">PROJECTS</h2>
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => {
                  const IconComponent = project.icon;
                  const accentColor = project.color === 'teal' ? 'portfolio-teal' :
                                    project.color === 'pink' ? 'portfolio-pink' :
                                    'portfolio-yellow';
                  
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-[hsl(var(--portfolio-navy))] rounded-lg p-8 border-4 border-[hsl(var(--portfolio-yellow))] font-mono text-sm relative group hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex gap-2 mb-6">
                          <div className="w-3 h-3 bg-[hsl(var(--portfolio-teal))] rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-[hsl(var(--portfolio-pink))] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-3 h-3 bg-[hsl(var(--portfolio-yellow))] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                        
                        {/* Project Code Display */}
                        <div className="space-y-2 text-white h-full">
                          <div className="flex items-center gap-2 mb-4">
                            <IconComponent className={`text-[hsl(var(--${accentColor}))] w-6 h-6 group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-[hsl(var(--portfolio-pink))]">const</span> 
                            <span className="text-[hsl(var(--portfolio-teal))]">project</span> 
                            <span className="text-white">= {`{`}</span>
                          </div>
                          
                          <div className="ml-4 space-y-1">
                            <div><span className="text-[hsl(var(--portfolio-teal))]">title</span>: <span className="text-[hsl(var(--portfolio-yellow))]">"{project.title}"</span>,</div>
                            <div><span className="text-[hsl(var(--portfolio-teal))]">role</span>: <span className="text-[hsl(var(--portfolio-yellow))]">"{project.role}"</span>,</div>
                            <div><span className="text-[hsl(var(--portfolio-teal))]">tech</span>: [
                              <div className="ml-4">
                                {project.tech.map((tech, idx) => (
                                  <span key={tech} className="text-[hsl(var(--portfolio-yellow))]">
                                    "{tech}"{idx < project.tech.length - 1 ? ',' : ''}
                                  </span>
                                ))}
                              </div>
                            ],
                            </div>
                            
                            <div className="py-2">
                              <span className="text-[hsl(var(--portfolio-teal))]">description</span>: <span className="text-[hsl(var(--portfolio-gray))] text-xs leading-relaxed">"{project.description}"</span>,
                            </div>
                            
                            <div>
                              <span className="text-[hsl(var(--portfolio-teal))]">features</span>: [
                              <div className="ml-4 text-xs">
                                {project.features.map((feature, idx) => (
                                  <div key={idx} className="text-[hsl(var(--portfolio-gray))]">
                                    "• {feature}"{idx < project.features.length - 1 ? ',' : ''}
                                  </div>
                                ))}
                              </div>
                              ],
                            </div>
                            
                            <div className="py-3">
                              <span className="text-[hsl(var(--portfolio-teal))]">status</span>: <span className="text-[hsl(var(--portfolio-pink))]">completed</span>,
                            </div>
                            
                            <div className="flex gap-2">
                              <span className="text-[hsl(var(--portfolio-teal))]">actions</span>: [
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="text-[hsl(var(--portfolio-yellow))] hover:text-[hsl(var(--portfolio-teal))] hover:bg-transparent text-xs p-1 h-auto font-mono"
                                onClick={() => window.open(project.link, '_blank')}
                              >
                                "view_project()"
                              </Button>
                              ]
                            </div>
                          </div>
                          
                          <div className="text-white mt-4">{`};`}</div>
                          
                          {/* Animated cursor */}
                          <div className="w-2 h-4 bg-[hsl(var(--portfolio-teal))] animate-pulse ml-0 mt-2"></div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="border-[hsl(var(--portfolio-teal))]/50 text-[hsl(var(--portfolio-teal))] hover:bg-[hsl(var(--portfolio-teal))] hover:text-white transition-all duration-300" />
              <CarouselNext className="border-[hsl(var(--portfolio-teal))]/50 text-[hsl(var(--portfolio-teal))] hover:bg-[hsl(var(--portfolio-teal))] hover:text-white transition-all duration-300" />
            </Carousel>
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