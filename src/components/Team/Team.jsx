//import { BsFilePerson } from "react-icons/bs";

import { TeamList, TeamItem, TeamCard, TeamPhoto, TeamName, TeamPosition } from "./Team.styled";

export const Team = () => {
  return (
    <TeamList>
      <TeamItem>
        <TeamCard>
          <TeamPhoto size="200px" />
          <TeamName>John Dou</TeamName>
          <TeamPosition>designer</TeamPosition>
        </TeamCard>
      </TeamItem>
      <TeamItem>
        <TeamCard>
          <TeamPhoto size="200px" />
          <TeamName>John Dou</TeamName>
          <TeamPosition>designer</TeamPosition>
        </TeamCard>
      </TeamItem>
      <TeamItem>
        <TeamCard>
          <TeamPhoto size="200px" />
          <TeamName>John Dou</TeamName>
          <TeamPosition>designer</TeamPosition>
        </TeamCard>
      </TeamItem>
    </TeamList>
  );
};