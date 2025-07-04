import { Metadata } from "next";
import { FaAngular, FaCss3, FaExternalLinkAlt } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiNextdotjs } from "react-icons/si";
import { SendHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects 👨🏽‍💻",
  description: "Portfolio designed and developed by Nima",
};

export default async function Project() {
  const experiences = [
    {
      title: "Jr Software Developer",
      location: "Property Credit, Gold Coast",
      decription:
        "As a Software Developer Intern at Property Credit, I contributed to building scalable and modern web applications by collaborating closely with designers and developers. My role focused on full-stack development and infrastructure optimization.",
      contributions: [
        "Built reusable, responsive UI components using React and Next.js",
        "Integrated third-party APIs to ensure seamless data flow and user interaction",
        "Designed and maintained Supabase database schemas for application data",
        " Implemented AWS S3 for secure file and image storage",
        "Worked in a cross-functional team to deliver high-quality software features",
        "Wrote clear and maintainable documentation for codebases, APIs, and databases",
      ],
    },
  ];

  const projects = [
    {
      name: "Upperwestside Cafe",
      completionDate: "Febuary 2022 - June 2022",
      description:
        "I built a full-stack web app for a Brisbane Airport cafe, enabling online food ordering and payments. Using Angular and Firebase, I managed architecture, development, and deployment. The project emphasized efficiency and usability, earning a High Distinction for its performance and functionality.",

      tech: [
        {
          name: "Angular",
          icon: <FaAngular />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
        },
        {
          name: "NoSQL",
          icon: <SiMongodb />,
        },
      ],
      link: "https://upperwestsidedeli.web.app/",
    },

    {
      name: "Bigstore E-commerce",
      completionDate: "Jan 2025 - March 2025",
      description:
        "BigStore is a demo e-commerce site showcasing my skills in Next.js, Supabase, and Chakra UI. It features product listings, a cart system, authentication, and email confirmations via MailerSend. Users can manage orders, but it's purely for demonstration purposes.",

      tech: [
        {
          name: "Next JS",
          icon: <SiNextdotjs />,
        },
        {
          name: "Supabase",
          icon: <SiFirebase />,
        },
        {
          name: "Chakra UI",
          icon: <FaCss3 />,
        },
      ],
      link: "https://bigstores.nimaphuntsho.com/",
    },

    {
      name: "Zamlhayangkel Tours and Travel",
      completionDate: "October 2023 - November 2023",
      description:
        "I built a responsive travel agency website for a Bhutanese client using Angular and Firebase. It enables users to explore packages, book trips, and manage itineraries with real-time updates. The project emphasizes user-centric design, secure data handling, and seamless performance.",

      tech: [
        {
          name: "Angular",
          icon: <FaAngular />,
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
        },
        {
          name: "NoSQL",
          icon: <SiMongodb />,
        },
      ],
      link: "https://zamlhayangkhel.com/",
    },
  ];
  return (
    <>
      <div className="flex flex-col flex-1  justify-center">
        <div className={`flex flex-col gap-4  mt-5`}>
          <div className="flex flex-col gap-2">
            <h1 className="md:text-4xl text-2xl">Experience</h1>
            {experiences.map((experience, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div>
                  <h2 className="text-xl"> {experience.title} </h2>
                  <h3> {experience.location} </h3>
                </div>
                <p> {experience.decription} </p>
                <div>
                  {experience.contributions.map((contribution, index) => (
                    <div className="flex gap-3 items-center" key={index}>
                      <SendHorizontal size="15px" />
                      <li> {contribution} </li>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={`flex flex-col gap-4`}>
            <h1 className={`md:text-4xl text-2xl`}>Projects</h1>
            <div className={`flex overflow-x-auto gap-4 `}>
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between gap-4 border-1 w-[20rem] min-w-[20rem] p-5 rounded-md border-[#6D5D6E]`}
                >
                  <div className={`flex flex-col gap-4`}>
                    <div>
                      <div className={`flex items-center justify-between `}>
                        <h2 className={``}> {item.name} </h2>
                        <a target="_blank" href={item.link}>
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                      <p className={`text-[#A78295]`}>
                        {" "}
                        {item.completionDate}{" "}
                      </p>
                    </div>
                    <p className={`text-justify`}>{item.description}</p>
                  </div>
                  <div className={`flex gap-2 flex-wrap`}>
                    {item.tech.map((element, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 bg-[#3F2E3E] p-2 rounded-lg `}
                      >
                        {element.icon} {element.name}
                      </div>
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
