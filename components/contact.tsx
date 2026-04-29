import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactProps {
    idioma: "pt" | "en";
}

const contatos = [
    {
        icone: MdEmail,
        titulo: { pt: "E-mail", en: "E-mail" },
        dado: "caiquemoran.s@gmail.com",
        link: "mailto:caiquemoran.s@gmail.com",
        corHover: "hover:bg-red-500/10 hover:border-red-500/50"
    },
    {
        icone: FaLinkedin,
        titulo: { pt: "LinkedIn", en: "LinkedIn" },
        dado: "caiquemoran",
        link: "https://linkedin.com/in/caiquemoran",
        corHover: "hover:bg-blue-500/10 hover:border-blue-500/50"
    },
    {
        icone: FaGithub,
        titulo: { pt: "GitHub", en: "GitHub" },
        dado: "caiquemoran",
        link: "https://github.com/caiquemoran",
        corHover: "hover:bg-zinc-500/10 hover:border-zinc-500/50 dark:hover:bg-zinc-400/10"
    }
];


export default function Contact({ idioma }: ContactProps) {
    const textos = {
        pt: {
            titulo: "Contato",
            subtitle: "Estou aberto a oportunidades, colaborações e projetos.\nSe quiser conversar sobre tecnologia ou parcerias, entre em contato."
        },
        en: {
            titulo: "Contact",
            subtitle: "I'm open to opportunities, collaborations, and projects.\nIf you want to chat about technology or partnerships, get in touch."
        }
    }

    return (
        <section className="section flex flex-col items-center text-center !min-h-fit pb-24" id="contact">
            <div className="w-full max-w-4xl pt-10 flex flex-col items-center">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
                <p className="text-lg md:text-xl text-[var(--foreground)] opacity-70 mt-4 max-w-2xl whitespace-pre-line">
                    {textos[idioma].subtitle}
                </p>
            </div>
            <div className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {contatos.map((contato, index) => (
                    <a
                        key={index}
                        href={contato.link}
                        target="_blank"  
                        rel="noopener noreferrer" 
                        className={`group flex flex-col items-center justify-center p-8 border border-[var(--foreground)] border-opacity-10 rounded-3xl bg-black/5 dark:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${contato.corHover}`}
                    >
                        <contato.icone 
                            size={48} 
                            className="mb-4 text-[var(--foreground)] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                        />
        
                        <span className="font-bold text-xl mb-1 text-[var(--foreground)]">
                            {contato.titulo[idioma]}
                        </span>
        
                        <span className="text-sm font-semibold opacity-60 text-[var(--foreground)] text-center">
                            {contato.dado}
                        </span>
                    </a>
                ))}

            </div>

        </section>
    )
}