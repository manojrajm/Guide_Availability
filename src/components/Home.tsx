import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv"; // Import CSVLink
import "../css/Home.css";

interface SubmittedData {
  projectTitle: string;
  teamName: string;
  members: Member[];
  guide: string;
}


interface Member {
  name: string;
  rollNumber: string;
  mobileNumber: string;
}

interface Props {
  submittedData?: SubmittedData[] | null;
}

const Home: React.FC<Props> = () => {
  const submittedDataJSON = localStorage.getItem("submittedDataArray");
  const submittedDataArray: SubmittedData[] | null = submittedDataJSON
    ? JSON.parse(submittedDataJSON)
    : null;

  // Calculate the total number of submitted groups
  const totalGroups = submittedDataArray ? submittedDataArray.length : 0;

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter submitted data based on search term
  const filterData = () => {
    if (!submittedDataArray) return [];
    return submittedDataArray.filter((submittedData) => {
      const memberMatches = submittedData.members.some(
        (member) =>
          member.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return memberMatches;
    });
  };

  // Filtered submitted data based on search term
  const filteredData = filterData();

  // Data for CSV export
  const csvData = filteredData.flatMap((submittedData) =>
    submittedData.members.map((member) => ({
      "Project Title": submittedData.projectTitle, // Include project title in CSV data
      "Team Name": submittedData.teamName,
      "Guide": submittedData.guide,
      "Name": member.name,
      "Roll Number": member.rollNumber,
      "Mobile Number": member.mobileNumber
    }))
  );

  return (
    <div className="home-container">
      {/* Search box */}
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search by roll number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Download button with CSVLink */}
      <CSVLink
        data={csvData}
        filename={"submitted_data.csv"}
        className="download-button"
      >
        <FontAwesomeIcon icon={faDownload} className="download-icon" />
        <span>Download Data</span>
      </CSVLink>

      {/* Total groups submitted box */}
      <div className="total-groups-box">
        <p>Total Groups Submitted: {totalGroups}</p>
      </div>

      {/* Submitted data containers */}
      {filteredData.map((submittedData, index) => (
        <div key={index} className="submitted-data-container">
          <h3>Project Title: {submittedData.projectTitle}</h3> {/* Display project title */}
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Team Name: {submittedData.teamName}</th>
                <th colSpan={2}>Guide: {submittedData.guide}</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.rollNumber}</td>
                  <td>{member.mobileNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Home;
