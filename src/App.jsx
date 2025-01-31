import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TodayDashboard from "views/admin/default/Today.jsx";
import CreateSegment from "views/admin/default/marketing/CreateSegment.jsx";
import ViewAllSegments from "views/admin/default/marketing/ViewAllSegments.jsx";
import CreateMessageCampaign from "views/admin/default/marketing/CreateMessageCampaign.jsx";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Sidebar from "components/Sidebar";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin/default" replace />} />
        <Route path="/admin/default/today" element={<TodayDashboard />} />
        <Route path="/admin/marketing/create-segment" element={<CreateSegment />} />
        <Route path="/admin/marketing/view-all-segments" element={<ViewAllSegments />} />
        <Route path="/admin/marketing/create-message-campaign" element={<CreateMessageCampaign />} />
      </Routes>
    </Router>
  );
};

export default App;
