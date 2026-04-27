interface ContactProps {
    idioma: "pt" | "en";
}

export default function Contact({ idioma }: ContactProps) {
    const textos = {
        pt: {
            titulo: "Contato",
            descricao: "Entre em contato comigo:"
        },
        en: {
            titulo: "Contact",
            descricao: "Contact me:"
        }
    }

    return (
        <section className="section flex flex-col items-center text-center" id="contact">
            <div className="w-full max-w-4xl pt-10 flex flex-col items-center">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
            </div>
        </section>
    )
}