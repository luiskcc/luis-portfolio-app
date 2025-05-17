export default function Education() {
    const educations = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            period: "2013 - 2017",
            description: "Focused on software development, database management, and web technologies. Graduated with honors."
        },
        {
            id: 2,
            degree: "Full Stack Web Development Bootcamp",
            school: "Tech Academy",
            period: "2018",
            description: "Intensive program covering modern web development technologies including JavaScript, React, and Ruby on Rails."
        },
        {
            id: 3,
            degree: "Master's in Software Engineering",
            school: "Advanced Institute of Technology",
            period: "2019 - 2021",
            description: "Specialized in software architecture, advanced algorithms, and project management methodologies."
        }
    ];

    return(
        <section id="education" className="py-10" data-controller="education-animation">
            <h2 className="text-3xl font-bold mb-24 text-center text-[#c9d1d9] translate-y-12"
                data-education-animation-target="title">
                Education
            </h2>

            <div className="space-y-8 max-w-4xl mx-auto px-4">
                {educations.map((edu, index) => (
                    <div key={edu.id} 
                        className="transform transition-all duration-700 ease-out"
                        data-education-animation-target="card"
                        data-index={index}>
                        <div className="bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff] transition-colors duration-300 h-full flex flex-col justify-center rounded-lg p-6">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-[#c9d1d9]">{edu.degree}</h3>
                                <p className="text-[#8b949e]">{edu.school} | {edu.period}</p>
                            </div>
                            <div>
                                <p className="text-[#c9d1d9]">{edu.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}