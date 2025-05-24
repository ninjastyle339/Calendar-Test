const projects = [
    {
        id: 1,
        title: "5.99$",
        description: "State of the art AI tools",
        image: "/projects/wirescool.jpg",
        tags: ["Modern", "New", "Free"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "9.99$",
        description: "Self Improvement",
        image: "/projects/cpuCool.jpg",
        tags: ["Accessible", "Next-gen", "Lightweight"],
        demoUrl: "#",
        githubUrl: "#",
    }, 
    {
        id: 3,
        title: "15.99$",
        description: "Record-Breaking",
        image: "/projects/coolsquares.jpg",
        tags: ["Optimized", "Responsive", "Intuitive"],
        demoUrl: "#",
        githubUrl: "#",
    }
];


export const ProjectsSection = () => {
    return <section id = "projects" className = "py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className = "text-4xl font-semibold mb-4 text-center">
                Featured <span className = "text-primary"> Tools</span>
            </h2>

            <p className = "text-center mb-12 max-w-2xl mx-auto">
                Congrats on the victory
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className ="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                         <div className="h-50 overflow-hidden"> 
                            <img src={project.image} alt={project.title} className ="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                         </div>
                         <div className = "p-6">
                            <div className="flex felx-wrwap gap-2 mb-4"> 
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            </div>
                            <h3 className = "text-xl font-semibold mb-2">{project.title}</h3>
                            <p className ="mb-4">{project.description}</p>
                         </div>
                ))}
            </div>
        </div>
    </section>
}