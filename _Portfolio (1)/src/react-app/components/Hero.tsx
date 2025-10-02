const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80" 
          alt="Lines of code in IDE" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent"></div>
      </div>

      <div className="section relative z-10">
        <div className="max-w-3xl fade-in-up">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 [text-wrap:balance]">
            Building amazing projects 1 line of code at the time!
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl [text-wrap:balance]">
            Experienced Full Stack Developer with history of working in the Information Technology industry. Expertise in HTML, CSS, React, JavaScript, Microsoft Excel, Node JS, Mongo DB, MySQL and Nice page. A certified Software Engineering from a prestigious boot camp. Certified Azure Administrator and a AWS Cloud Solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
