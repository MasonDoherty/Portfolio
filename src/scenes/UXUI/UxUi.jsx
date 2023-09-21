import s from './UXUI.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import UXUICard from './UXUICard/UXUICard';
import data from '../../data/caseStudies';

const Projects = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Case Studies</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few Case Studies I've worked on recently. These
          Case Studies demostate my role in enhancing the user
          experience (UX) and user interface (UI) designs for various
          applications
        </p>

        <ul className={s.projects}>
          {data.map((props) => (
            <UXUICard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
