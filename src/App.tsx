import { useState, useRef, useEffect } from "react";
import { Sun, Menu, X, ArrowUpRight } from "lucide-react";
import logo from "./assets/logo.svg";
import dark from "./assets/dark.png"
import light from "./assets/light.png"
import porfolio from "./assets/porfolio.jpeg"
import manage from "./assets/manage.jpeg"
import dashboard from "./assets/dashboard.jpeg"







function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [activeProject, setActiveProject]  = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false);

 useEffect(() => {
  const container = projectsRef.current;

  if (!container || isPaused) return;

  const interval = setInterval(() => {
    const nextProject = (activeProject + 1) % 4;
    const card = container.children[nextProject] as HTMLElement;

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });

    setActiveProject(nextProject);
  }, 5000);

  return () => clearInterval(interval);
}, [activeProject, isPaused]);

  return (
    <main
      className={`min-h-screen bg-[var(--background)] text-[var(--text)] ${
        isDark ? "" : "light"
      }`}
    >
      {/* NAVBAR */}
      <header className="relative border-b border-[var(--text)]/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" onClick={closeMenu}>
            <img src={logo} alt="Seun" className="h-10 w-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm hover:text-[var(--accent)]"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm hover:text-[var(--accent)]"
            >
              About
            </a>

            <a
              href="#services"
              className="text-sm hover:text-[var(--accent)]"
            >
              Services
            </a>

            <a
              href="#projects"
              className="text-sm hover:text-[var(--accent)]"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm hover:text-[var(--accent)]"
            >
              Contact
            </a>
          </nav>

          {/* Theme + Mobile Menu */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full p-2 text-[var(--accent)] hover:bg-[var(--surface)]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.5 14.5C18.2 17.8 15 20 11.3 20C6.7 20 3 16.3 3 11.7C3 8 5.2 4.8 8.5 3.5C7.9 4.8 7.6 6.2 7.6 7.7C7.6 12.7 11.6 16.7 16.6 16.7C18.1 16.7 19.5 16.4 20.8 15.8C20.4 16.7 20 17.6 19.5 18.5Z" />
                </svg>
              ) : (
                <Sun size={22} strokeWidth={1.8} />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="rounded-full p-2 hover:bg-[var(--surface)] hover:text-[var(--accent)] md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full z-50 border-t border-[var(--text)]/10 bg-[var(--background)] px-6 py-6 shadow-xl md:hidden">
            <div className="flex flex-col items-end gap-5">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>

              <a href="#about" onClick={closeMenu}>
                About
              </a>

              <a href="#services" onClick={closeMenu}>
                Services
              </a>

              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>

              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      <section  id="home" className="mx-auto sm:px-36 px-6 py-16 w-full grid grid-cols-[1.15fr_.85fr]  gap-4  " >
        <div>
          <p className="mb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm">
            Frontend Developer
          </p>
          <h1 className="text-2xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm Seunfunmi.
            <br />
            I build modern web experiences.
          </h1>
          <p className="mt-4 max-w-xl text-xs leading-5 opacity-70 sm:mt-6 sm:text-base sm:leading-7">
            I create responsive and user-friendly web applications
            using modern frontend technologies.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">
            <a
              href="#projects"
              className="rounded-lg border bg-[var(--accent)] border-[var(--text)]/30 px-4 py-2 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:px-6 sm:py-3 sm:text-sm"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border bg-[var(--accent)] border-[var(--text)]/30 px-4 py-2 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:px-6 sm:py-3 sm:text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
         {/* Photo stays BESIDE the text on mobile */}
        <div  className=" flex pt-2 sm:pt-6 flex-col justify-self-end" >
          <div>
            <div className="flex justify-center">
              <div className="flex h-48 w-48 overflow-hidden items-center justify-center rounded-full border-2 border-[var(--accent)]  sm:h-72 sm:w-72">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--surface)]">
                  <span className="text-[10px]  sm:text-sm">
                      <img src={isDark ? dark : light} alt="Seunfunmi Photo"  className="h-full w-full scale-[1.3] rounded-full object-cover   " />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div  className=" mt-auto " >
            <span  className=" flex items-center justify-center gap-4 " >
              <a
  href="https://www.linkedin.com/in/adefietooluwaseun"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* LinkedIn */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4ZM20.44 13.42c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.86V8.5H9.4V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.28-6.58Z" />
  </svg>
