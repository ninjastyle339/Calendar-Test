import {ThemeToggle} from "../components/ThemeToggle";
import {StarBackground} from "../components/StarBackground";
import {NavBar} from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import {AboutMe} from "../components/AboutMe";
import {Skills} from "../components/Skills";
import {ProjectsSection} from "../components/ProjectsSection";
import {Contact} from "../components/Contact";
export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme Toggle */}
            <ThemeToggle />
        {/*Background Effects */}
            <StarBackground />
        {/*NavBar */}
            <NavBar />
        {/*Main Content */}
        <main>
            <HeroSection />
            <AboutMe />
            <Skills />
            <ProjectsSection />
        </main>

        {/*Footer */}
        <Contact />
    </div>;
};