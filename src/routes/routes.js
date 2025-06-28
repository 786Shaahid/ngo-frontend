import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';
import PageLoader from '../components/common/PageLoader';
import WebLayouts from '../website/common/components/webLayout';

// Lazy load components for better performance
const HomeSection = React.lazy(() => import('../website/home/home'));
const OurMission = React.lazy(() => import('../components/OurMission'));
const OurTeam = React.lazy(() => import('../components/OurTeam'));
const Contact = React.lazy(() => import('../components/ContactUs'));
const OurValue = React.lazy(() => import('../components/OurValue'));
const Login = React.lazy(() => import('../components/Login'));
const Signup = React.lazy(() => import('../components/Signup'));
const ProjectsSection = React.lazy(() => import('../components/projects/ProjectsSection'));
const EventsSection = React.lazy(() => import('../components/events/EventsSection'));
const CareersSection = React.lazy(() => import('../components/careers/CareersSection'));

const AppRoutes = () => {
  const { loading, progress } = usePageLoader(1500);

  if (loading) {
    return <PageLoader progress={progress} message="Loading The Help Sansthan..." />;
  }

  return (
    <Suspense fallback={<PageLoader progress={75} message="Loading page..." />}>
      <Routes>
        <Route path="/" element={<WebLayouts />}>
          <Route path='/' element={<HomeSection />} />
          <Route path='/projects' element={<ProjectsSection />} />
          <Route path='/events' element={<EventsSection />} />
          <Route path='/career' element={<CareersSection />} />
          <Route path='/about/mission' element={<OurMission />} />
          <Route path='/about/value' element={<OurValue />} />
          <Route path='/about/team' element={<OurTeam />} />
          <Route path='/about/contact' element={<Contact />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;