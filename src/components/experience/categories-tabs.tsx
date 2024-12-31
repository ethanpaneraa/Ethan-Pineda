import { Tabs, TabsContent, TabsTrigger, TabsList } from "@radix-ui/react-tabs";
import { ExperienceGrid } from "@/components/about/experience-grid";
import { workExperience, involvementExperience } from "@/lib/data/experience";

export function CategoriesTabs() {
  return (
    <Tabs defaultValue="work" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="work">work experience</TabsTrigger>
        <TabsTrigger value="involvement">campus involvement</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <ExperienceGrid experiences={workExperience} />
      </TabsContent>
      <TabsContent value="involvement">
        <ExperienceGrid experiences={involvementExperience} />
      </TabsContent>
    </Tabs>
  );
}
