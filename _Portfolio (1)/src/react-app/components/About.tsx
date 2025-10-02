const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D03AQEVnOerjQZwsA/profile-displayphoto-shrink_200_200/B4DZYZn4JcHsAY-/0/1744186608362?e=1761782400&v=beta&t=sI9APrr3UQbqYBA2QpRVTtzGRc_GrEvIJOXcHZvYWXs" 
            alt="Banele Mkefa - Full Stack Developer" 
            className="rounded-md shadow-lg w-full"
          />
        </div>
        <div>
          <h2 className="section-title">About Me</h2>
          <p className="mb-6 [text-wrap:balance]">
            I'm passionate about developing applications and building applications that would have an impact in people's lives and make their lives better. My journey began in June 2024 when I enrolled into a prestigious coding bootcamp when I discovered my love for developing application and had meaningful experiences through coding various projects.
          </p>
          <p className="mb-6 [text-wrap:balance]">
            After months of dedicated practice and continuous learning, I've refined my skills to deliver work that not only meets but exceeds expectations. I believe that application should be easily scalable and functional.
          </p>
          <p className="mb-8 [text-wrap:balance]">
            I'm continuously learning new tools, programs, software application ranging from programming languages, cloud application, AI automation tools and finding inspiration in the world around me.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <ul className="space-y-2">
                <li>HTML & CSS</li>
                <li>React & JavaScript</li>
                <li>Node.js & MongoDB</li>
                <li>MySQL & Excel</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certifications</h3>
              <ul className="space-y-2">
                <li>Software Engineering</li>
                <li>Azure Administrator</li>
                <li>AWS Cloud Solutions</li>
                <li>Full Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
