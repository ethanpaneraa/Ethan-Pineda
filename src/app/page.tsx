import NavBar from "./ui/NavBar";
import Introduction from "./_components/_introduction/Introduction";
import About from "./_components/About/About";
import ProfessionalExperience from "./_components/ProfessionalExperience/ProfessionalExperience";
import Extracurriculars from "./_components/Extracurriculars/Extracurriculars";
import FeaturedProjects from "./_components/FeaturedProjects/FeaturedProjects";
import OtherProjects from "./_components/OtherProjects/OtherProjects";
import Contact from "./_components/Contact/Contact";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main >
      <NavBar /> 
      <Introduction />
      <About /> 
      <ProfessionalExperience />
      <Extracurriculars /> 
      <FeaturedProjects /> 
      <OtherProjects />
      <Contact />
      <Footer /> 
    </main>
  );
}
