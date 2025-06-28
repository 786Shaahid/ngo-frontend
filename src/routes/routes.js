
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Education } from '../components/Education';
import { OurMission } from '../components/OurMission';
import { OurTeam } from '../components/OurTeam';
import { Contact } from '../components/ContactUs';
import OurValue from '../components/OurValue';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Volenteer from '../components/Volenteer';
import Events from '../components/Events';
import Careers from '../components/Careers';
import WebLayouts from '../website/common/components/webLayout';
import HomeSection from '../website/home/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WebLayouts />} >
        <Route path='/' element={<HomeSection />} />
        <Route path='/about/mission' element={<OurMission />} />
        <Route path='/events' element={<Events />} />
        <Route path='/career' element={<Careers />} />
        <Route path='/about/value' element={<OurValue />} />
        <Route path='/about/team' element={<OurTeam />} />
        <Route path='/about/contact' element={<Contact />} />
        <Route path='/volunteer/apply' element={<Volenteer />} />
        {/* <Route path='/' element={<Education/>} /> */}
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>
  )
}

export default AppRoutes;