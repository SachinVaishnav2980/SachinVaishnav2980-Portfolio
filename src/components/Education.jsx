import React from "react";

const Education = () => {
  const educationData = [
    {
      year: "2023 - 2027",
      title: "Bachelor of Technology",
      institution: "GL Bajaj Institute of Technology and Management",
      details: "Computer Science-Ai/Ml Engineering | Current CGPA: 8.44/10",
    },
    {
      year: "2019 - 2022",
      title: "Intermediate (10+2)",
      institution: "Bakshi's Springdales Sr. Sec. School Kota",
      details: "12th Grade: 88% | 10th Grade: 91%",
    },
  ];

  return (
    <section id="education" className="py-16 px-6 bg-background text-foreground">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">
          Education & Certifications
        </h2>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative bg-card p-6 rounded-xl card-hover gradient-border"
            >
              {/* Left Line */}
              <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-l-xl"></span>

              <div className="pl-4">
                <p className="text-primary font-semibold mb-2">{edu.year}</p>
                <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-foreground">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
