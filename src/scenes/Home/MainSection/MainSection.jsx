import s from './MainSection.module.scss';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import photo from '../../../assets/My project.jpg';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Mason Doherty</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full Stack Software Engineer',
              'React Developer',
              '.Net Developer',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>
      <img src={photo} alt="mypic" className={s.photo} />
    </section>
  );
};

export default MainSection;
