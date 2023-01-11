import styled from "styled-components";

export const Project = styled.li`
  position: relative;

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const ProjectImg = styled.img`
  display: block;
  width: 300px;
  @media screen and (min-width: 900px) {
    width: 350px;
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(19, 19, 19, 0.9);
  opacity: 0;
  transition: all 300ms ease-in-out;
`;

export const ProjectType = styled.p`
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 24px;
`;

export const ProjectTitle = styled.p`
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeight.medium};
  font-size: 24px;
`;