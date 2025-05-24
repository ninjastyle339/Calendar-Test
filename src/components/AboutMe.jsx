import {Code, User, BrainCircuit} from "lucide-react";

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className = "container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-glow">Calendar</span>
            </h2>

            <div className ="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className = "text-2xl font-bold">Revolutionary Calendar App</h3>
                    <p className = "text-muted-foreground">
                        As the times get busier and busier this new calendar app is necessary.
                        With features never seen before, you're basically gauranteed to become more 
                        organized.
                    </p>
                    <p>
                        Very simple and easy to learn app designed for all ages.
                    </p>
                    <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                Get In Touch
                        </a>
                        <a href ="#Zoot" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className = "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Ai Calendar
                                </span>
                        </a>
                    </div>
                    
                </div>
                <div className="grid grid-cols-1 gap-6">
                            <div className = "gradient-border p-6 card-hover">
                                <div classname="flex items-start gap-4">
                                    <div className = "p-3 rounded-full">
                                    <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Calendar development</h4>
                                        <p className = "text-muted-foreground">
                                            Creating responsive Calendars with modern tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = "gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className = "text-left">
                                    <h4 className="font-semibold text-lg">Availability</h4>
                                    <p>Made for IOS/Android, laptops, and desktops</p>
                                </div>
                            </div>
                            <div className = "gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>
                                <div className = "text-left">
                                    <h4 className="font-semibold text-lg">Ai Tools</h4>
                                    <p>Experience state of the art new ai tools for better planning</p>
                                </div>
                            </div>
                    </div>

            </div>

        </div>

    </section>
}