</a>

<a
  href="https://x.com/seunfunmiyd"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* X */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.45 22H3.34l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.28 4.02H6.42L17.8 19.9Z" />
  </svg>
</a>

<a
  href="https://www.github.com/senadet"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* GitHub */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
</a>

<a
  href="https://www.behance.net/senadetseun"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* Behance */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.2 11.2c1.1-.5 1.7-1.4 1.7-2.6 0-2.1-1.7-3.6-4.2-3.6H1.5v14h5.8c3 0 4.8-1.6 4.8-4.1 0-1.8-1-3.1-2.9-3.7ZM4.7 7.6h1.8c1 0 1.7.5 1.7 1.4s-.7 1.4-1.7 1.4H4.7V7.6Zm2 8.4H4.7v-3.1h2c1.2 0 1.9.6 1.9 1.5 0 1-.7 1.6-1.9 1.6ZM17.8 8.8c-3.3 0-5.4 2.2-5.4 5.3s2.1 5.2 5.5 5.2c2.8 0 4.6-1.4 5.1-3.5h-3.1c-.3.7-.9 1.1-1.9 1.1-1.2 0-2-.7-2.1-1.9h7.2v-.7c0-3.2-2-5.5-5.3-5.5Zm-2 4c.2-1 .9-1.7 2-1.7s1.8.7 1.9 1.7h-3.9ZM15.2 6h5.1v1.3h-5.1V6Z" />
  </svg>
</a>


              {/* <a href=""  className=" bg-[var(--surface)] flex h-8 w-8 items-center 
                      justify-center rounded-full border-2 border-[var(--accent)]  sm:h-12 sm:w-12" >

              </a>
              <a href=""  className=" bg-[var(--surface)] flex h-8 w-8 items-center 
                      justify-center rounded-full border-2 border-[var(--accent)]  sm:h-12 sm:w-12" >

              </a>
              <a href=""  className=" bg-[var(--surface)] flex h-8 w-8 items-center 
                      justify-center rounded-full border-2 border-[var(--accent)]  sm:h-12 sm:w-12" >

              </a>
              <a href=""  className=" bg-[var(--surface)] flex h-8 w-8 items-center 
                      justify-center rounded-full border-2 border-[var(--accent)]  sm:h-12 sm:w-12" >

              </a>
              <a href=""  className=" bg-[var(--surface)] flex h-8 w-8 items-center 
                      justify-center rounded-full border-2 border-[var(--accent)]  sm:h-12 sm:w-12" >

              </a> */}
            </span>
          </div>
        </div>
      </section>
  
      
      {/* <section
        id="home"
        className="mx-auto grid min-h-[80vh] max-w-6xl grid-cols-[1.15fr_.85fr] items-center gap-4 px-6 py-16 sm:gap-8 lg:px-8"
      >
        <div>
          <p className="mb-3 text-[12px] uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm">
            Frontend Developer
          </p>

          <h1 className="text-2xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm Seunfunmi.
            <br />
            I build modern web experiences.
          </h1>

          <p className="mt-4 max-w-xl text-xs leading-5 opacity-70 sm:mt-6 sm:text-base sm:leading-7">
            I create responsive and user-friendly web applications
            using modern frontend technologies.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-4">
            <a
              href="#projects"
              className="rounded-lg border bg-[var(--accent)] border-[var(--text)]/30 px-4 py-2 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:px-6 sm:py-3 sm:text-sm"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border bg-[var(--accent)] border-[var(--text)]/30 px-4 py-2 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:px-6 sm:py-3 sm:text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

      
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-full border-2 border-[var(--accent)]  sm:h-72 sm:w-72">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--surface)]">
              <span className="text-[10px] opacity-40 sm:text-sm">
                Your Photo
              </span>
            </div>
          </div>
        </div>
      </section>    */}

    

      {/* ABOUT + TECH STACK */}
      <section
        id="about"
        className="border  border-[var(--text)]/10 bg-[var(--surface)]/40 px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl ">
          {/* About */}
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              About Me
            </p>

            <h2 className="text-xl font-bold leading-tight sm:text-4xl">
              Building useful things for the web.
            </h2>

            <p className="mt-3 text-xs leading-5 opacity-70 sm:mt-6 sm:text-base sm:leading-7">
              A frontend developer focused on creating responsive,
              fast, and accessible web applications. I enjoy
              turning ideas into interactive experiences.
            </p>

            
          </div>

          {/* Tech Stack stays BESIDE About on mobile */}
            <section id="tech-stack" className="mt-12">
  <h3 className="mb-6 text-xl font-semibold">Tech Stack</h3>

  <div className="grid grid-cols-4 gap-3 lg:grid-cols-8">

    {/* React */}
    <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
      <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  alt="React logo"
  className="h-10 w-10"
