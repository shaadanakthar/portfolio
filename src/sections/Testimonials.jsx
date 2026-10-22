import { specializationsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Specializations = () => {
  return (
    <section id="specializations" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="Areas of Interest &amp; Exploration"
          sub="⚡ TECHNICAL FOCUS &amp; DOMAINS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {specializationsList.map((item, index) => (
            <GlowCard card={item} key={item.title} index={index}>
              <div className="flex flex-col gap-3 p-2">
                <div className="flex items-center justify-between">
                  <div className="size-10 rounded-full bg-black-200 border border-white/10 flex items-center justify-center p-2">
                    <img src={`/images/${item.icon}`} alt={item.title} className="w-5 h-5 object-contain" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    DOM_0{index + 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-xs font-mono text-blue-300 mt-0.5">{item.subtitle}</p>
                </div>
                <p className="text-sm text-white-50 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
