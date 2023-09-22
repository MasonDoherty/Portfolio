import React, { useState } from 'react';
import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModalProjectCard from '../ModalProjectCard/ModalProjectCard';

const ProjectCard = ({ project, onClick }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={s.card}>
        <div className={s.cardWrapper}>
          <Link
            to={`/project/${project.id}`}
            state={{ background: location }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={project.image?.src || ''}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={project.image?.placeholderSrc || ''}
            />
          </Link>

          <div className={s.cardBody}>
            <h3 className={s.title}>{project.title}</h3>
            <p className={s.description}>{project.description}</p>
            <button onClick={handleOpenModal}>Open Modal</button>
          </div>
        </div>
      </li>

      {isModalOpen && (
        <ModalProjectCard
          id={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          links={project.links}
          technologies={project.technologies}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
