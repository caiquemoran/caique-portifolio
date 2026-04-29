"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface EducationItem {
    imagem: string;
    titulo: { pt: string; en: string };
    subtitulo: { pt: string; en: string };
    descricao: { pt: string; en: string };
}

const educationItems: EducationItem[] = [
    {
        imagem: "/certificados/certificado_advpl.jpg",
        titulo: { pt: "Programando em ADVPL - Aprenda do Zero", en: "Programming in ADVPL - Learn from Scratch" },
        subtitulo: { pt: "Udemy", en: "Udemy" },
        descricao: {
            pt: "Desenvolvimento na linguagem ADVPL com foco em lógica de programação, estruturação de sistemas e aplicações voltadas para ambientes ERP.",
            en: "Development using the ADVPL language, focusing on programming logic, system structuring, and applications for ERP environments.",
        },
    },
    {
        imagem: "/certificados/certificado_banco_de_dados.jpg",
        titulo: { pt: "Banco de Dados", en: "Database Fundamentals" },
        subtitulo: { pt: "Fundação Bradesco", en: "Fundação Bradesco" },
        descricao: {
            pt: "Fundamentos de banco de dados, incluindo modelagem, consultas SQL e manipulação de dados para construção e gerenciamento de sistemas.",
            en: "Database fundamentals, including data modeling, SQL queries, and data manipulation for building and managing systems.",
        },
    },
    {
        imagem: "/certificados/certificado_linux.jpg",
        titulo: { pt: "LPI Linux Essentials: Preparatório para a Certificação", en: "LPI Linux Essentials: Certification Preparation" },
        subtitulo: { pt: "Udemy", en: "Udemy" },
        descricao: {
            pt: "Conceitos essenciais de Linux, incluindo comandos, gerenciamento de sistema e fundamentos necessários para atuação em ambientes de servidores.",
            en: "Essential Linux concepts, including command-line usage, system management, and core knowledge for working in server environments.",
        },
    },
];

interface EducationProps {
    idioma: "pt" | "en";
}

export default function Education({ idioma }: EducationProps) {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const textos = {
        pt: {
            titulo: "Educação",
            subtitulo: "Atualmente no 7º período de Engenharia de Software, venho desenvolvendo habilidades em programação, desenvolvimento web e estruturação de sistemas, aplicando os conhecimentos em projetos práticos e evoluindo constantemente na área.",
        },
        en: {
            titulo: "Education",
            subtitulo: "Currently in the 7th period of Software Engineering, I have been developing skills in programming, web development, and systems structuring, applying the knowledge in practical projects and constantly evolving in the area.",
        },
    };

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const scrollAmount = 380;
        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <>
            <section
                className="section flex flex-col items-center text-center"
                id="education"
            >
                <div className="w-full max-w-4xl pt-10">
                    <h2 className="text-6xl md:text-4xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
                        {textos[idioma].titulo}
                    </h2>
                    <p className="text-base md:text-lg opacity-60 text-[var(--foreground)] mt-2">
                        {textos[idioma].subtitulo}
                    </p>
                </div>

                <div className="relative w-full mt-14">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-0 bottom-0 z-10 w-12 md:w-14 rounded-r-2xl border-r border-[var(--foreground)] border-opacity-10 bg-[var(--background)]/80 backdrop-blur-sm flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[var(--background)] transition-all duration-300 cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-0 bottom-0 z-10 w-12 md:w-14 rounded-l-2xl border-l border-[var(--foreground)] border-opacity-10 bg-[var(--background)]/80 backdrop-blur-sm flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[var(--background)] transition-all duration-300 cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div
                        ref={carouselRef}
                        className="flex gap-8 overflow-x-auto scroll-smooth px-16 md:px-20 py-4 education-carousel justify-center"
                    >
                        {educationItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setExpandedImage(item.imagem)}
                                className="group flex-shrink-0 w-[520px] border border-[var(--foreground)] border-opacity-10 rounded-3xl overflow-hidden bg-black/5 dark:bg-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative w-full h-[300px] overflow-hidden">
                                    <Image
                                        src={item.imagem}
                                        alt={item.titulo[idioma]}
                                        fill
                                        sizes="520px"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-7 text-left">
                                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-1 leading-tight">
                                        {item.titulo[idioma]}
                                    </h3>
                                    <p className="text-sm font-semibold opacity-60 text-[var(--foreground)] mb-3">
                                        {item.subtitulo[idioma]}
                                    </p>
                                    <p className="text-base opacity-70 text-[var(--foreground)] leading-relaxed">
                                        {item.descricao[idioma]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {expandedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
                    onClick={() => setExpandedImage(null)}
                >
                    <button
                        onClick={() => setExpandedImage(null)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer z-[101]"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <div
                        className="relative w-[90vw] max-w-4xl h-[70vh] rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={expandedImage}
                            alt="Expanded education image"
                            fill
                            sizes="90vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}