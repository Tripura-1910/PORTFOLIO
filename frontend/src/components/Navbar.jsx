import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

import NavbarRobot from "./NavbarBot";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const [hoveredLink, setHoveredLink] = useState(null);
const [assistantLeft, setAssistantLeft] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMobileOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
 const assistantMessages = {
  Home: "Welcome back Captain!",
  About: "Want to know more about Samuel?",
  Skills: "These are his superpowers.",
  Projects: "Check out these creations!",
  Contact: "Let's build something awesome!",
};
  return (
    <>
      <header
        className={`
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          w-[95%]
          max-w-7xl
          z-[999]
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-2xl border border-violet-500/20"
              : "bg-black/20 backdrop-blur-xl border border-white/10"
          }
          rounded-2xl
          shadow-[0_0_50px_rgba(139,92,246,.15)]
        `}
      >
        <div className="px-8">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#hero"
              className="
              flex
              items-center
              gap-3
              group
              "
            >
              <div
                className="
                p-2
                rounded-xl
                bg-gradient-to-br
                from-violet-600
                to-red-600
                shadow-[0_0_25px_rgba(168,85,247,.5)]
                group-hover:rotate-12
                transition
                "
              >
                <Cpu size={18} className="text-white" />
              </div>

              <h1 className="font-black text-3xl tracking-wider">
                <span className="text-white">SAMUEL</span>
                <span className="text-red-500">.</span>
              </h1>
            </a>

            {/* Desktop Menu */}
     <nav className="hidden lg:flex items-center gap-10 relative">
     <NavbarRobot
  visible={!!hoveredLink}
  left={assistantLeft}
  message={
    hoveredLink
      ? assistantMessages[hoveredLink]
      : ""
  }
/>
  {navLinks.map((link) => (
   <a
  key={link.name}
  href={link.href}
  onMouseEnter={(e) => {
    setHoveredLink(link.name);



 const navRect =
  e.currentTarget.parentElement.getBoundingClientRect();

const linkRect =
  e.currentTarget.getBoundingClientRect();

setAssistantLeft(
  linkRect.left -
  navRect.left +
  linkRect.width / 2
);
  }}
  onMouseLeave={() => {
    setHoveredLink(null);
  }}
  className="
  relative
  text-gray-300
  font-medium
  hover:text-white
  transition
  group
  "
>
  {link.name}

  <span
    className="
    absolute
    left-0
    -bottom-2
    w-0
    h-[2px]
    bg-gradient-to-r
    from-violet-500
    to-red-500
    transition-all
    duration-300
    group-hover:w-full
    "
  />
</a>

  ))
  }
 
</nav>


            {/* CTA */}
            <a
              href="#contact"
              className="
              hidden
              lg:flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              font-semibold
              text-white
              bg-gradient-to-r
              from-violet-600
              via-red-500
              to-red-600
              hover:scale-105
              transition
              shadow-[0_0_40px_rgba(255,0,100,.35)]
              "
            >
              Hire Me
            </a>

            {/* Mobile */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
              lg:hidden
              text-white
              p-2
              rounded-xl
              border
              border-violet-500/30
              "
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="
          fixed
          top-28
          left-1/2
          -translate-x-1/2
          w-[92%]
          z-[998]
          rounded-2xl
          border
          border-violet-500/20
          bg-black/70
          backdrop-blur-2xl
          shadow-[0_0_40px_rgba(168,85,247,.25)]
          "
        >
          <div className="p-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="
                text-gray-300
                hover:text-violet-400
                text-lg
                transition
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
              mt-3
              text-center
              py-3
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-red-600
              text-white
              font-semibold
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;