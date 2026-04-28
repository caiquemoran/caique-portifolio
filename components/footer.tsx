interface FooterProps {
    idioma: "pt" | "en";
}

export default function Footer({ idioma }: FooterProps) {
    return (
        <footer className="w-full bg-black/5 dark:bg-white/5 border-t border-[var(--foreground)] border-opacity-10 py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <p className="text-[var(--foreground)] text-sm font-semibold opacity-70">
                    © {new Date().getFullYear()} Caique Moran. {idioma === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
                </p>
            </div>
        </footer>
    )
}