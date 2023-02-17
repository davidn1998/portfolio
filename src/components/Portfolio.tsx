import {
  SiFirebase,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { ProjectCard } from "./ProjectCard";

type Props = {};

export const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col">
      <p className="mb-8 font-bold">
        Checkout some of my projects 📁 and concepts 🚀
      </p>
      <div className="flex flex-col">
        <ProjectCard
          name="Charcutify"
          description="A web app built with Next.js for creating, customising and visualising custom charcuterie boards. You can also browse premade boards."
          githubURL="https://github.com/davidn1998/charcutify"
          websiteURL="https://zesty-sherbet-2779be.netlify.app/"
          cleanURL="charcutify.netlify.app"
          imgURL="/project_thumbnails/charcutify_thumb.png"
          techIcons={[
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Netlify", icon: <SiNetlify /> },
          ]}
        />
        <ProjectCard
          name="Ludumlib"
          description="A web app built with Next.js on the frontend, Node.js and Express.js for the backend with a MongoDB database. Authentication was built with Firebase. Allows people to discover video games, track the games they have played, view their gaming habits through a personal analytics dashboard and more."
          githubURL="https://github.com/davidn1998/ludumlib"
          websiteURL="https://ludumlib.vercel.app/"
          cleanURL="ludumlib.vercel.app"
          imgURL="/project_thumbnails/ludumlib_thumb.png"
          techIcons={[
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "SASS", icon: <SiSass /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Vercel", icon: <SiVercel /> },
          ]}
          reversed
        />
      </div>
    </div>
  );
};
