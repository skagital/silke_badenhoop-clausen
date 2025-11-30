import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Home: React.FC = () => {
  // Use the first two projects for the teaser section as requested
  const teaserProjects = projects.slice(0, 2);

  return (
    <div className="w-full animate-fade-in">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/architecture/1920/1080" 
            alt="Hero Architecture" 
            className="w-full h-full object-cover opacity-90 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-warm-grey/30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 pt-24 md:pt-0">
            <div className="bg-warm-grey/95 backdrop-blur-md p-8 md:p-16 max-w-4xl shadow-sm">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin leading-[1.1] mb-8 text-soft-black">
                  Urbane Architektur ist mehr als Bauen. Sie schafft Gemeinschaft.
                </h1>
                <p className="text-lg md:text-2xl font-light text-soft-black/80 max-w-2xl leading-relaxed">
                  Wir gestalten Räume, die Menschen verbinden. Nachhaltig, sozial und mit tiefem Respekt vor dem Bestand.
                </p>
            </div>
        </div>
      </section>

      {/* Introduction Spacer */}
      <section className="py-24 md:py-40 max-w-4xl mx-auto px-6 text-center">
        <p className="text-earth-brown text-sm font-bold tracking-[0.2em] uppercase mb-6">Philosophie</p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight">
          Architektur mit dem <span className="italic font-normal">Kümmerer-Gen</span>. Wir bauen für die Zukunft, ohne die Vergangenheit zu vergessen.
        </h2>
      </section>

      {/* Projects Teaser */}
      <section id="projekte" className="max-w-[1920px] mx-auto px-6 md:px-12 pb-24">
        <div className="flex justify-between items-end mb-16 md:mb-24">
            <h3 className="text-2xl md:text-4xl font-light">Ausgewählte Arbeiten</h3>
            <span className="hidden md:inline-block text-sm uppercase tracking-widest text-earth-brown">Portfolio 2024</span>
        </div>

        <div className="space-y-32 md:space-y-48">
          {teaserProjects.map((project, index) => (
            <div key={project.id} className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image */}
              <div className="w-full md:w-3/5 aspect-[4/3] overflow-hidden bg-gray-200 group cursor-pointer">
                <Link to={`/project/${project.id}`}>
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </Link>
              </div>

              {/* Text */}
              <div className="w-full md:w-2/5 flex flex-col justify-center items-start">
                <span className="text-earth-brown text-xs font-bold tracking-widest uppercase mb-4">
                  {project.category} — {project.year}
                </span>
                <h3 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                    <Link to={`/project/${project.id}`} className="hover:underline decoration-earth-brown underline-offset-8 decoration-1">
                        {project.title}
                    </Link>
                </h3>
                <p className="text-lg font-light text-soft-black/70 mb-8 line-clamp-3">
                  {project.description}
                </p>
                <Link 
                  to={`/project/${project.id}`}
                  className="group flex items-center text-sm uppercase tracking-widest hover:text-earth-brown transition-colors"
                >
                  Projekt ansehen
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-32 text-center">
            <button className="px-8 py-4 border border-soft-black/20 hover:border-earth-brown hover:text-earth-brown transition-colors text-sm tracking-widest uppercase">
                Alle Projekte ansehen
            </button>
        </div>
      </section>

    </div>
  );
};

export default Home;