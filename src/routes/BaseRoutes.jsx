import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalCaseCard from '../scenes/UXUI/ModalCaseCard/ModalCaseCard';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const UXUI = lazy(() => import('../scenes/UXUI/UxUi'));
export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  UXUIS: '/uxuis',
  UXUI: '/uxui/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.UXUIS} element={<UXUI />} />
        <Route path={routes.UXUI} element={<ModalCaseCard />} />

        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path={routes.PROJECT}
            element={<ModalProjectCard />}
          />
          <Route path={routes.UXUI} element={<ModalCaseCard />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
