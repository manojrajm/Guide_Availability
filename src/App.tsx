import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import GuideMembers from './components/GuideMembers';
import AddTeamMembers from './components/AddTeamMembers';

interface SubmittedData {
  projectTitle: string; // Include project title
  teamName: string;
  members: Member[];
  guide: string;
}

interface Member {
  name: string;
  rollNumber: string;
  mobileNumber: string;
}

function App() {
  const [submittedData, setSubmittedData] = React.useState<SubmittedData | null>(null);

  // Function to handle form submission in AddTeamMembers
  const handleFormSubmit = (formData: SubmittedData) => {
    setSubmittedData(formData);
  };

  // Sample data for guidemembers
  const sampleGuideMembers = [
    { id: 1, name: 'John Doe', number: '1234567890' },
    { id: 2, name: 'Jane Smith', number: '0987654321' },
    // Add more guide members as needed
  ];

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home submittedData={submittedData ? [submittedData] : null} />} // Pass the submittedData to Home component as an array
          />
          <Route path="/guide-members" element={<GuideMembers />} />
          {/* Pass the guidemembers prop to the AddTeamMembers component */}
          <Route
            path="/team-members"
            element={<AddTeamMembers guidemembers={sampleGuideMembers} onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
