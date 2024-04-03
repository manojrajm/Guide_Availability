import React, { useState } from "react";
import "../css/addteam.css";

interface Member {
  name: string;
  rollNumber: string;
  mobileNumber: string;
}

interface Guide {
  id: number;
  name: string;
  number: string;
}

interface Props {
  guidemembers: Guide[];
  onFormSubmit: (submittedData: {
    teamName: string;
    members: Member[];
    guide: string;
    projectTitle: string; 
  }) => void;
}


const AddTeamMembers: React.FC<Props> = ({ guidemembers, onFormSubmit }) => {
  const [teamName, setTeamName] = useState("");
  const [projectTitle, setProjectTitle] = useState(""); // State for project title
  const [members, setMembers] = useState<Member[]>([
    { name: "", rollNumber: "", mobileNumber: "" },
  ]);
  const [selectedGuide, setSelectedGuide] = useState<string>("");
  const [customGuide, setCustomGuide] = useState<string>("");

  const handleMemberChange = (
    index: number,
    field: keyof Member,
    value: string
  ) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleGuideSelect = (guideName: string) => {
    setSelectedGuide(guideName);
  };

  const handleCustomGuideChange = (value: string) => {
    setCustomGuide(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate project title uniqueness
    if (!isProjectTitleUnique()) {
      alert("Project title must be unique");
      return;
    }

    // Retrieve existing submitted data array from localStorage
    const existingSubmittedDataJSON = localStorage.getItem(
      "submittedDataArray"
    );
    const submittedDataArray: any[] = existingSubmittedDataJSON
      ? JSON.parse(existingSubmittedDataJSON)
      : [];

    // Check if the roll number already exists in another group
    const rollNumberExists = submittedDataArray.some((data) => {
      return data.members.some(
        (existingMember: Member) =>
          existingMember.rollNumber === members[0].rollNumber
      );
    });

    if (rollNumberExists) {
      alert(
        "Roll number already exists in another group. Please use a unique roll number."
      );
      return; // Prevent form submission
    }

    // Check if the selected guide has reached the maximum limit of 3 teams
    const guideTeamsCount = submittedDataArray.filter(
      (data) => data.guide === (selectedGuide || customGuide)
    ).length;

    if (guideTeamsCount >= 3) {
      alert(
        "This guide is already assigned to the maximum number of teams (3). Please select another guide or add a custom guide."
      );
      return; // Prevent form submission
    }

    const formData = {
      teamName,
      members,
      guide: selectedGuide || customGuide,
      projectTitle, // Include project title in form data
    };

    // Append new form data to the existing array
    const updatedSubmittedData = [...submittedDataArray, formData];

    // Store the updated array back in localStorage
    localStorage.setItem(
      "submittedDataArray",
      JSON.stringify(updatedSubmittedData)
    );

    // Reload the page
    window.location.reload();
  };

  const handleAddMember = () => {
    // Only allow adding a member if the current number of members is less than 3
    if (members.length < 3) {
      setMembers([
        ...members,
        { name: "", rollNumber: "", mobileNumber: "" },
      ]);
    }
  };

  // Function to check if project title is unique
  const isProjectTitleUnique = () => {
    // Retrieve existing submitted data array from localStorage
    const existingSubmittedDataJSON = localStorage.getItem(
      "submittedDataArray"
    );
    const submittedDataArray: any[] = existingSubmittedDataJSON
      ? JSON.parse(existingSubmittedDataJSON)
      : [];

    // Check if the project title already exists in the submitted data
    return !submittedDataArray.some((data) => data.projectTitle === projectTitle);
  };

  return (
    <div className="add-team-container">
      <h2>Add Team Members</h2>
      <form className="add-team-form slide-in" onSubmit={handleSubmit}>
        <label>
          Project Title: {/* Input field for project title */}
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Team Name:
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </label>
        {members.map((member, index) => (
          <div key={index}>
            <h3>Member {index + 1}</h3>
            <label>
              Name:
              <input
                type="text"
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, "name", e.target.value)
                }
                required
              />
            </label>
            <label>
              Roll Number:
              <input
                type="text"
                value={member.rollNumber}
                onChange={(e) =>
                  handleMemberChange(index, "rollNumber", e.target.value)
                }
                required
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="text"
                value={member.mobileNumber}
                onChange={(e) =>
                  handleMemberChange(index, "mobileNumber", e.target.value)
                }
                required
                pattern="\d{10}"
                title="Please enter 10-digit mobile number"
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMember}
          disabled={members.length >= 3}
        >
          Add Member
        </button>
        <div>
          <h3>Select Guide:</h3>
          {/* Input field for custom guide */}
          <label>
            Custom Guide:
            <input
              type="text"
              value={customGuide}
              onChange={(e) => handleCustomGuideChange(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTeamMembers;
