import {ArrowUp, Instagram} from "lucide-react";
export const Contact = () => {
    return <footer id ="contact" className="py-12 px-4 bg-card mt-12 pt-8">
        <p>&copy; {new Date().getFullYear()} Zuhayr.co. All rights reserved. <a className = "inline-block ml-2 align-middle" href = "https://www.instagram.com/ryahuz_/?hl=en"><Instagram /></a>
        </p>
        <a className = "fixed bottom-8 right-8 p-2 rounded-full" href = "#hero"><ArrowUp /></a>
        
    </footer>
}