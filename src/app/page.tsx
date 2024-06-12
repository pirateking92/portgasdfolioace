import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <main className="container mt-24 mx-auto px-12 py-4">
        <MainSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
