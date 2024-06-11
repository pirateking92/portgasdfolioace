import AboutSection from "@/components/AboutSection";
import EmailSection from "@/components/EmailSection";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col bg-[#121212] ">
      <div className="container mt-24 mx-auto px-12 py-4 font-poppins">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <MainSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
    </main>
  );
}
