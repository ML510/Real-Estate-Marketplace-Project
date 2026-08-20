import Link from "next/link";

interface NavbarProps {
    variant?: "transparent" | "solid"
}

const navLinks = ["Home", "Properties", "MarketPlace"]

function NavBar({ variant = "transparent" }: NavbarProps) {

    const isTransparent = variant === "transparent"

    return (
        <section className={`top-0 left-0 z-50 w-full ${isTransparent ? "absolute" : "sticky border-b border-black/5 bg-card"}`}>
            <div className="mx-auto max-w-7x1 px-6 1g:px-12">
                <nav className={`flex h-20 items-center justify-between
                ${isTransparent ? "mt-6 rounded-3xl border border-white/10 bg-white/5 px-6 backdrop-blur-2xl" : "px-0"} 
                `}>
                    {/* logo */}
                    <Link href="/" className="flex items-center text-2x1 font-semibold">
                        <span className={isTransparent ? "text-gray-300" : "text-text"}>
                            Next
                        </span>
                        <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-b1-2x1">
                            Estate
                        </span>
                    </Link>

                    {/* desktop links */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <Link key={item} href={item === "Home" ? "/" : `${item.toLowerCase()}`} className={`text-sm font-medium transition hover:text-primary ${isTransparent ? "text-white/80" : "text-text/70"}`}>
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* desktop buttons */}
                    <div className="hidden lg:flex items-center gap-4">

                        
                    </div>

                </nav>

            </div>

        </section>
    )
}

export default NavBar