/>
      <span className="mt-3 text-sm">React</span>
    </div>

    {/* TypeScript */}
    <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
      <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  alt="TypeScript logo"
  className="h-10 w-10"
/>
      <span className="mt-3 text-sm">TypeScript</span>
    </div>

    {/* JavaScript */}
          
<div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
  <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  alt="JavaScript logo"
  className="h-10 w-10"
/>
  <span className="mt-3 text-sm">JavaScript</span>
</div>



    {/* Tailwind CSS */}
      <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
          <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  alt="Tailwind CSS logo"
  className="h-10 w-10"
/>    

  <span className="mt-3 text-sm">Tailwind</span>
</div>

    {/* TanStack Query */}
    <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
      <svg viewBox="0 0 24 24" className="h-10 w-10">
        <circle cx="12" cy="12" r="10" fill="#FF4154" />
        <path
          d="M7 7h4.5l2 3.5L15.5 7H18l-3.5 5.5L18 18h-2.5L13.5 14.5 11.5 18H9l3.5-5.5z"
          fill="white"
        />
      </svg>
      <span className="mt-3 text-sm">TanStack Query</span>
    </div>

    {/* Redux Toolkit */}
    <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
      <svg viewBox="0 0 24 24" className="h-10 w-10">
        <path
          fill="#764ABC"
          d="M17.6 13.8c-.3 0-.6.1-.9.2-1.2-1.3-2.7-2.4-4.4-3.1.1-.4.2-.8.2-1.2 0-1.5-1.2-2.7-2.7-2.7S7.1 8.2 7.1 9.7c0 1.5 1.2 2.7 2.7 2.7.5 0 1-.1 1.4-.4 1.6.7 3 1.7 4.1 2.9-.2.3-.3.7-.3 1.1 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.3-2.2-2.8-2.2ZM8.1 15.1c-.6.7-1.1 1.5-1.4 2.4-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2c0-.4-.1-.7-.3-1 1.4-2.4 3.7-4 6.3-4.5-.1-.5-.1-1-.1-1.5-2.4.4-4.5 1.3-5.8 2.6ZM18.1 7.2c-.4 0-.8.1-1.1.3-1.4-1.4-3.3-2.4-5.3-2.8-.1-.3-.2-.6-.4-.9-.6-1-1.9-1.4-2.9-.8-1 .6-1.4 1.9-.8 2.9.6 1 1.9 1.4 2.9.8.3-.2.5-.4.7-.7 1.7.4 3.2 1.2 4.4 2.4-.2.3-.3.7-.3 1.1 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2-1-2.3-1.6-2.3Z"
        />
      </svg>
      <span className="mt-3 text-sm">Redux Toolkit</span>
    </div>

    {/* CSS */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    alt="CSS3 logo"
    className="h-10 w-10"
  />
  <span className="mt-3 text-sm">CSS</span>
</div>

    {/* Git */}
    <div className="flex flex-col items-center justify-center rounded-xl bg-[var(--surface)] p-4">
      <img
  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
  alt="Git logo"
  className="h-10 w-10"
/>
      <span className="mt-3 text-sm">Git</span>
    </div>

  </div>
</section>


          {/* <div className="grid grid-cols-4 mt-4 gap-4 lg:grid-cols-8 sm:gap-8">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "TanStack Query",
              "Redux Toolkit",
              "CSS",
              "GIT",
            ].map((technology) => (
              <div
                key={technology}
                className="flex min-h-14 items-center justify-center rounded-lg border border-[var(--text)]/10 bg-[var(--surface)] p-2 text-center text-[9px] sm:min-h-24 sm:rounded-xl sm:p-4 sm:text-sm"
              >
                {technology}
              </div>
            ))}
          </div> */}
        </div>
      </section>
      

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-12">
            <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] sm:text-sm">
              What I Do
            </p>

            <h2 className="text-2xl font-bold sm:text-4xl">
              My Services
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-[var(--text)]/10 bg-[var(--surface)] p-5 sm:p-6">
              <ArrowUpRight
                size={20}
                className="mb-4 text-[var(--accent)]"
              />

              <h3 className="mb-2 text-base font-semibold sm:text-lg">
                Web Development
              </h3>

              <p className="text-xs leading-5 opacity-65 sm:text-sm sm:leading-6">
                Building responsive and modern websites and web
                applications using modern frontend technologies.
              </p>
            </article>

            <article className="rounded-xl border border-[var(--text)]/10 bg-[var(--surface)] p-5 sm:p-6">
              <ArrowUpRight
                size={20}
                className="mb-4 text-[var(--accent)]"
              />

              <h3 className="mb-2 text-base font-semibold sm:text-lg">
                Quality Assurance
              </h3>

              <p className="text-xs leading-5 opacity-65 sm:text-sm sm:leading-6">
                Ensuring digital products are reliable,
                consistent, usable, and ready for users.
              </p>
            </article>

            <article className="rounded-xl border border-[var(--text)]/10 bg-[var(--surface)] p-5 sm:p-6">
              <ArrowUpRight
                size={20}
                className="mb-4 text-[var(--accent)]"
              />

              <h3 className="mb-2 text-base font-semibold sm:text-lg">
                Software Testing
              </h3>

              <p className="text-xs leading-5 opacity-65 sm:text-sm sm:leading-6">
                Testing features and user flows to identify
                problems and improve software reliability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
            <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
  <div className="mb-8 flex items-end justify-between">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
        My Work
      </p>

      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
        Featured Projects
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 opacity-70">
        A selection of projects I have built using modern web technologies.
      </p>
    </div>

    <a
      href="/projects"
      className="hidden text-sm font-medium text-[var(--accent)] sm:block"
    >
      View All Projects →
    </a>
  </div>

  {/* Projects */}
  
  <div
  ref={projectsRef}
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
  onTouchStart={() => setIsPaused(true)}
  onTouchEnd={() => setIsPaused(false)}
  onScroll={(e) => {
    const container = e.currentTarget;
    const cardWidth = container.clientWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveProject(index);
  }}
  className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
