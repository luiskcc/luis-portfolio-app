import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Reputation Management System",
            description: "A system to manage the reputation of businesses based on their reviews, ratings and Google Rankings.",
            imageUrl: "/project1.jpg",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku", "OpenAI", "Google Maps API", "Google Places API", "Google Search API", "Google Places API", "Google Search API"],
            liveUrl: "https://skyrocketreviews.co.uk/",
            githubUrl: "https://github.com/luiskcc/reputation-management-system"
        },
        {
            id: 2,
            title: "Airbnb Host Dashboard App",
            description: "A dashboard app for Airbnb hosts to manage their listings, bookings and reviews.",
            imageUrl: "/project1.jpg",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku", "OpenAI", "Google Maps API", "Google Places API", "Google Search API", "Google Places API", "Google Search API"],
            liveUrl: "https://airbnb-host-dashboard.herokuapp.com/",
            githubUrl: "https://github.com/luiskcc/reputation-management-system"
        },
        {
            id: 3,
            title: "Meal Master Chatbot",
            description: "A chatbot that uses AI multimodal analysis to scan images and calculate food macronutrients and calories.",
            imageUrl: "/project2.jpg",
            technologies: ["Python", "OpenAI API", "Streamlit", "Heroku", "Telegram API"],
            liveUrl: "https://mealmaster.co.uk/",
            githubUrl: "https://github.com/username/project2"
        },
        {
            id: 4,
            title: "Autoresponse System",
            description: "A software that helps Google Business Profile owners automate their responses in the most efficient way.",
            imageUrl: "/autoresponse-app.png",
            technologies: ["Python", "Pipedream", "Google Business Profile API", "Groq API", "Google Maps API", "Google Places API"],
            githubUrl: "https://github.com/username/project3"
        },
        {
            id: 5,
            title: "Ad Boat Rental Wordpress Website",
            description: "A website for a boat rental company that allows users to rent boats and manage their bookings.",
            imageUrl: "/project3.jpg",
            technologies: ["Wordpress", "Elementor", "Google Maps API", "Google Ads", "Google Tags", "Ionos Server", "SMTP", "Google Analytics"],
            githubUrl: "https://github.com/username/project3"
        },
        {
            id: 6,
            title: "Multiple Websites",
            description: "Multiple sites",
            imageUrl: "/project3.jpg",
            technologies: ["Next.js", "Tailwind CSS", "Shadcn UI", "Vercel", "Contentful", "Stripe API", "PayPal", "Google Analytics"],
            liveUrl: "https://project3.com",
            githubUrl: "https://github.com/username/project3"
        },
        {
            id: 7,
            title: "International Phone Call System",
            description: "In browser app that allows users to make International calls, log calls and manage their call history and attributes.",
            imageUrl: "/project3.jpg",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku", "Twilio API"],
            liveUrl: "https://project3.com",
            githubUrl: "https://github.com/username/project3"
        },
        {
            id: 8,
            title: "Predrinks app",
            description: "A native IOS and Android geosocial app for students that allows them to share their location with friends and family and create events.",
            imageUrl: "/project3.jpg",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku", "Ionic", "Angular.js", "Google Maps API"],
            liveUrl: "https://project3.com",
            githubUrl: "https://github.com/username/project3"
        },
        {
            id: 9,
            title: "QR code event management system",
            description: "A system to manage QR code tickets for events and track attendance.",
            imageUrl: "/project3.jpg",
            technologies: ["Ruby on Rails", "PostgreSQL", "Heroku", "QR Code API", "Stripe API", "PayPal", "Google Analytics"],
            liveUrl: "https://project3.com",
            githubUrl: "https://github.com/username/project3"
        }
    ];

    return(
        <section id="projects" className="py-10" data-controller="projects-animation">
            <h2 className="text-3xl font-bold mb-20 text-center text-[#c9d1d9] translate-y-12"
                data-projects-animation-target="title">
                Projects
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <div key={project.id} className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden group p-6 border border-[#30363d] hover:border-[#58a6ff] transition-all duration-700 ease-in-out">
                        <div className="relative overflow-hidden">
                            {project.imageUrl ? (
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                                    No image available
                                </div>
                            )}
                            <div className="bg-opacity-0 lg:absolute lg:inset-0 lg:bg-[#161b22] lg:group-hover:bg-transparent lg:transition-all lg:duration-700 lg:ease-in-out">
                                {/* Stars background would go here */}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#c9d1d9] mb-2">{project.title}</h3>
                            <p className="text-[#8b949e] mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-2 py-1 text-sm bg-[#21262d] text-[#c9d1d9] rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <a href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] border border-[#30363d] rounded-md transition-colors duration-300">
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Live Demo
                                </a>

                                <a href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] border border-[#30363d] rounded-md transition-colors duration-300">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}