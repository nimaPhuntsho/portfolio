import { Metadata } from "next";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiFirebase,
  SiMongodb,
  SiJira,
  SiConfluence,
  SiExpress,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

export const metadata: Metadata = {
  title: "About 🤙🏾",
  description: "About Nima",
};

export default async function About() {
  const skills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "C#", icon: <TbBrandCSharp /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Front-End Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Angular", icon: <FaReact /> }, // Replace with Angular icon if needed
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Chakra UI", icon: <FaCss3 /> }, // No direct icon for Chakra UI
        { name: "CSS", icon: <FaCss3 /> },
        { name: "HTML", icon: <FaHtml5 /> },
      ],
    },
    {
      category: "Back-End & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "REST API", icon: <FaNodeJs /> }, // Generic icon
        { name: "tRPC", icon: <SiPrisma /> }, // No direct icon for tRPC
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },

    {
      category: "Database Management",
      skills: [
        { name: "Supabase", icon: <FaDatabase /> }, // No direct icon for Supabase
        { name: "NoSQL", icon: <SiMongodb /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "Mongoose", icon: <SiMongodb /> },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "AWS (S3)", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git (GitHub, BitBucket)", icon: <FaGitAlt /> },
        { name: "Linux OS", icon: <FaLinux /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Confluence", icon: <SiConfluence /> },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-1 justify-center">
        <div className={`w-full flex flex-col gap-10 mt-10`}>
          <div className={`flex flex-col gap-2`}>
            <h1 className={`md:text-4xl text-2xl`}>About</h1>
            <div className={`flex flex-col justify-between  flex-wrap gap-6`}>
              <div className={`flex-1`}>
                <p className={`text-justify`}>
                  I&apos;m a passionate Software Developer with expertise in
                  both front-end and back-end technologies. I specialize in
                  creating scalable and efficient software solutions using
                  technologies like React, Next.js, Node.js, and Supabase.
                </p>
              </div>
            </div>
          </div>

          <div className={`flex flex-col   gap-4`}>
            <h1 className={`md:text-4xl text-2xl `}>Skills</h1>
            <div className={`flex overflow-auto gap-4`}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={` flex flex-col gap-2 border-1 min-w-[20rem]  p-5 rounded-md border-[#6D5D6E]`}
                >
                  <h2 className={``}> {skill.category} </h2>
                  <div className={`flex flex-col gap-2`}>
                    {skill.skills.map((item, index) => (
                      <li
                        className={`list-none flex items-center gap-4`}
                        key={index}
                      >
                        {item.icon} {item.name}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
