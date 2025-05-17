import Link from "next/link";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Full Stack Developer",
            company: "Tech Solutions Inc",
            period: "2021 - Present",
            description: "Developed and maintained web applications using Ruby on Rails and React. Implemented RESTful APIs and improved application performance."
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Digital Innovations",
            period: "2019 - 2021",
            description: "Created responsive user interfaces using React and Next.js. Collaborated with UX designers to implement visually appealing web applications."
        },
        {
            id: 3,
            title: "Junior Web Developer",
            company: "WebTech Studio",
            period: "2017 - 2019",
            description: "Assisted in developing and deploying web applications. Gained experience in HTML, CSS, JavaScript, and Ruby on Rails."
        }
    ];

    return(
        <section id="experience" className="pt-30 pb-10" data-controller="experience-animation">
            <h2 className="text-3xl font-bold mb-16 text-center text-[#c9d1d9] transform transition-all duration-700 ease-out"
                data-experience-animation-target="title">
                Experience
            </h2>

            <div className="space-y-8 max-w-4xl mx-auto px-4">
                {experiences.map((exp, index) => (
                    <div key={exp.id} 
                        className="transform transition-all duration-700 ease-out"
                        data-experience-animation-target="card"
                        data-index={index}>
                        <div className="bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-colors duration-300 h-full flex flex-col justify-center rounded-lg p-6">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-[#c9d1d9]">{exp.title}</h3>
                                <p className="text-[#8b949e]">{exp.company} | {exp.period}</p>
                            </div>
                            <div className="flex-grow">
                                <p className="text-[#c9d1d9]">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}