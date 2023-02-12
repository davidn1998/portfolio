import { ProjectCard } from "./ProjectCard";

type Props = {};

export const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="mb-8 font-bold">
        Checkout some of my projects 📁 and concepts 🚀
      </p>
      <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          name="Charcutify"
          description="A web app built with Next.js for creating
          and visualizing custom charcuterie
          boards. Also presents visualizations and
          recipes for premade boards."
          url="https://github.com/davidn1998"
          cleanURL="github.com/davidn1998/charcutify"
          imgURL="/project_thumbnails/charcutify_thumb.png"
        />
      </div>
    </div>
  );
};
