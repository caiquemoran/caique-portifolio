interface ProjectsProps {
    idioma: "pt" | "en";
}

export default function Projects({ idioma }: ProjectsProps) {
    
    const textos = {
        pt: {
        titulo: "Meus Projetos",
        },
        en: {
        titulo: "My Projects",
        }
    }
    
    return (
        <section className="section flex flex-col items-center text-center" id="projects">
            <div className="w-full max-w-4xl pt-10">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
            </div>
        </section>
    )
}