>
    
    {/* Project 1 */}
    <article className="min-w-full h-96 snap-center overflow-hidden rounded-2xl bg-[var(--surface)] sm:min-w-0">
      <div className=" w-full  overflow-hidden bg-gradient-to-br from-[#1B2B4F] via-[#2E5D78] to-[#BA8567]"  >
        <img src={porfolio}  className="w-full h-48  block" alt="Portfolio project" />
      </div>

      <div className="px-5">
        <h3 className="text-lg text-center font-semibold h-12 pt-2">My Portfolio</h3>

        <p className=" text-sm h-24 leading-6 opacity-70">
          My Portfolio built with React and
          TypeScript.
        </p>

        <div className="mt-4  h-12 flex justify-between">
          <a href="#" className="text-sm text-[var(--accent)]">
            Live Demo
          </a>

          <a href="#" className="text-sm text-[var(--accent)]">
            GitHub
          </a>
        </div>
      </div>
    </article>

    {/* Project 2 */}
    <article className="min-w-full h-96 snap-center overflow-hidden rounded-2xl bg-[var(--surface)] sm:min-w-0">
      <div className=" w-full h-48 overflow-hidden bg-gradient-to-br from-[#1B2B4F] via-[#2E5D78] to-[#BA8567]"  >
        <img src={manage}  className="w-full h-48  block" alt="Portfolio project" />
      </div>

      <div className="px-5">
        <h3 className="text-lg h-12 pt-2 text-center font-semibold">Manage</h3>

        <p className=" h-24 text-sm leading-6 opacity-70">
          A polished frontend experience focused on usability and
          responsive design.
        </p>

        <div className="mt-4 h-12 flex justify-between">
          <a href="https://senadet.github.io/manage-project" target="blank" className="text-sm text-[var(--accent)]">
            Live Demo
          </a>

          <a href="#" className="text-sm text-[var(--accent)]">
            GitHub
          </a>
        </div>
      </div>
    </article>

    {/* Project 3 */}
    <article className="min-w-full h-96 snap-center overflow-hidden rounded-2xl bg-[var(--surface)] sm:min-w-0">
      <div className=" w-full h-48 overflow-hidden bg-gradient-to-br from-[#1B2B4F] via-[#2E5D78] to-[#BA8567]"  >
        <img src={dashboard}  className="w-full h-48  block" alt="Portfolio project" />
      </div>

      <div className="px-5">
        <h3 className="text-lg h-12 pt-2 text-center font-semibold">Social Media Dashboard</h3>

        <p className=" h-24 text-sm leading-6 opacity-70">
          An interactive application demonstrating modern React
          development.
        </p>

        <div className="mt-4 flex justify-between">
          <a href="https://theme-new.netlify.app/" target="blank" className="text-sm text-[var(--accent)]">
            Live Demo
          </a>

          <a href="#" className="text-sm text-[var(--accent)]">
            GitHub
          </a>
        </div>
      </div>
    </article>

    {/* Project 4 */}
    <article className="min-w-full h-96 snap-center overflow-hidden rounded-2xl bg-[var(--surface)] sm:min-w-0">
      <div className=" w-full  overflow-hidden bg-gradient-to-br from-[#1B2B4F] via-[#2E5D78] to-[#BA8567]"  >
        <img src={porfolio}  className="w-full h-48  block" alt="Portfolio project" />
      </div>

      <div className="px-5">
        <h3 className="text-lg text-center font-semibold h-12 pt-2">My Portfolio</h3>

        <p className=" text-sm h-24 leading-6 opacity-70">
          My Portfolio built with React and
          TypeScript.
        </p>

        <div className="mt-4  h-12 flex justify-between">
          <a href="#" className="text-sm text-[var(--accent)]">
            Live Demo
          </a>

          <a href="#" className="text-sm text-[var(--accent)]">
            GitHub
          </a>
        </div>
      </div>
    </article>
    </div>
    
  {/* Mobile dots */}

  <div className="mt-5 flex justify-center gap-2 sm:hidden">
  {[0, 1, 2, 3].map((index) => (
    <button
      key={index}
      type="button"
      onClick={() => {
        const container = projectsRef.current;
        if (!container) return;

        const card = container.children[index] as HTMLElement;

        container.scrollTo({
          left: card.offsetLeft,
          behavior: "smooth",
        
        });

        setActiveProject(index);
      }}
      className={`h-2 w-2 rounded-full transition-all ${
        activeProject === index
          ? "bg-[var(--accent)]"
          : "bg-[var(--text)] opacity-30"
      }`}
      aria-label={`Go to project ${index + 1}`}
    />
  ))}
