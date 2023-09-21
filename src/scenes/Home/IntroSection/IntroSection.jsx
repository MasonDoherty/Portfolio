import s from './IntroSection.module.scss';
import avatar from '../../../assets/avataaars.png';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              {' '}
              I'm a<b className={s.purple}>
                {' '}
                Full Stack Developer
              </b>{' '}
              with three years of experience <br />
              creating front-end projects, back-end projects as well
              as a <b className={s.purple}>minimum viable product </b>
              for Assign Ref
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  HTML, CSS, Javascript, React, React Native, C#,
                  .Net, SQL
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, constructing RESTful API's and
              designing SQL Databases
            </p>

            <p>
              My field of Interest's are building and maintaining new
              <i>
                <b className={s.purple}> Websites and Apps</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage
            alt="avatar"
            effect="blur"
            className={s.avatarimg}
            src={avatar}
          />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/MasonDoherty"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/mason-heath-doherty/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
