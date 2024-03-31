import React, { useState, useEffect } from "react";
import "../css/GuideMembers.css"; // Import CSS file

const GuideMembers: React.FC = () => {
  // Sample data for demonstration
  const sampleGuideMembers = [
    { id: 1, name: "John Doe", number: "1234567890" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
    { id: 2, name: "Jane Smith", number: "0987654321" },
  ];

  // State to hold guide members
  const [guideMembers, setGuideMembers] = useState(sampleGuideMembers);

  // useEffect hook to fetch data from API (if applicable)
  useEffect(() => {
    // Replace this with your actual API call to fetch guide members' data
    // Example:
    // fetchGuideMembers()
    //   .then((data) => setGuideMembers(data))
    //   .catch((error) => console.error(error));
  }, []);

  return (
    <div className="guide-members">
      <h2>Guide Members</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {guideMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuideMembers;
