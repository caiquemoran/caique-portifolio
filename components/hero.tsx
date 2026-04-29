import { listaTecnologias } from "./tecnologies";
import TechRain from "./tech-rain";
import { FaChevronDown } from "react-icons/fa";

interface HeroProps {
    idioma: "pt" | "en";
}

export default function Hero({ idioma = "pt" }: HeroProps) {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.getElementById("projects");
        if (target) {
            const targetPosition =
                target.getBoundingClientRect().top + window.scrollY - 100;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };

    const textos = {
        pt: {
            titulo: "Caique Moran",
            subtitle: "Desenvolvedor Full Stack",
            botao: "Baixar CV",
            projetos: "Ver Projetos",
        },
        en: {
            titulo: "Caique Moran",
            subtitle: "Full Stack Developer",
            botao: "Download CV",
            projetos: "View Projects",
        },
    };

    return (
        <section className="hero !justify-start pl-[10%] relative overflow-hidden">
            <TechRain />

            <div className="flex flex-col items-start w-full max-w-4xl pt-20 z-10">
                <h1 className="text-6xl md:text-8xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
                    {textos[idioma].titulo}
                </h1>

                <p className="text-2xl md:text-4xl text-[var(--foreground)] opacity-70 font-medium mb-6">
                    {textos[idioma].subtitle}
                </p>

                <div className="w-[100vw] absolute bottom-20 left-0 md:relative md:bottom-auto md:w-[60vw]">
                    <div className="bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] absolute inset-0 z-10 pointer-events-none"></div>
                    <div className="w-full overflow-hidden whitespace-nowrap mt-4 mb-4">
                        <div className="inline-block anim-marquee text-lg md:text-xl text-[var(--foreground)] opacity-50 font-mono tracking-widest px-4">
                            {listaTecnologias.join(" • ")}
                            <span className="mx-4">|</span>
                            {listaTecnologias.join(" • ")}
                            <span className="mx-4">|</span>
                        </div>
                    </div>
                </div>

                <a
                    href={
                        idioma === "pt"
                            ? "/CAIQUE_MORAN_CV.pdf"
                            : "/CAIQUE_MORAN_CV_EN.pdf"
                    }
                    download={
                        idioma === "pt"
                            ? "CAIQUE_MORAN_CV.pdf"
                            : "CAIQUE_MORAN_CV_EN.pdf"
                    }
                    className="mt-6 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-full hover:opacity-80 transition-opacity text-lg"
                >
                    {textos[idioma].botao}
                </a>
            </div>

            <a
                href="#projects"
                onClick={handleScroll}
                className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity animate-bounce z-20"
                aria-label={textos[idioma].projetos}
            >
                <span className="text-sm tracking-widest uppercase font-semibold">
                    {textos[idioma].projetos}
                </span>
                <FaChevronDown size={28} />
            </a>
        </section>
    );
}