import React from 'react';

interface languageProps {
    idioma: "pt" | "en";
}

export default function Language({ idioma }: languageProps){
    const textos = {
        pt: {
            titulo: "Idiomas",
            idiomas: [
                { nome: "Português (BR)", nivel: "Nativo", porcentagem: 100 },
                { nome: "Inglês", nivel: "Intermediário", porcentagem: 65 },
                { nome: "Espanhol", nivel: "Básico", porcentagem: 30 }
            ]
        },
        en: {
            titulo: "Languages",
            idiomas: [
                { nome: "Portuguese (BR)", nivel: "Native", porcentagem: 100 },
                { nome: "English", nivel: "Intermediate", porcentagem: 65 },
                { nome: "Spanish", nivel: "Basic", porcentagem: 30 }
            ]
        }
    }

    return(
        <section className="section flex flex-col items-center !min-h-fit pb-16 md:pb-24" id="languages">
            <div className="w-full max-w-3xl pt-10 mb-8 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-12 tracking-tight text-center">
                    {textos[idioma].titulo}
                </h2>
                
                <div className="flex flex-col gap-8 w-full">
                    {textos[idioma].idiomas.map((item, index) => (
                        <div key={index} className="w-full group">
                            <div className="flex justify-between items-end mb-2 px-1">
                                <h3 className="text-xl font-semibold text-[var(--foreground)] tracking-tight">{item.nome}</h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-200">{item.nivel}</span>
                            </div>
                            
                            <div className="w-full bg-gray-200 dark:bg-[#1a1a1a] rounded-full h-3 md:h-4 overflow-hidden relative shadow-inner">
                                <div 
                                    className="h-full rounded-full transition-all duration-[1500ms] ease-out bg-gradient-to-r bg-white relative group-hover:brightness-110"
                                    style={{ width: `${item.porcentagem}%` }}
                                >
                                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-white opacity-30 blur-[3px] rounded-full mix-blend-overlay"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}