

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Table from "./Pages/Table";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add form data to users array
    setUsers([...users, formData]);

    // Navigate to table page
    navigate("/table");

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log("Updated Users List:", users);
  }, [users]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <div className="form-box">
              <h2>Login Form</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input type="email" name="email" placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required />

                <inpu type="password" name="password" placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        }
      />

      <Route path="/table" element={<Table users={users} />} />
    </Routes>
  );
}

export default App;