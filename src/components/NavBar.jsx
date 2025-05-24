import {useState} from "react";
import {X, Menu} from "lucide-react";
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Tools", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    return <nav className="fixed w-full z-40 transition-all duration-300">
        <div className ="container flex items-center justify-between">
            <a className="text-4xl font-bold text-primary flex item-center">
                <span className="relative z-10"> <span className="text-glow">Cool</span> Calendar</span>
            </a>

            {/*desktop nav*/}
            <div className= "hidden md:flex space-x-10">
                {navItems.map((item, key) => (
                    <a key = {key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300">{item.name}</a>
                ))}
            </div>

            {/* mobile nav */}
            <button className = "md:hidden p-2 z-50" onClick = {() => setisMenuOpen((prev) => !prev)}>{isMenuOpen ? <X size={24} /> : <Menu size = {24} />}</button>

            <div className = {`${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden`}>
            <div className= "flex flex-col space-y-10">
                {navItems.map((item, key) => (
                    <a key = {key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300" onClick={() => setisMenuOpen(false)}>{item.name}</a>
                ))}
                </div>
            </div>
        </div>

    </nav>
};