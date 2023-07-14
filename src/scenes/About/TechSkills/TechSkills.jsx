import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNetmagazine,
  DiBootstrap,
  DiGithubBadge,
} from 'react-icons/di';
import { SiCsharp } from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiCsharp />
      </li>
      <li className={s.techIcon}>
        <DiNetmagazine />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>{' '}
      <li className={s.techIcon}>
        <DiGithubBadge />
      </li>
    </ul>
  );
};

export default TechSkills;
