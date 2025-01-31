import React, { useState, useEffect } from "react";
import Card from "components/card";

const ViewAllSegments = () => {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    // Placeholder for fetching segments
    const fetchedSegments = [
      { id: 1, name: "Young Professionals", conditions: ["Age > 25", "Location = New York"] },
      { id: 2, name: "Frequent Users", conditions: ["Visits > 10", "Subscription = Premium"] },
    ];
    setSegments(fetchedSegments);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View All Segments</h2>
      <Card extra="p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Segment Name</th>
              <th className="py-2">Conditions</th>
            </tr>
          </thead>
          <tbody>
            {segments.map((segment) => (
              <tr key={segment.id} className="text-center">
                <td className="py-2">{segment.name}</td>
                <td className="py-2">
                  {segment.conditions.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ViewAllSegments; 