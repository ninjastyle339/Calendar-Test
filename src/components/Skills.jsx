
const skills = [
    {name: "C++"},
    {name: "HTML"},
    {name: "CSS"},
    {name: "C"},
    {name: "Python"},
    {name: "Javascript"},
    {name: "React"},
    {name: "Pygame"},
    {name: "Problem Solving"},
    {name: "Competitive Programming"},
    {name: "Fun"},
    {name: "Les go"},
    {name: "lol"},
    {name: "How is Zoot"},
    {name: "Ez Clap"},

]

export const Skills = () => {

    return <section id="skills" className = "py-24 px-4 relative bg-secondary/30">
        <div className = "container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className = "text-primary"> Skills</span>

            </h2>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div key = "key" className ="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                        <div> <h3> {skill.name} </h3> </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
}