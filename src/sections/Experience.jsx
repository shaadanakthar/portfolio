import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -50,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Academic Education &amp; Foundations"
          sub="🎓 UNDERGRADUATE TIMELINE"
        />

        <div className="mt-20 relative">
          <div className="relative z-50 xl:space-y-24 space-y-10">
            {educationCards.map((card) => (
              <div key={card.institution} className="exp-card-wrapper timeline-card">
                
                {/* Glow Card Statement */}
                <div className="xl:w-2/5">
                  <div className="card-border rounded-2xl p-6 bg-black-100/90 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-blue-400 font-semibold">
                          PERSONAL STATEMENT
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          Verified
                        </span>
                      </div>
                      <blockquote className="text-white-50 text-sm leading-relaxed italic">
                        {card.quote}
                      </blockquote>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white-50/70">
                      <span>{card.location}</span>
                      <span>3rd-Year Student</span>
                    </div>
                  </div>
                </div>

                {/* Timeline & Details */}
                <div className="xl:w-3/5">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex flex-col gap-4 relative z-20 pl-4 md:pl-8">
                      <div>
                        <span className="text-xs font-mono uppercase text-blue-400">
                          {card.date}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">
                          {card.degree}
                        </h3>
                        <p className="text-lg text-white-50 font-medium">
                          {card.institution}
                        </p>
                        <p className="text-xs font-mono text-white-50/70 mt-1">
                          📍 {card.location}
                        </p>
                      </div>

                      <div className="space-y-2 mt-4">
                        <h4 className="text-xs font-mono uppercase text-white font-semibold">
                          Core Academic &amp; Engineering Focus:
                        </h4>
                        <ul className="space-y-2">
                          {card.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="text-sm text-white-50 flex items-start gap-2"
                            >
                              <span className="text-blue-400 font-bold">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
