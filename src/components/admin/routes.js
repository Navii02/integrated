import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataEditing from './DataEditing';
import FeeReminders from './FeeReminders';
import ScholarshipNotifications from './ScholarshipNotifications';
import AdminPage from './CertificateDistribution';
import CertificateRequest from './CertificateRequest';
import NoticeUpdates from './NoticeUpdates';
import Navbar from './Navbar';



function App() {
  return (
   
    <Router>
      
        <Navbar />
        <Routes>
        <Route exact path="/" element={<NoticeUpdates />} />
          <Route path="/data-editing" element={<DataEditing />} />
          <Route path="/fee-reminders" element={<FeeReminders />} />
          <Route path="/scholarship-notifications" element={<ScholarshipNotifications />} />
          <Route path="/certificate-distribution" element={<AdminPage />} />
          <Route path="/certificaterequest" element={<CertificateRequest />} />
          <Route path="/notice-updates" element={<NoticeUpdates />} />
         
        </Routes>
       
    </Router>
  );
}

export default App;
