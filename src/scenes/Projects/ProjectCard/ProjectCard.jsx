import React, { useState } from 'react';
import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModalProjectCard from '../ModalProjectCard/ModalProjectCard'; // Replace 'path/to' with the actual path to the component

const ProjectCard = ({
  id,
  image,
  title,
  description,
  links,
  technologies,
}) => {
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
            to={`/project/${id}`}
            state={{ background: location }}
          >
            <LazyLoadImage
              alt="card-img"
              effect="blur"
              src={image.src}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={image.placeholderSrc}
            />
          </Link>

          <div className={s.cardBody}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
            <button onClick={handleOpenModal}>Open Modal</button>
          </div>
        </div>
      </li>

      {isModalOpen && (
        <ModalProjectCard
          id={id}
          image={image}
          title={title}
          description={description}
          links={links}
          technologies={technologies}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
