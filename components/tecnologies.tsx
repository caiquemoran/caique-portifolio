import Image from "next/image";
import { IconType } from "react-icons";
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaFigma, FaJs, FaTerminal, FaLinux, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiOpencv, SiIntellijidea, SiPostman } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

export const listaTecnologias = [
    "Java", "Spring Boot", "Python", "Next.JS", "React", "TypeScript", "JavaScript", 
    "Tailwind", "Node.JS", "PostgreSQL", "Oracle SQL Developer", "Git", "GitHub", 
    "Docker", "OpenCV", "Figma", "Visual Studio Code", "IntelliJ IDEA", "Postman", "Protheus (ADVPL)", "Linux", "DBeaver"
];

export interface TecnologiaItem {
    nome: string;
    icone: IconType;
    cor?: string;
    imagem?: string;
    escala?: number;
}

interface CategoriaTecnologias {
    titulo: {
        pt: string;
        en: string;
    };
    items: TecnologiaItem[];
}

const categoriasTecnologias: CategoriaTecnologias[] = [
    {
        titulo: { pt: "Linguagens de Programação", en: "Programming Languages" },
        items: [
            { nome: "Java", icone: FaJava, imagem: "/java_icon.png" },
            { nome: "Python", icone: FaPython, imagem: "/python_icon.png" },
            { nome: "TypeScript", icone: SiTypescript, imagem: "/typescript_icon.png" },
            { nome: "JavaScript", icone: FaJs, imagem: "/javascript_icon.png" },
            { nome: "Protheus (ADVPL)", icone: FaTerminal, imagem: "/protheus_advpl_icon.png" },
        ]
    },
    {
        titulo: { pt: "Desenvolvimento Front-end", en: "Front-end Development" },
        items: [
            { nome: "React", icone: FaReact, imagem: "/react_icon.png" },
            { nome: "Next.JS", icone: SiNextdotjs, cor: "var(--foreground)" },
            { nome: "Tailwind", icone: SiTailwindcss, imagem: "/tailwind_icon.png" },
        ]
    },
    {
        titulo: { pt: "Back-end & Banco de Dados", en: "Back-end & Databases" },
        items: [
            { nome: "Spring Boot", icone: SiSpringboot, imagem: "/spring_boot_icon.png", escala: 1.4 },
            { nome: "Node.JS", icone: FaNodeJs, imagem: "/nodejs_icon.png", escala: 1.35 },
            { nome: "PostgreSQL", icone: SiPostgresql, imagem: "/postgresql_icon.png", escala: 1.25 },
            { nome: "Oracle SQL", icone: GrOracle, imagem: "/oracle_icon.png" },
        ]
    },
    {
        titulo: { pt: "DevOps & Ferramentas", en: "DevOps & Tools" },
        items: [
            { nome: "OpenCV", icone: SiOpencv, imagem: "/opencv_icon.png" },
            { nome: "Git", icone: FaGitAlt, cor: "#F05032" },
            { nome: "GitHub", icone: FaGithub, cor: "var(--foreground)" },
            { nome: "Docker", icone: FaDocker, cor: "#2496ED" },
            { nome: "Figma", icone: FaFigma, imagem: "/figma_icon.png" },
            { nome: "VS Code", icone: VscVscode, cor: "#007ACC" },
            { nome: "IntelliJ", icone: SiIntellijidea, imagem: "/intellij_icon.png" },
            { nome: "Postman", icone: SiPostman, cor: "#FF6C37" },
            { nome: "Linux", icone: FaLinux, imagem: "/linux_icon.png" },
            { nome: "DBeaver", icone: FaDatabase, imagem: "/dbeaver_icon.png" },
        ]
    }
];

interface TecnologiesProps {
    idioma: "pt" | "en";
}

export default function Tecnologies({ idioma }: TecnologiesProps) {
    const textos = {
        pt: {
            titulo: "Tecnologias",
        },
        en: {
            titulo: "Technologies",
        }
    }

    return (
        <section className="section flex flex-col items-center text-center" id="tecnologies">
            <div className="w-full max-w-4xl pt-10 flex flex-col items-center">
                <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">{textos[idioma].titulo}</h2>
            </div>
            
            <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {categoriasTecnologias.map((categoria, catIdx) => (
                    <div key={catIdx} className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold mb-8 text-[var(--foreground)] opacity-90 border-b border-[var(--foreground)] border-opacity-20 pb-4 w-full">
                            {categoria.titulo[idioma]}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {categoria.items.map((item, itemIdx) => (
                                <div 
                                    key={itemIdx} 
                                    className="group flex flex-row items-center justify-start gap-3 px-5 w-auto min-w-[140px] h-[70px] border border-[var(--foreground)] border-opacity-10 rounded-2xl hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-default"
                                >
                                    {item.imagem ? (
                                        <div 
                                            className="relative w-8 h-8 flex-shrink-0"
                                            style={{ transform: item.escala ? `scale(${item.escala})` : 'none' }}
                                        >
                                            <Image 
                                                src={item.imagem} 
                                                alt={item.nome}
                                                fill
                                                sizes="32px"
                                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <item.icone 
                                            size={32} 
                                            className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                                            color={item.cor}
                                        />
                                    )}
                                    <span className="text-sm font-semibold tracking-wide text-left leading-tight text-[var(--foreground)]">
                                        {item.nome}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export const todasTecnologias: TecnologiaItem[] = categoriasTecnologias.flatMap(c => c.items);