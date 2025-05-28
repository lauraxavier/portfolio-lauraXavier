import React from "react";

const Footer = () => {
    return (
        <footer className="bg-background dark:bg-secondary/40 border-t border-border py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <p className="text-lg font-bold text-primary mb-2">
                            <span>&#60;</span>LX<span>/&#62;</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} - Todos os direitos
                            reservados
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <p className="text-sm text-muted-foreground">
                            Desenvolvido com 💜 e muito café ☕
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
