import ProjectCard from '@/react-app/components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Scent Blowing Application',
    category: 'Frontend & Backend Development',
    image: 'https://mocha-cdn.com/01995be5-90fa-71b8-abfd-4fde9be4cd86/cologne-store.jpg',
    description: 'A scent blowing Application that blows scent of different colognes through the phone speakers.(on going project)',
    link: 'https://scent-breeze.netlify.app/',
  },
  {
    id: 2,
    title: 'Melsoft landing page',
    category: 'Frontend Development',
    image: 'https://mocha-cdn.com/01995be5-90fa-71b8-abfd-4fde9be4cd86/melsoft-landing.jpg',
    description: 'A dynamic Website Design for a modern business platform.',
    link: 'https://melsoftlandingcapstone.netlify.app/',
  },
  {
    id: 3,
    title: 'Recipe Book Web-App',
    category: 'React Web-App Design',
    image: 'https://mocha-cdn.com/01995be5-90fa-71b8-abfd-4fde9be4cd86/recipe-book-app.jpg',
    description: 'A dynamic Recipe Book Web-App utilizing React Native and Tailwind CSS for styling.',
    link: 'https://buddiesapp.netlify.app/',
  },
  {
    id: 4,
    title: 'Ticket Booking Website',
    category: 'Frontend Development(HTML, CSS, JAVASCRIPT)',
    image: 'https://mocha-cdn.com/01995be5-90fa-71b8-abfd-4fde9be4cd86/ticket-booking-landing.jpg',
    description: 'A Ticket Booking website where users buy tickets for an event they will be attending',
    link: 'https://ticket-master-086110.netlify.app/',
  },
  {
    id: 5,
    title: 'Lejwelda Organization Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80',
    description: 'Professional organization website featuring modern design and comprehensive business solutions.',
    link: 'https://www.lejwelda.org.za/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="text-center mb-12">
        <h2 className="section-title">My Projects</h2>
        <p className="max-w-3xl mx-auto text-lg [text-wrap:balance]">
          A selection of my recent work showcasing my skills and creative approach. Each project represents a unique challenge and solution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
