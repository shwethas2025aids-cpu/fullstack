import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { z } from "zod";

const RegisterSchema = z.object({
  name: z.string().min(3, "name must have minimum of 3 letters"),
  email: z.string().email("Enter Valid Email"),
  password: z.string().min(8, "Password must have minimum of 8 letters"),
});

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // to preserve other fields
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = RegisterSchema.safeParse(formData);
    if (result.success) {
      console.log("Validation successful");
      console.log(formData);
    } else {
      alert("❌"+result.error.issues[0].message);
    }
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your name"
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter your password"
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;