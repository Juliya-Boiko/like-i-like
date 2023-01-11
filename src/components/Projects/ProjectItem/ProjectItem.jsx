import { useState } from "react";
import { Project, ProjectImg, ProjectOverlay, ProjectType, ProjectTitle } from "./ProjectItem.styled";
import { Modal } from "components/common/Modal/Modal";

export const ProgectItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Project key={item.id} onClick={openModal}>
        <ProjectImg src={item.original} alt={item.title} />
        <ProjectOverlay>
          <ProjectType>{item.type} <span>/ /</span></ProjectType>
          <ProjectTitle>{item.title}</ProjectTitle>
        </ProjectOverlay>
      </Project>
      {isModalOpen ? <Modal closeModal={closeModal} item={item} /> : null}
    </>
  );
};