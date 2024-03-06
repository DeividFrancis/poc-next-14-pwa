import { AddSkill } from "./components/add-skill";
import { ListSkills } from "./components/list-skills";

export default function Home() {
  return (
    <main className="max-w-screen max-h-screen">
      <div className="max-w-lg mx-auto pt-8 flex flex-col gap-4">
        <AddSkill />
        <ListSkills />
      </div>
    </main>
  );
}
