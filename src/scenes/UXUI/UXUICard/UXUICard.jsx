import s from './UXUICard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import comingSoonImg from '../../../assets/comingSoon.png';
const UXUICard = ({ id, image, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      {/* <div className={s.cardWrapper}>
        <Link to={`/uxui/${id}`} state={{ background: location }}>
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
        </div>
      </div> */}
      <div className={s.cardWrapper}>
        <Link to={`/uxui/${id}`} state={{ background: location }}>
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={comingSoonImg}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={comingSoonImg}
          />
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>Coming Soon!</h3>
          <p className={s.description}>
            This case study is currently in progress, check back at a
            later time for an update.
          </p>
        </div>
      </div>
    </li>
  );
};

export default UXUICard;
