import React, { useState, useEffect } from 'react';
import faker from 'faker';

const generateFakeData = () => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      joinDate: faker.date.past().toLocaleDateString(),
      rechargeDate: faker.date.future().toLocaleDateString(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      totalWashes: faker.datatype.number({ min: 0, max: 100 }),
      washesPerMonth: faker.datatype.number({ min: 0, max: 10 }),
    });
  }
  return data;
};

const MembersList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(generateFakeData());
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Members List</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">First Name</th>
            <th className="py-2">Last Name</th>
            <th className="py-2">Join Date</th>
            <th className="py-2">Recharge Date</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Total Washes</th>
            <th className="py-2">Washes/Month</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{member.firstName}</td>
              <td className="py-2">{member.lastName}</td>
              <td className="py-2">{member.joinDate}</td>
              <td className="py-2">{member.rechargeDate}</td>
              <td className="py-2">{member.email}</td>
              <td className="py-2">{member.phone}</td>
              <td className="py-2">{member.totalWashes}</td>
              <td className="py-2">{member.washesPerMonth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList; 