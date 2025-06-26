
export default function Experience() {
    const experiences = [
        {
            id: 0,
            title: "Opensource Software Engineer",
            company: "Ebb.cool",
            location: "Salt Lake City, USA | Remote",
            period: "2025 - Present",
            description: "Developed and maintained the Ebb.cool desktop app using Rust, Supabase, AWS, React, Typescript, Tailwind CSS, Tauri, Postgresql, and SQLite. Also, I'm responsible for the customer support and the sales process."
        },
        {
            id: 1,
            title: "CTO & Cofounder",
            company: "SkyRocket",
            location: "Remote",
            period: "2024 - Present",
            description: "Developed and maintained web applications using Ruby on Rails and Stimulus. Implemented RESTful APIs and improved application performance."
        },
        {
            id: 2,
            title: "Ruby on Rails Full Stack Engineer",
            company: "codecandy.io",
            location: "Madrid, Spain",
            period: "2022 - 2024",
            description: "Created responsive user interfaces using different stacks based on Ruby on Rails. Collaborated with UX designers to implement visually appealing web applications."
        },
        {
            id: 3,
            title: "Software Sales Representative and Customer Success",
            company: "Bark.com",
            location: "London, UK",
            period: "2023",
            description: "Assisted in the sales process and provided customer support to the clients for the Bark.com product."
        },
        {
            id: 4,
            title: "Cofounder & CEO",
            company: "Pre's Social",
            location: "Canterbury, UK",
            period: "2021 - 2022",
            description: "Developed product for a geosocial network for university students. Helped with all business development, marketing and the sales process."
        }
    ];

    return(
        <section id="experience" className="py-4 px-4 lg:py-10 lg:px-20" data-controller="experience-animation">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#c9d1d9] transform transition-all duration-700 ease-out"
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
                                <p className="text-[#8b949e]">{exp.company} | {exp.location} | {exp.period}</p>
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