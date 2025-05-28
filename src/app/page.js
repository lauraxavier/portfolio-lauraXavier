import Navbar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <div className="container mt-24 mx-auto px-10">
                <HeaderSection />
                <AboutSection />
                <ProjectsSection />
                <Contact />
            </div>
            <BackToTopButton />
            <Footer />
        </main>
    );
}
