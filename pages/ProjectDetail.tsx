import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Split images into hero (first) and gallery (rest)
  const [heroImage, ...galleryImages] = project.images;

  return (
    <div className="w-full animate-fade-in bg-warm-grey min-h-screen">
      
      {/* Navigation Back */}
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-8">
        <Link to="/" className="inline-flex items-center text-sm uppercase tracking-widest text-soft-black/60 hover:text-earth-brown transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Zurück zur Übersicht
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img 
            src={heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Title Section */}
        <div className="py-16 md:py-24 border-b border-soft-black/10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-earth-brown font-light">{project.subtitle}</p>
        </div>

        {/* Info Split */}
        <div className="flex flex-col lg:flex-row py-16 md:py-24 gap-12 lg:gap-24">
            
            {/* Left: Hard Facts Table */}
            <div className="w-full lg:w-1/3">
                <table className="w-full text-left border-collapse">
                    <tbody className="divide-y divide-soft-black/10 text-sm md:text-base font-light">
                        <tr>
                            <td className="py-4 font-medium text-soft-black/50 w-1/3">Standort</td>
                            <td className="py-4">{project.location}</td>
                        </tr>
                        <tr>
                            <td className="py-4 font-medium text-soft-black/50">Jahr</td>
                            <td className="py-4">{project.year}</td>
                        </tr>
                        <tr>
                            <td className="py-4 font-medium text-soft-black/50">Kategorie</td>
                            <td className="py-4">{project.category}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Right: Description */}
            <div className="w-full lg:w-2/3">
                <p className="text-lg md:text-2xl leading-relaxed font-light text-soft-black/90">
                    {project.description}
                </p>
                <div className="mt-12 p-8 bg-white/50 border-l-2 border-earth-brown">
                    <p className="italic font-serif text-lg text-soft-black/70">
                        „Ein Projekt, das beweist: {project.category === 'Sanierung' ? 'Bestand ist wertvoll.' : 'Gute Architektur dient dem Menschen.'}“
                    </p>
                </div>
            </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pb-24 md:pb-48">
            {galleryImages.map((img, index) => (
                <div key={index} className={`aspect-[4/3] w-full overflow-hidden ${index % 3 === 0 ? 'md:col-span-2 aspect-[2/1]' : ''}`}>
                    <img 
                        src={img} 
                        alt={`${project.title} impression ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;