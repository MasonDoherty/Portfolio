import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>Who am I?</h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img
              src="https://ca.slack-edge.com/T08EKJ58F-U04CEPK091V-9bd63d5067e4-512"
              alt="about"
            />
          </div>
        </div>

        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        {/* <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity /> */}
      </div>
    </BaseLayout>
  );
};

export default About;
