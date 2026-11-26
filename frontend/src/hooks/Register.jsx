import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] =useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        const [name,value]=e.target
        setFormData({
            ...formData,//to preserve other fields
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }
    
  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" 
        name="name" 
        onChange={handleChange}
        value={formData.name}
        placeholder="Enter your name"/>
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" 
        name="email" 
        onChange={handleChange}
        value={formData.email}
        placeholder="Enter your email"/>
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" 
        name="password" 
        onChange={handleChange}
        value={formData.password}
        placeholder="Enter your password"/>
        <br />

        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Register