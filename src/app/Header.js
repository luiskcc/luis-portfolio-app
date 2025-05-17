import Link from "next/link";

export default function Header() {

    return(
        <header className="py-6 px-10 backdrop-blur sticky top-0 z-40 w-full border-b border-border">
            <div className="container mx-auto flex justify-between lg:items-center">
                <Link href="/" className="text-2xl font-bold text-foreground">
                Luis Kerch
                </Link>
                <nav className="space-x-4">
                    <div className="flex flex-col justify-center items-center lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                            <Link href="#projects" className="text-lg hover:text-blue-300 transition-colors duration-300 text-foreground">
                            Projects
                            </Link>
                            <Link href="#experience" className="text-lg hover:text-blue-300 transition-colors duration-300 text-foreground">
                            Experience
                            </Link>
                            <Link href="#education" className="text-lg hover:text-blue-300 transition-colors duration-300 text-foreground">
                            Education
                            </Link>
                            <Link href="#footer" className="text-lg hover:text-blue-300 transition-colors duration-300 text-foreground">
                            Contact
                            </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}