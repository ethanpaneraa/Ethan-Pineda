import Introduction from "./_components/_introduction/Introduction";
import About from "./_components/About/About";
import ProfessionalExperience from "./_components/ProfessionalExperience/ProfessionalExperience";
import Extracurriculars from "./_components/Extracurriculars/Extracurriculars";
export default function Home() {
  return (
    <main >
      <Introduction />
      <About /> 
      <ProfessionalExperience />
      <Extracurriculars /> 
    </main>
  );
}
