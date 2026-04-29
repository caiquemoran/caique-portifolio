import Image from "next/image";

interface AboutProps {
    idioma: "pt" | "en";
}

export default function About({ idioma }: AboutProps) {
    const textos = {
        pt: {
            titulo: "Sobre mim",
            descricao: [
                "Motivado pela curiosidade de entender como os jogos são desenvolvidos, iniciei minha jornada na programação e hoje sou estudante de Engenharia de Software na Universidade Evangélica de Goiás.",
                "Tenho foco em desenvolvimento full stack, com estudos em Java, Python e React, aplicando conhecimentos em projetos práticos.",
                "Busco uma oportunidade para aprender com profissionais experientes, contribuir com soluções e evoluir continuamente na área de tecnologia."
            ],

        },
        en: {
            titulo: "About me",
            descricao: [
                "Motivated by the curiosity to understand how games are developed, I started my journey in programming and today I am a Software Engineering student at Universidade Evangélica de Goiás.",
                "I focus on full stack development, with studies in Java, Python, and React, applying knowledge in practical projects.",
                "I am looking for an opportunity to learn from experienced professionals, contribute with solutions, and evolve continuously in the technology field."
            ],
        },
    };

    return (
        <section className="section flex flex-col items-center !min-h-fit pb-16 md:pb-24" id="about">
            <div className="w-full max-w-4xl pt-10 mb-8">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight text-center">
                    {textos[idioma].titulo}
                </h2>
            </div>

            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 md:gap-16 mt-6">
                <div className="flex-1 text-left">
                    <div className="text-lg md:text-xl opacity-80 text-[var(--foreground)] leading-relaxed mb-6 space-y-4">
                        {textos[idioma].descricao.map((paragrafo, index) => (
                            <p key={index}>{paragrafo}</p>
                        ))}
                    </div>
                </div>

                <div className="flex-shrink-0 w-[280px] h-[350px] md:w-[320px] md:h-[400px] relative rounded-3xl overflow-hidden border border-[var(--foreground)] border-opacity-10 bg-black/5 dark:bg-white/5 shadow-xl">
                    <Image
                        src="/about_foto.png"
                        alt={textos[idioma].titulo}
                        fill
                        sizes="320px"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}