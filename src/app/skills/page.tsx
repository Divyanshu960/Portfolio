import { FaReact, FaNode, FaPython, FaAws, FaJava, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiTypescript, SiDocker, SiAzuredevops, SiCplusplus } from "react-icons/si";
import { SiMongodb, SiTypescript, SiDocker, SiCplusplus } from "react-icons/si";
const skills = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Node.js", icon: <FaNode size={32} /> },
  { name: "MongoDB", icon: <SiMongodb size={32} /> },
  { name: "Python", icon: <FaPython size={32} /> },
  { name: "Java", icon: <FaJava size={32} /> },
//   { name: "C++", icon: <SiCplusplus size={32} /> },
  { name: "AWS", icon: <FaAws size={32} /> },
//   { name: "Azure", icon: <SiAzuredevops size={32} /> },
  { name: "Docker", icon: <SiDocker size={32} /> },
  { name: "Git", icon: <FaGitAlt size={32} /> },
];

export default function Skills() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 border rounded shadow"
          >
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
