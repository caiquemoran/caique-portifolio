import { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

interface NavbarProps {
    idioma: "pt" | "en";
    setIdioma: (idioma: "pt" | "en") => void;
}

export default function Navbar({idioma, setIdioma}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    // const [theme, setTheme] = useState<"light" | "dark">("light");
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Força o tema escuro (background preto) ao iniciar
        document.documentElement.classList.add("dark");
        /*
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
        */
    }, []);

    /*
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", newTheme);
    };
    */

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const textos = {
        pt: {
            projetos: "Projetos",
            habilidades: "Habilidades",
            experiencia: "Experiência",
            tecnologias: "Tecnologias",
            educacao: "Educação",
            linguagem: "Idiomas",
            sobre: "Sobre mim",
            contato: "Contato"
        },
        en: {
            projetos: "Projects",
            habilidades: "Skills",
            experiencia: "Experience",
            tecnologias: "Technologies",
            educacao: "Education",
            linguagem: "Languages",
            sobre: "About me",
            contato: "Contact"
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                CAIQUE MORAN
            </div>
            <div className="navbar-links">
                <a href="#projects" className={activeSection === "projects" ? "active" : ""}>{textos[idioma].projetos}</a>
                <a href="#experience" className={activeSection === "experience" ? "active" : ""}>{textos[idioma].experiencia}</a>
                <a href="#tecnologies" className={activeSection === "tecnologies" ? "active" : ""}>{textos[idioma].tecnologias}</a>
                <a href="#education" className={activeSection === "education" ? "active" : ""}>{textos[idioma].educacao}</a>
                <a href="#languages" className={activeSection === "languages" ? "active" : ""}>{textos[idioma].linguagem}</a>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>{textos[idioma].sobre}</a>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>{textos[idioma].contato}</a>
            </div>
            <div className="navbar-actions">
                <button className="cursor-pointer" onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>
                    {idioma === "pt" ? "EN" : "PT"}
                </button>
                {/* 
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                */}
            </div>
        </nav>
    )
}