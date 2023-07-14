import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Mason Doherty </span>
        from{' '}
        <span className={s.purple}> Laguna Niguel, California.</span>
        <br />
        Full Stack Software engineer with expertise in <br />
        <span className={s.purple}> .Net, React, and SQL.</span>
        <br />
        <br />
        I have an associates degree in Business.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Fitness
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Hiking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing with my dog
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
