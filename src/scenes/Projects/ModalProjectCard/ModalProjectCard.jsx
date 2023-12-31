import s from './ModalProjectCard.module.scss';
import projects from '../../../data/projects';
import { BiLinkExternal } from 'react-icons/bi';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies, description } =
    projects.find((p) => id === p.id);
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, [toggleModal]);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <div className={s.image}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            height="400px"
            placeholderSrc={image.placeholderSrc}
          />
        </div>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          <h3>{description}</h3>

          <div className={s.technologies}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={s.cardFooter}>
          {links && links.site ? (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.site}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Check it Out
            </Button>
          ) : (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              disabled
            >
              In Progress (No Link)
            </Button>
          )}

          {!!links && links.repo && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.repo}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
