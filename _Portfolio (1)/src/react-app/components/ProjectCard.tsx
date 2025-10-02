import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>
      
      <div className={`absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end text-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-sm font-medium text-white/80 mb-2">{project.category}</span>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-white/90">{project.description}</p>
        {project.link ? (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 self-start px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors inline-block"
          >
            View Project
          </a>
        ) : (
          <button className="mt-4 self-start px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-colors">
            View Project
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
