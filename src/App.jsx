import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<Navigate to="/admin/default" replace />} />
        <Route path="/admin/default/today" component={TodayDashboard} />
        <Route path="/admin/marketing/create-segment" component={CreateSegment} />
        <Route path="/admin/marketing/view-all-segments" component={ViewAllSegments} />
        <Route path="/admin/marketing/create-message-campaign" component={CreateMessageCampaign} />
      </Switch>
    </Router>
  );
};

export default App;
