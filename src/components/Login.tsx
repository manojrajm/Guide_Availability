import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import "../css/login.css";

interface LoginProps {
  onLogin: () => void; 
}

interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => { // Add LoginProps to the component type definition
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Submitting form...");
    try {
      // Perform login
      const result = await axios.post("http://localhost:5000/login", loginData);
      console.log("Response:", result.data);

      // Call the onLogin callback function to indicate successful login
      onLogin();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container">
      <div className="title">Login</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Username:</span>
              <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={loginData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password:</span>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button">
              <input className="box" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