</div>

  {/* <div className="mt-5 flex justify-center gap-2 sm:hidden">
    <button className="h-2 w-2 rounded-full bg-[var(--accent)]" />
    <button className="h-2 w-2 rounded-full bg-[var(--text)] opacity-30" />
    <button className="h-2 w-2 rounded-full bg-[var(--text)] opacity-30" />
    <button className="h-2 w-2 rounded-full bg-[var(--text)] opacity-30" />
  </div> */}

  {/* Mobile View All */}
  <div className="mt-6 text-center sm:hidden">
    <a
      href="/projects"
      className="text-sm font-medium text-[var(--accent)]"
    >
      View All Projects →
    </a>
  </div>
</section>

<section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
      Contact
    </p>

    <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
      Let's Work Together
    </h2>

    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 opacity-70">
      Have a project in mind or want to work together? Feel free to reach out.
    </p>
  </div>

  {/* Contact options */}
  <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">

    {/* Email */}
    <a
      href="mailto:senadet@gmail.com"
      className="flex flex-col items-center justify-center rounded-2xl bg-[var(--surface)] p-6 transition-transform hover:-translate-y-1"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>

      <span className="mt-3 text-sm font-medium">Email</span>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/+2348132217514"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center rounded-2xl bg-[var(--surface)] p-6 transition-transform hover:-translate-y-1"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[var(--accent)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.3-.4.6-.4.9-.1l1 1.2c.2.3.2.5 0 .8l-.4.5c.7 1.3 1.7 2.3 3 3l.5-.4c.3-.2.5-.2.8 0l1.2 1c.3.3.3.6-.1.9-.5.5-1.2.7-1.9.5-2.4-.7-5.1-3.4-5.8-5.8-.2-.7 0-1.4.8-1.6Z" />
      </svg>

      <span className="mt-3 text-sm font-medium">WhatsApp</span>
    </a>

    {/* X */}
    <a
      href="https://x.com/seunfunmiyd"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center rounded-2xl bg-[var(--surface)] p-6 transition-transform hover:-translate-y-1"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[var(--accent)]"
        fill="currentColor"
      >
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.2-8.2L2.8 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" />
      </svg>

      <span className="mt-3 text-sm font-medium">X</span>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/adefietooluwaseun"
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center rounded-2xl bg-[var(--surface)] p-6 transition-transform hover:-translate-y-1"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-[var(--accent)]"
        fill="currentColor"
      >
        <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.3h3.8V21H3.3V9.3Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3.8v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.5V9.3Z" />
      </svg>

      <span className="mt-3 text-sm font-medium">LinkedIn</span>
    </a>

  </div>

  {/* Availability */}
  
</section>

     

      {/* FOOTER */}
      <footer className="border-t border-[var(--text)]/10 bg-[var(--surface)] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Seun" className="h-8 w-8" />

            <div>
              <p className="text-sm font-semibold">Seun</p>
              <p className="text-xs opacity-50">
                Frontend Developer
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-sm ">
             <span  className=" flex items-center justify-center gap-4 " >
              <a
  href="https://www.linkedin.com/in/adefietooluwaseun"
  target="blank"
  
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* LinkedIn */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4ZM20.44 13.42c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.86V8.5H9.4V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.84 0 1.86 1.72 1.86 3.05V20h3.38l.28-6.58Z" />
  </svg>
</a>

<a
  href="https://x.com/seunfunmiyd"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* X */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.41L6.45 22H3.34l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.28 4.02H6.42L17.8 19.9Z" />
  </svg>
</a>

<a
  href="https://www.github.com/senadet"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* GitHub */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
  </svg>
</a>

<a
  href="https://www.behance.net/senadetseun"
  target="blank"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] border-[var(--text)]/30 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--surface)] sm:h-12 sm:w-12"
