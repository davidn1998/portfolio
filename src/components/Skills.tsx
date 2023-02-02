import {
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SkillIcon } from "./SkillIcon";

type Props = {};

export const Skills = (props: Props) => {
  return (
    <div className="flex w-full flex-wrap justify-center">
      <SkillIcon
        name="JavaScript"
        url="https://www.javascript.com/"
        icon={<SiJavascript size={100} />}
      />
      <SkillIcon
        name="TypeScript"
        url="https://www.typescriptlang.org/"
        icon={<SiTypescript size={100} />}
      />
      <SkillIcon
        name="HTML5"
        url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        icon={<SiHtml5 size={100} />}
      />
      <SkillIcon
        name="CSS3"
        url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        icon={<SiCss3 size={100} />}
      />
      <SkillIcon
        name="Python"
        url="https://www.python.org/"
        icon={<SiPython size={100} />}
      />
      <SkillIcon
        name="React"
        url="https://reactjs.org/"
        icon={<SiReact size={100} />}
      />
      <SkillIcon
        name="NextJS"
        url="https://nextjs.org/"
        icon={<SiNextdotjs size={100} />}
      />
      <SkillIcon
        name="Django"
        url="https://www.djangoproject.com/"
        icon={<SiDjango size={100} />}
      />
      <SkillIcon
        name="TailwindCSS"
        url="https://tailwindcss.com/"
        icon={<SiTailwindcss size={100} />}
      />
      <SkillIcon
        name="Bootstrap"
        url="https://getbootstrap.com/"
        icon={<SiBootstrap size={100} />}
      />
      <SkillIcon
        name="MongoDB"
        url="https://www.mongodb.com/"
        icon={<SiMongodb size={100} />}
      />
      <SkillIcon
        name="SQL"
        url="https://www.mysql.com/"
        icon={<SiMysql size={100} />}
      />
      <SkillIcon
        name="Figma"
        url="https://www.figma.com/"
        icon={<SiFigma size={100} />}
      />
      <SkillIcon
        name="Github"
        url="https://github.com/"
        icon={<SiGithub size={100} />}
      />
    </div>
  );
};
