import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminSignup from './components/AdminSignup'
import AdminLogin from './components/AdminLogin'
import Home from './components/home'
import DataEditing from './components/admin/DataEditing.js';
import FeeReminders from './components/admin/FeeReminders';
import ScholarshipNotifications from './components/admin/ScholarshipNotifications';
import Admin from './components/admin/CertificateDistribution';
import CertificateRequest from './components/admin/CertificateRequest';
import NoticeUpdates from './components/admin/NoticeUpdates';
import Navbar from './components/admin/Navbar';
import AdminRoutes from './components/admin/routes'
import AdminPage from './components/admin/Adminpage';

import { UserContext } from './App'

function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Home />} />  
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path='/adminpage' element={<AdminPage/>} />
            <Route path='/admmin' element={<AdminRoutes/>}/>
            <Route path="/data-editing" element={<DataEditing />} />
            <Route path="/fee-reminders" element={<FeeReminders />} />
          <Route path="/scholarship-notifications" element={<ScholarshipNotifications />} />
          <Route path="/certificate-distribution" element={<AdminPage />} />
          <Route path="/certificaterequest" element={<CertificateRequest />} />
          <Route path="/notice-updates" element={<NoticeUpdates />} />
            
          </>
        )}
       

      </Routes>
    </>
  )
}

export default RoutesComp