>
  {/* Behance */}
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.2 11.2c1.1-.5 1.7-1.4 1.7-2.6 0-2.1-1.7-3.6-4.2-3.6H1.5v14h5.8c3 0 4.8-1.6 4.8-4.1 0-1.8-1-3.1-2.9-3.7ZM4.7 7.6h1.8c1 0 1.7.5 1.7 1.4s-.7 1.4-1.7 1.4H4.7V7.6Zm2 8.4H4.7v-3.1h2c1.2 0 1.9.6 1.9 1.5 0 1-.7 1.6-1.9 1.6ZM17.8 8.8c-3.3 0-5.4 2.2-5.4 5.3s2.1 5.2 5.5 5.2c2.8 0 4.6-1.4 5.1-3.5h-3.1c-.3.7-.9 1.1-1.9 1.1-1.2 0-2-.7-2.1-1.9h7.2v-.7c0-3.2-2-5.5-5.3-5.5Zm-2 4c.2-1 .9-1.7 2-1.7s1.8.7 1.9 1.7h-3.9ZM15.2 6h5.1v1.3h-5.1V6Z" />
  </svg>
</a>
</span>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-6xl border-t border-[var(--text)]/10 pt-5 text-center">
          <p className="text-xs opacity-50">
            © 2026 Seun. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;