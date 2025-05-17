import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return(
    <section className="py-20 text-center relative overflow-hidden" data-controller="hero-animation">
    {/* Background effects */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#238636] opacity-2 filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-[#0d1117] to-transparent"></div>
        </div>

        <div className="relative z-10">
            {/* Profile Image - No animation classNamees */}
            <div className="mb-8">
            <Image src="/luis-headshot.jpeg" width={200} height={200} alt="Luis Kerch" className="rounded-full mx-auto border-4 border-[#58a6ff] shadow-lg w-[200px] h-[200px] object-cover" />
            </div>

            {/* Name - Keep animation */}
            <h1 className="text-4xl font-bold mb-4 text-[#c9d1d9]  -translate-y-4 transition-all duration-700 ease-out"
                data-hero-animation-target="name">
            Luis Kerch
            </h1>

            {/* Title - Keep animation */}
            <h2 className="text-2xl text-[#58a6ff] mb-6  -translate-y-4 transition-all duration-700 ease-out"
                data-hero-animation-target="title">
            Full Stack Ruby on Rails Developer
            </h2>

            {/* Description - Keep animation */}
            <p className="max-w-2xl mx-auto mb-8 text-[#8b949e]  -translate-y-4 transition-all duration-700 ease-out"
            data-hero-animation-target="description">
            Passionate about building scalable web applications with Ruby on Rails, Python, and modern frontend technologies, enhanced by AI integration.
            </p>

            {/* Button - Keep animation */}
            <div className=" -translate-y-4 transition-all duration-700 ease-out"
                data-hero-animation-target="button">
            <Link href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300">
                View My Work
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </Link>
            </div>
        </div>
    </section>
    )
}