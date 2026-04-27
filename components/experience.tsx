import Image from "next/image";
import { todasTecnologias, TecnologiaItem } from "./tecnologies";

interface Experiencia {
    empresa: string;
    logo: string;               
    cargo: { pt: string; en: string };
    periodo: { pt: string; en: string };
    descricao: { pt: string; en: string };
    tecnologias: string[]; 
}

const experiencias: Experiencia[] = [
    {
        empresa: "Champion Saúde Animal",
        logo: "/champion_logo.jpg",
        cargo: { pt: "Jovem Aprendiz TI", en: "IT Apprentice" },
        periodo: { pt: "Jul 2023 – Jun 2025", en: "Jul 2023 – Jun 2025" },
        descricao: {
            pt: "Auxílio no desenvolvimento e manutenção de sistemas ERP utilizando Oracle SQL Developer e ADVPL, incluindo acesso a servidores Linux via SSH (MobaXterm), gerenciamento de serviços e monitoramento.",
            en: "Assistance in the development and maintenance of ERP systems using Oracle SQL Developer and ADVPL, including access to Linux servers via SSH (MobaXterm), service management and monitoring.",
        },
        tecnologias: ["Oracle SQL", "Protheus (ADVPL)", "Linux", "Git", "GitHub"],
    },
    {
        empresa: "Champion Saúde Animal",
        logo: "/champion_logo.jpg",
        cargo: { pt: "Estagiário TI (Analista de Sistemas)", en: "IT Intern (Systems Analyst)" },
        periodo: { pt: "Jul 2025 – Jan 2026", en: "Jul 2025 – Jan 2026" },
        descricao: {
            pt: "Auxílio no desenvolvimento e manutenção de sistemas ERP utilizando Oracle SQL Developer e ADVPL, incluindo acesso a servidores Linux via SSH (MobaXterm), gerenciamento de serviços e monitoramento.",
            en: "Assistance in the development and maintenance of ERP systems using Oracle SQL Developer and ADVPL, including access to Linux servers via SSH (MobaXterm), service management and monitoring.",
        },
        tecnologias: ["Oracle SQL", "Protheus (ADVPL)", "Linux", "Git", "GitHub"],
    },
    {
        empresa: "Centro Oeste Indústria de Caixas de Papelão e Produtos Gráficos",
        logo: "/co_logo.jpg",
        cargo: { pt: "Desenvolvimento de Landing Page", en: "Landing Page Development" },
        periodo: { pt: "Mar 2026 – Abr 2026", en: "Mar 2026 – Apr 2026" },
        descricao: {
            pt: "Desenvolvimento de Landing Page para a empresa.",
            en: "Development of Landing Page for the company.",
        },
        tecnologias: ["React", "Next.JS", "Node.JS", "TypeScript", "Tailwind", "Git", "GitHub"],
    },
];

function getTecnologia(nome: string): TecnologiaItem | undefined {
    return todasTecnologias.find(t => t.nome === nome);
}

function TechBadge({ nome }: { nome: string }) {
    const tech = getTecnologia(nome);
    if (!tech) return null;

    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--foreground)] border-opacity-15 bg-black/5 dark:bg-white/5 text-xs font-semibold text-[var(--foreground)]">
            {tech.imagem ? (
                <div className="relative w-4 h-4 flex-shrink-0">
                    <Image src={tech.imagem} alt={tech.nome} fill sizes="16px" className="object-contain" />
                </div>
            ) : (
                <tech.icone size={14} color={tech.cor} className="flex-shrink-0" />
            )}
            <span>{tech.nome}</span>
        </div>
    );
}

interface ExperienceProps {
    idioma: "pt" | "en";
}

export default function Experience({ idioma }: ExperienceProps) {
    const textos = {
        pt: {
            titulo: "Experiência",
        },
        en: {
            titulo: "Experience",
        }
    }

    return (
        <section className="section flex flex-col items-center text-center" id="experience">
            <div className="w-full max-w-4xl pt-10">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
                    {textos[idioma].titulo}
                </h2>
            </div>

            <div className="relative mt-20 w-full max-w-5xl flex flex-col items-center">

                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--foreground)] opacity-10 z-0" />
                
                <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-[2px] bg-[var(--foreground)] opacity-10 z-0" />

                {experiencias.map((exp, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className={`relative w-full mb-12 lg:mb-20 flex flex-col md:flex-row items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}>

                            <div className="hidden md:block md:w-[45%]" /> 

                            <div className="absolute left-[15px] md:left-1/2 -ml-[8px] md:-ml-[8px] top-6 md:top-16 w-4 h-4 rounded-full border-2 border-[var(--foreground)] bg-[var(--background)] ring-4 ring-[var(--background)] z-10 transition-transform duration-300 hover:scale-125" />

                            <div className={`w-full pl-12 md:pl-0 md:w-[45%] flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                                
                                <div className={`w-full border border-[var(--foreground)] border-opacity-10 rounded-3xl p-6 sm:p-8 bg-black/5 dark:bg-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-left ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                    
                                    <div className={`flex flex-col sm:flex-row items-start gap-5 mb-6 ${isLeft ? 'md:flex-row-reverse sm:items-center' : 'sm:items-center'}`}>
                                        
                                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden border border-[var(--foreground)] border-opacity-15 bg-white dark:bg-zinc-900 shadow-md">
                                            <Image
                                                src={exp.logo}
                                                alt={exp.empresa}
                                                fill
                                                sizes="112px"
                                                className="object-contain p-3"
                                            />
                                        </div>

                                        <div className={`flex-1 flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                                            <p className="text-xs font-bold uppercase tracking-widest opacity-50 text-[var(--foreground)] mb-1">
                                                {exp.empresa}
                                            </p>
                                            <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] leading-tight mb-2">
                                                {exp.cargo[idioma]}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-semibold opacity-70 mt-1">
                                                {exp.periodo[idioma]}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm opacity-80 text-[var(--foreground)] mb-6 leading-relaxed">
                                        {exp.descricao[idioma]}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                        {exp.tecnologias.map((nome) => (
                                            <TechBadge key={nome} nome={nome} />
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
