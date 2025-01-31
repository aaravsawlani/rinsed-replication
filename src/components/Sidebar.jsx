import React from "react";
import { Link } from "react-router-dom";
// ... other imports

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Existing navigation items */}
      {/* ... */}

      {/* Marketing Subheading */}
      <div className="mt-6">
        <h3 className="text-gray-500 uppercase">Marketing</h3>
        <ul className="mt-2">
          <li>
            <Link to="/admin/marketing/create-segment" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Create Segment
            </Link>
          </li>
          <li>
            <Link to="/admin/marketing/view-all-segments" className="block py-2 px-4 hover:bg-gray-200 rounded">
              View All Segments
            </Link>
          </li>
          <li>
            <Link to="/admin/marketing/create-message-campaign" className="block py-2 px-4 hover:bg-gray-200 rounded">
              Create Message Campaign
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 