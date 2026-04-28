interface AboutProps {
    idioma: "pt" | "en";
}  

export default function About({ idioma }: AboutProps) {
    const textos = {
        pt: {
            titulo: "Sobre mim",
        },
        en: {
            titulo: "About me",
        }
    }

    return (
        <section className="section flex flex-col items-center text-center" id="about">
            <div className="w-full max-w-4xl pt-10">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
            </div>
        </section>
    )
}