## Project Guide Web Application

### Purpose of the Project:
 

This is Real time web application is designed to facilitate team management for academic  purposes. It allows users to create teams, add team members, and store team details in a Firebase database. So without stress  students is easily to knw the details of the guide which guide is available

### Features

1. **User Authentication**:
   - Two types of users: student and staff (guide).
   - Login functionality for both user types.

2. **Team Creation**:
   - Students can create teams after logging in.
   - Each team can have a unique name.

3. **Add Team Members**:
   - Students can add team members by providing their names and roll numbers.
   - Roll numbers must be unique within a team.

4. **View Team Details**:
   - Students can view the details of their teams, including team name and members, in a table structure.

5. **Guide Limitation**:
   - Guides can only choose up to 3 groups to mentor.
   - Once the guide has chosen 3 groups, other students cannot select that guide.

6. **Data Storage**:
   - Team details are stored in a Firebase database for persistence.
   
7. **Download**
    - In that all content and database download in xls and easliy to share the data

### Technologies Used

- **TypeScript**: The primary language for frontend and backend development.
- **Node.js**: Backend runtime environment.
- **Express.js**: Backend framework for routing and server setup.
- **React**: Frontend library for building user interfaces.
- **Firebase**: Database management system for storing team details.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **React Router**: For handling client-side routing in React.
- **Bootstrap**: CSS framework for styling the frontend.

### Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up the Fireabse database and configure the connection in the backend.
5. Run the backend server using `npm run start-server`.
6. Run the frontend server using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

### Authors

* [Manoj Raj M](https://github.com/manojrajm)
### License

This project is licensed under the [MIT License](LICENSE).
