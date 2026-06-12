
import Hero3D from "../components/Hero3D";
import {
 
  Code,
  Database,
  Globe,
  Brain,
} from "lucide-react";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background3D from "../components/Background3D";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {


  const heroRef = useRef();
const aboutRef = useRef();
const skillsRef = useRef();
const projectsRef = useRef();
const contactRef = useRef();
const modelRef = useRef();
const modelRotation = useRef({
  y: 0,
});

const projects = [
  {
    title: "AI Integrated MERN APPLICATION",
    description:
      "AI-powered E-COMM platform with chatbot, workflow management, voice based navigation assistence and business intelligence.",
    github: "https://github.com/Tripura-1910/ECOMM_MERN_APP/",
  },
  {
    title: "SYNAX LABS",
    description:
      "Frontend Business Portfolio",
    github: "https://github.com/Tripura-1910/S.Y.N.A.X_LABS/",
  },
  {
    title: "Portfolio Website",
    description:
      "Interactive 3D portfolio built with React, Three.js, Framer Motion, and Tailwind CSS.",
    github: "https://github.com/Tripura-1910/",
  },
];


const skills = [
  {
    icon: <Code size={30} />,
    title: "Frontend Development",
    desc: "React.js, Next.js, Vite, Tailwind CSS, JavaScript, TypeScript, Redux, Responsive UI Design",
  },
  {
    icon: <Database size={30} />,
    title: "Backend Development",
    desc: "Node.js, Express.js, REST APIs, Authentication, JWT, MongoDB, MySQL, Server Architecture",
  },
  {
    icon: <Globe size={30} />,
    title: "Full Stack Applications",
    desc: "Complete web application development from UI design to backend deployment and database management.",
  },
  {
    icon: <Brain size={30} />,
    title: "Artificial Intelligence",
    desc: "OpenAI APIs, AI Chatbots, Intelligent Assistants, AI Automation, Prompt Engineering, RAG Systems",
  },
  {
    icon: <Code size={30} />,
    title: "3D Web Experiences",
    desc: "Three.js, React Three Fiber, GLSL Effects, Interactive Portfolios, Product Visualizations",
  },
  {
    icon: <Globe size={30} />,
    title: "Cloud & Deployment",
    desc: "Vercel, Netlify, VPS Hosting, Domain Configuration, CI/CD Pipelines, Production Deployment",
  },
  {
    icon: <Database size={30} />,
    title: "Database Systems",
    desc: "MongoDB, MySQL, Firebase, Data Modeling, Aggregation Pipelines, Optimization",
  },
  {
    icon: <Brain size={30} />,
    title: "Business Automation",
    desc: "CRM Systems, WhatsApp Automation, Workflow Automation, AI Customer Support Solutions",
  },
];

const moveModel = (x, scale, rotation) => {
  gsap.to(modelRef.current, {
    x,
    scale,
    duration: 0.8,
    overwrite: true,
  });

  modelRotation.current.y = rotation;
};





useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set(modelRef.current, {
      x: "28vw",
      scale: 0.9,
    });

    gsap.to(modelRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
ScrollTrigger.create({
  trigger: heroRef.current,
  start: "top center",
  end: "bottom center",
  onToggle: (self) => {
    if (self.isActive) moveModel("12vw", 0.9, 0);
  },
});

ScrollTrigger.create({
  trigger: aboutRef.current,
  start: "top center",
  end: "bottom center",
  onToggle: (self) => {
    if (self.isActive)
      moveModel("-28vw", 0.95, 0.5);
  },
});

ScrollTrigger.create({
  trigger: skillsRef.current,
  start: "top center",
  end: "bottom center",
  onToggle: (self) => {
    if (self.isActive)
      moveModel("25vw", 0.95, -0.9);
  },
});

ScrollTrigger.create({
  trigger: projectsRef.current,
  start: "top center",
  end: "bottom center",
  onToggle: (self) => {
    if (self.isActive)
      moveModel("-28vw", 0.85, 0.8);
  },
});

ScrollTrigger.create({
  trigger: contactRef.current,
  start: "top center",
  end: "bottom center",
  onToggle: (self) => {
    if (self.isActive)
      moveModel(0, 0, 0);
  },
});
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, []);


useLayoutEffect(() => {
  if (window.innerWidth < 1024) return;

  const ctx = gsap.context(() => {
    gsap.set(modelRef.current, {
      x: "28vw",
      scale: 0.9,
    });

    // all your existing ScrollTriggers...
  });

  ScrollTrigger.refresh();

  return () => ctx.revert();
}, []);


  return (
    
    <main className="bg-[#16011b] overflow-x-hidden">
     
        <div className="fixed inset-0 -z-10">
          
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-pink-600/20 blur-[250px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/10 blur-[180px] rounded-full" />
  </div>
  

<div
  ref={modelRef}
  className="
  hidden lg:block
  fixed
  top-[100px]
  left-1/2
  -translate-x-1/2
  h-screen
  w-[40vw]
  min-w-[460px]
  max-w-[650px]
  z-30
  pointer-events-none
"
>
  <div className="absolute inset-0 flex items-center justify-center -z-10">
    <div
      className="
      w-[600px]
      h-[600px]
      rounded-full
      bg-pink-700
      blur-[180px]
      animate-pulse
      "
    />
  </div>
<Hero3D rotation={modelRotation} />
</div>

<div className="hidden lg:block fixed inset-0 z-0 pointer-events-none">
  <Background3D />
</div>

<div className="fixed top-0 left-0 w-full h-40 pointer-events-none z-40">
  <div className="absolute left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-violet-500/10 blur-[120px]" />
</div>
      {/* HERO SECTION */}
 <section
  ref={heroRef}
  id="hero"
  className="relative min-h-screen flex items-center"
>
  <div className="relative z-20 max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
    <div className="grid lg:grid-cols-2 gap-24 items-center">

      <div className="z-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-500/30 bg-red-950/20 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-pink-300 text-sm">
            AVAILABLE FOR FREELANCE PROJECTS
          </span>
        </div>

        <h1 className="mt-8 text-7xl lg:text-8xl font-black leading-none">
          <span className="text-white">SAMUEL</span>
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-red-300 to-violet-700 bg-clip-text text-transparent">
            T THOMAS
          </span>
        </h1>

        <p className="mt-8 text-2xl text-gray-300">
          Full Stack Developer & AI Engineer
        </p>

        <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
          Building futuristic digital products, AI-powered systems,
          automation platforms and immersive 3D experiences.
        </p>

        <div className="mt-10 flex gap-5">
          <a
  href="https://github.com/Tripura-1910"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-white font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-700 via-red-400 to-pink-700 shadow-[0_0_50px_rgba(255,0,0,.4)] hover:scale-105 transition"
>
  View Projects
</a>

          <button className=" text-white font-bold px-8 py-4 rounded-2xl border border-violet-700/30 backdrop-blur-xl hover:bg-violet-500/10 transition">
            Download Resume
          </button>
        </div>
      </div>

      <div className="hidden lg:block h-[700px]" />
    </div>
  </div>
</section>





      {/* ABOUT */}
   <section ref={aboutRef} id="about" className="py-56">
  <div className="relative z-20 max-w-[1400px] mx-auto px-8 lg:px-16">
    <div className="grid lg:grid-cols-2 gap-24 items-center">

      {/* Empty space for 3D Character */}
      <div className="hidden lg:block h-[700px]" />

      {/* Content */}
      <div>
        <span className="text-cyan-500 tracking-[10px] uppercase">
          About Me
        </span>

        <h2 className="mt-4 text-6xl font-black text-white leading-tight">
          Engineering Digital Experiences
        </h2>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed">
          Hi, I'm <span className="text-cyan-400 font-semibold">Samuel Thomas</span>,
          a Full Stack Developer, AI Engineer, and Founder of
          <span className="text-cyan-400"> SYNAX LABS</span>.
          I am passionate about building innovative digital products that
          combine modern web technologies, artificial intelligence,
          automation, and immersive 3D experiences.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          Over the years, I have developed scalable web applications,
          AI-powered business solutions, e-commerce platforms,
          custom CRM systems, automation tools, and interactive
          3D interfaces. My focus is always on creating products that
          are fast, visually appealing, and capable of solving
          real-world business challenges.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I enjoy working across the entire development lifecycle,
          from UI/UX design and frontend engineering to backend
          architecture, database design, cloud deployment, and AI
          integration. I continuously explore emerging technologies
          to build smarter and more efficient solutions.
        </p>

        {/* Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "Firebase",
              "Python",
              "AI & Machine Learning",
              "OpenAI APIs",
              "Three.js",
              "React Three Fiber",
              "Tailwind CSS",
              "Redux",
              "REST APIs",
              "Socket.io",
              "Git",
              "Docker",
              "Vercel",
              "Cloud Deployment",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Languages
          </h3>

          <div className="space-y-2 text-gray-400">
            <p>🇬🇧 English — Professional Proficiency</p>
            <p>🇮🇳 Malayalam — Native Proficiency</p>
            <p>🇮🇳 Hindi — Conversational</p>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience Highlights
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              ✓ Developed AI-powered business automation systems and
              intelligent customer support solutions.
            </li>

            <li>
              ✓ Built full-stack web applications with React, Node.js,
              MongoDB, and cloud deployment pipelines.
            </li>

            <li>
              ✓ Designed and deployed e-commerce platforms with
              payment integrations and inventory management.
            </li>

            <li>
              ✓ Created immersive 3D portfolio experiences using
              Three.js and React Three Fiber.
            </li>

            <li>
              ✓ Delivered custom software solutions for startups,
              local businesses, and enterprise clients.
            </li>
          </ul>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-6">
          <div className="p-6 border border-cyan-500/20 rounded-2xl bg-white/5 backdrop-blur-sm">
            <h4 className="text-4xl font-black text-cyan-400">
              20+
            </h4>
            <p className="text-gray-400 mt-2">
              Projects Delivered
            </p>
          </div>

          <div className="p-6 border border-cyan-500/20 rounded-2xl bg-white/5 backdrop-blur-sm">
            <h4 className="text-4xl font-black text-cyan-400">
              AI
            </h4>
            <p className="text-gray-400 mt-2">
              Automation & Smart Solutions
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* SKILLS */}
  <section ref={skillsRef} id="skills" className="py-56">
  <div className="relative z-20 max-w-[1400px] mx-auto px-8 lg:px-16">

    {/* Left Content Only */}
    <div className="max-w-3xl">

      <span className="text-cyan-500 tracking-[10px] uppercase">
        Expertise
      </span>

      <h2 className="mt-4 text-6xl font-black text-white">
        Skills & Technologies
      </h2>

      <p className="mt-8 text-lg text-gray-400 leading-relaxed">
        I build modern digital products by combining full-stack
        development, artificial intelligence, cloud technologies,
        automation systems, and immersive 3D experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {skills.map((item) => (
          <div
            key={item.title}
            className="
            p-8
            rounded-3xl
            border border-cyan-500/20
            bg-gradient-to-b
            from-white/10
            to-white/[0.03]
            backdrop-blur-xl
            hover:border-cyan-400
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(0,255,255,.25)]
            transition-all duration-500
            "
          >
            <div className="text-cyan-400">
              {item.icon}
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div>
          <h3 className="text-4xl font-black text-cyan-400">20+</h3>
          <p className="text-gray-400 mt-2">Projects</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-cyan-400">AI</h3>
          <p className="text-gray-400 mt-2">Solutions</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-cyan-400">10+</h3>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
          <p className="text-gray-400 mt-2">Innovation</p>
        </div>
      </div>

    </div>

  </div>
</section>

 <section
  ref={projectsRef}
  id="projects"
  className="relative py-56 overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 blur-[180px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 blur-[160px] rounded-full" />
  </div>

  <div className="relative z-20 max-w-[1400px] mx-auto px-8 lg:px-16">
    <div className="grid lg:grid-cols-2 gap-24 items-start">

      {/* LEFT SIDE RESERVED FOR 3D MODEL */}
      <div className="hidden lg:block h-[700px]" />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex justify-end">
        <div className="w-full max-w-3xl">

          <span className="text-red-400 tracking-[10px] uppercase text-sm">
            Portfolio
          </span>

          <h2 className="mt-4 text-6xl font-black text-white">
            Featured
            <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
            A curated collection of full-stack applications,
            AI-powered solutions, automation systems, and
            immersive digital experiences engineered for
            modern businesses and startups.
          </p>

          {/* PROJECT CARDS */}
          <div className="space-y-8 mt-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-red-500/50
                hover:-translate-y-2
                hover:shadow-[0_0_60px_rgba(255,0,80,.15)]
                "
              >
                {/* Glow */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-red-500/5
                  via-transparent
                  to-violet-500/5
                  "
                />

                <div className="relative p-10">

                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-bold tracking-widest">
                      0{index + 1}
                    </span>

                    <div className="w-12 h-px bg-red-500/40" />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      px-6
                      py-3
                      rounded-xl
                      border
                      border-red-500/30
                      text-red-400
                      font-semibold
                      hover:bg-red-500/10
                      hover:border-red-400
                      transition-all
                      "
                    >
                      View Repository →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          <div className="mt-14 flex justify-center lg:justify-start">
            <a
              href="https://github.com/Tripura-1910"
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              relative
              inline-flex
              items-center
              gap-3
              px-10
              py-5
              rounded-2xl
              text-white
              font-bold
              bg-gradient-to-r
              from-violet-700
              via-red-500
              to-pink-600
              shadow-[0_0_40px_rgba(255,0,80,.35)]
              hover:scale-105
              transition-all
              duration-300
              "
            >
              View More Projects

              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT */}
<section
  ref={contactRef}
  id="contact"
  className="relative py-56 overflow-hidden"
>
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-black" />

  <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

  <div className="relative z-20 max-w-6xl mx-auto px-8 text-center">

    {/* Label */}
    <span className="tracking-[12px] uppercase text-violet-400">
      Mission Control
    </span>

    {/* Headline */}
    <h2 className="mt-8 text-6xl md:text-8xl xl:text-9xl font-black leading-none text-white">
      READY TO BUILD
    </h2>

    <span
      className="
      block
      mt-4
      text-6xl
      md:text-8xl
      xl:text-9xl
      font-black
      bg-gradient-to-r
      from-pink-400
      via-violet-400
      to-cyan-400
      bg-clip-text
      text-transparent
      "
    >
      SOMETHING LEGENDARY?
    </span>

    {/* Description */}
    <p className="max-w-4xl mx-auto mt-12 text-xl lg:text-2xl text-gray-400 leading-relaxed">
      Whether you're building an AI-powered platform,
      a next-generation SaaS product, an immersive 3D experience,
      or a scalable business solution, I'm ready to turn ambitious
      ideas into exceptional digital products.
    </p>

    <p className="max-w-3xl mx-auto mt-8 text-gray-500 text-lg leading-relaxed">
      From concept and design to development, deployment,
      automation, and AI integration — every solution is crafted
      for performance, scalability, and real-world impact.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

      <div>
        <h3 className="text-5xl font-black text-cyan-400">
          20+
        </h3>
        <p className="text-gray-400 mt-3">
          Projects Delivered
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-pink-400">
          AI
        </h3>
        <p className="text-gray-400 mt-3">
          Powered Solutions
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-violet-400">
          24/7
        </h3>
        <p className="text-gray-400 mt-3">
          Innovation Mindset
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-black text-cyan-400">
          ∞
        </h3>
        <p className="text-gray-400 mt-3">
          Possibilities
        </p>
      </div>

    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center gap-6 mt-20">

      <button
        className="
        px-12
        py-5
        rounded-2xl
        text-white
        font-bold
        text-lg
        bg-gradient-to-r
        from-pink-600
        via-violet-600
        to-cyan-600
        shadow-[0_0_60px_rgba(168,85,247,.45)]
        hover:scale-105
        transition-all
        duration-300
        "
      >
        Launch A Project
      </button>

      <button
        className="
        px-12
        py-5
        rounded-2xl
        border
        border-violet-500/30
        bg-white/5
        backdrop-blur-xl
        text-white
        font-bold
        hover:border-violet-400
        hover:bg-violet-500/10
        transition-all
        duration-300
        "
      >
        Schedule A Meeting
      </button>

    </div>

    {/* Footer Text */}
    <div className="mt-24">
      <p className="text-gray-500 uppercase tracking-[6px]">
        SYNAX LABS
      </p>

      <p className="mt-4 text-gray-600">
        Building Intelligent Digital Systems For The Future.
      </p>
    </div>

  </div>
</section>
    </main>
  );
};

export default Home;