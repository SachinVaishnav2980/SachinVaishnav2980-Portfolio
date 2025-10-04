// import { ChartGanttIcon } from "lucide-react";
// import { useState } from "react";
// import {cn} from "../lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
// //   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
// //   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
// //   { name: "PostgreSQL", level: 65, category: "backend" },
// //   { name: "GraphQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
// //   { name: "Docker", level: 70, category: "tools" },
// //   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories=["all", "frontend", "backend", "tools"];

// export const SkillSection =()=>{

//     const [activeCategory, setActiveCategory]=useState("all");

//     const filteredSkills = skills.filter(
//         (skill)=>activeCategory==="all" || skill.category === activeCategory
//     );

//     return <section id="skills"
//     className="py-24 px-4 relative bg-secondary/30"
//     >
//         <div className="container mx-auto max-w-5xl">

//             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//                 My <span className="text-primary"> Skills</span>
//             </h2>

//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//                 {categories.map((category, key)=>(
//                     <button key={key} 
//                     onClick={()=> setActiveCategory(category)}
//                     className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                         activeCategory===category 
//                         ? "bg-primary text-primary-foreground"
//                         :"bg-secondary/70 text-foreground hover:bd-secondary"
//                     )}
//                     >
//                     {category}
//                     </button>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//                 {filteredSkills.map((skill, key)=>(

//                     <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

//                         <div className="text-left mb-4">
//                             <h3 className="font-semibold text-lg">{skill.name}</h3>
//                         </div>

//                         <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">

//                             <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width:skill.level + "%" }}
//                             />

//                         </div>

//                         <div className="text-right mt-1">

//                             <span className="text-sm text-muted-foreground">
//                                 {skill.level}%</span>

//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
// }

import { useState } from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "../lib/utils";

/* kept your original skill objects (levels are still present but unused) */
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "Globe" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "Code" },
  { name: "React", level: 90, category: "frontend", icon: "React" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "Feather" },

  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "Server" },
  { name: "Express", level: 75, category: "backend", icon: "Package" },
  { name: "MongoDB", level: 70, category: "backend", icon: "Database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: "GitBranch" },
  { name: "VS Code", level: 95, category: "tools", icon: "Terminal" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = LucideIcons[skill.icon]; // safely pick icon by name
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/60 text-primary">
                    {Icon ? (
                      <Icon className="w-5 h-5" />
                    ) : (
                      /* fallback so app doesn't crash if icon name is wrong */
                      <span className="w-3 h-3 rounded-full bg-primary/70 block" />
                    )}
                  </span>

                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                {/* If you want small pills inside the card (like the screenshot), you can populate them here.
                    For now I kept a simple layout to match your request (icon + name, no percentage). */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

