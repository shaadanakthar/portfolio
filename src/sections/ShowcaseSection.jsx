import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { projectsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase section-padding">
      <div className="w-full max-w-7xl mx-auto">
        
        <TitleHeader
          title="Featured Projects"
          sub="APPLIED AI & FULL-STACK PROTOTYPES"
        />

        <p className="text-white-50 text-sm md:text-base max-w-2xl mb-12">
          Hands-on applications across full-stack systems, computer vision pipelines, and generative AI integrations. All statuses strictly verified.
        </p>

        {/* 2x2 Grid of Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={project.id}
              className="project-card rounded-3xl bg-black-100 border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
            >
              {/* Visual Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-black-200/50 flex items-center justify-center p-6">
                <img
                  src={project.imgPath}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black-200/90 text-white border border-white/10">
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-mono text-blue-400 font-bold">
                    PROJ_0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-white-50/80 mb-4">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-white-50 leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Scope Boundary Notice */}
                  {project.limitation && (
                    <div className="p-3 rounded-xl bg-black-200/70 border border-white/5 text-xs font-mono text-white-50/80 mb-6">
                      <span className="text-amber-400 font-semibold mr-1">Scope Note:</span>
                      {project.limitation}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-blue-400 transition-colors"
                  >
                    <span>View on GitHub</span>
                    <span>&rarr;</span>
                  </a>
                  <span className="text-xs font-mono text-white-50/60">
                    Factual Model
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AppShowcase;
