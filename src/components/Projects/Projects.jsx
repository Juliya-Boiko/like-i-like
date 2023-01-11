import { ProgectItem } from "./ProjectItem/ProjectItem";
import { data } from "data/data";
import { ProjectsList } from "./Projects.styled";

export const Projects = () => {

  return (
    <ProjectsList>
      {data.map((item) => {
        return (
          <ProgectItem item={item} />
        );
      })}
    </ProjectsList>
  );
};