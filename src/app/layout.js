import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "lauraXavier <LX />",
    description: "Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
