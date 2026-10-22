import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words, personalInfo } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none opacity-40">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-6">
            
            {/* Live Status Badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black-200 border border-white/10 w-fit text-xs font-mono text-white-50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{personalInfo.specialization}</span>
            </div>

            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Through Intelligent Code</h1>
              <h1>&amp; Real Applications</h1>
            </div>

            <p className="text-white-50 md:text-lg max-w-xl leading-relaxed relative z-10">
              Hi, I’m <span className="text-white font-semibold">{personalInfo.name}</span>, an Artificial Intelligence engineering student at AJIET Mangaluru. Focused on machine learning, computer vision, generative AI, and full-stack software development.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                text="Explore My Projects"
                className="md:w-64 md:h-14 w-52 h-12"
                id="work"
              />
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-black-200 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-white-50/70 pt-2">
              <span>📍 {personalInfo.location}</span>
              <span>•</span>
              <span>🎓 3rd-Year B.E. Artificial Intelligence</span>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Room Experience */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
