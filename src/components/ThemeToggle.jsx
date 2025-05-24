import {Moon, Sun} from "lucide-react";
import {useState, useEffect} from "react";

export const ThemeToggle = () =>{
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme === "light"){
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else{
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
            
        }
    }

    return <button onClick={toggleTheme} className ="fixed max-sm:hidden right-5 top-5 z-50 p-2"> {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900"/> }</button>
}