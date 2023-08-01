import s from './Projects.module.scss';
import React, { useState } from 'react';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';
import ModalProjectCard from './ModalProjectCard/ModalProjectCard';
const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleOpenModal = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null);
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Projects</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={s.projects}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleOpenModal(project.id)}
            />
          ))}
        </ul>

        {/* Render the modal */}
        {selectedProjectId && (
          <ModalProjectCard
            project={projects.find(
              (project) => project.id === selectedProjectId,
            )}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </BaseLayout>
  );
};

export default Projects;
