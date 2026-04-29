"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { todasTecnologias } from './tecnologies';

interface ProjectsProps {
    idioma: "pt" | "en";
}

export default function Projects({ idioma }: ProjectsProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    
    const textos = {
        pt: {
            titulo: "Meus Projetos",
            repositorio: "Repositório",
            tituloPortfolioTech: "Tecnologias usadas neste portfólio",
            portfolioTechs: ["Next.JS", "React", "TypeScript", "Tailwind"],
            projetos: [
                {
                    titulo: "Gerador de QR Code",
                    tecnologias: ["Java", "Spring Boot", "Docker"],
                    imagem: "",
                    repositorio: "https://github.com/Fockas/QRCodeGerator",
                },
 
            ]
        },
        en: {
            titulo: "My Projects",
            repositorio: "Repository",
            tituloPortfolioTech: "Technologies used in this portfolio",
            portfolioTechs: ["Next.JS", "React", "TypeScript", "Tailwind"],
            projetos: [
                {
                    titulo: "QR Code Generator",
                    tecnologias: ["Java", "Spring Boot", "Docker"],
                    imagem: "",
                    repositorio: "https://github.com/Fockas/QRCodeGerator",
                },
            ]
        }
    }

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const scrollAmount = carouselRef.current.clientWidth * 0.8;
        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    const getTechData = (techName: string) => {
        const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const normTech = normalize(techName);
        return todasTecnologias.find(t => normalize(t.nome) === normTech || normalize(t.nome).includes(normTech) || normTech.includes(normalize(t.nome)));
    };
    
    return (
        <section className="section flex flex-col items-center text-center" id="projects">
            <div className="w-full max-w-[95vw] 2xl:max-w-[1600px] pt-10">
                <h2 className="text-5xl md:text-4xl font-bold text-[var(--foreground)] mb-12 tracking-tight">{textos[idioma].titulo}</h2>
                
                <div className="relative w-full">
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-0 bottom-0 z-10 w-12 md:w-16 rounded-r-3xl border-r border-[var(--foreground)] border-opacity-10 bg-[var(--background)]/80 backdrop-blur-sm flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[var(--background)] transition-all duration-300 cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-0 bottom-0 z-10 w-12 md:w-16 rounded-l-3xl border-l border-[var(--foreground)] border-opacity-10 bg-[var(--background)]/80 backdrop-blur-sm flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-[var(--background)] transition-all duration-300 cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div 
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 education-carousel px-16 md:px-24"
                    >
                        {textos[idioma].projetos.map((projeto, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 w-[85vw] md:w-[calc(50%-2rem)] lg:w-[calc(50%-3rem)] max-w-[800px] bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden snap-center flex flex-col text-left hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden flex items-center justify-center">
                                    {projeto.imagem ? (
                                        <Image 
                                            src={projeto.imagem} 
                                            alt={`Imagem do ${projeto.titulo}`} 
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <span className="text-gray-400 dark:text-gray-500 font-medium text-lg">Sem Imagem</span>
                                    )}
                                </div>
                                
                                <div className="p-8 md:p-10 flex flex-col flex-grow">
                                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">{projeto.titulo}</h3>
                                    
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {projeto.tecnologias.map((tech, i) => {
                                            const techData = getTechData(tech);
                                            
                                            return (
                                                <span key={i} className="flex items-center gap-2 text-sm font-semibold bg-gray-100 dark:bg-[#222222] text-gray-700 dark:text-gray-300 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
                                                    {techData && (
                                                        techData.imagem ? (
                                                            <div className="relative w-4 h-4 flex-shrink-0" style={{ transform: techData.escala ? `scale(${techData.escala})` : 'none' }}>
                                                                <Image src={techData.imagem} alt={techData.nome} fill sizes="16px" className="object-contain" />
                                                            </div>
                                                        ) : (
                                                            <techData.icone size={16} color={techData.cor} className="flex-shrink-0" />
                                                        )
                                                    )}
                                                    {tech}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    
                                    <a 
                                        href={projeto.repositorio} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="mt-auto inline-flex items-center gap-2 text-black dark:text-white font-bold text-lg hover:underline group/link w-fit opacity-90 hover:opacity-100 transition-opacity"
                                    >
                                        <FaGithub size={24} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                                        {textos[idioma].repositorio}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full flex flex-col items-center mt-20 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-10 tracking-tight text-center opacity-90">
                        {textos[idioma].tituloPortfolioTech}
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {textos[idioma].portfolioTechs.map((tech, idx) => {
                            const techData = getTechData(tech);
                            
                            return (
                                <div key={idx} className="flex flex-col items-center justify-center gap-3 w-28 group">
                                    <div className="flex items-center justify-center group-hover:-translate-y-2 transition-all duration-300 cursor-default">
                                        {techData && (
                                            techData.imagem ? (
                                                <div className="relative w-12 h-12 md:w-14 md:h-14" style={{ transform: techData.escala ? `scale(${techData.escala})` : 'none' }}>
                                                    <Image src={techData.imagem} alt={techData.nome} fill sizes="56px" className="object-contain group-hover:scale-110 transition-transform duration-300" />
                                                </div>
                                            ) : (
                                                <techData.icone size={48} color={techData.cor} className="group-hover:scale-110 transition-transform duration-300" />
                                            )
                                        )}
                                    </div>
                                    <span className="text-sm md:text-base font-semibold text-[var(--foreground)] text-center tracking-wide">
                                        {tech}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}