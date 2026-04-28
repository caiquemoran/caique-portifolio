interface EducationProps {
    idioma: "pt" | "en";
}

export default function Education({ idioma }: EducationProps) {
    const textos = {
        pt: {
            titulo: "Educação",
        },
        en: {
            titulo: "Education",
        }
    }

    return (
        <section className="section flex flex-col items-center text-center" id="education">
            <div className="w-full max-w-4xl pt-10">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
            </div>
        </section>
    )
}