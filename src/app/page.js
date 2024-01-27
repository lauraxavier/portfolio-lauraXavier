import Navbar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-10">
        <HeaderSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
