import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: 'male',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email.includes('@')) tempErrors.email = 'Invalid email';
    if (formData.password.length < 6)
      tempErrors.password = 'Password must be at least 6 characters';
    if (!formData.agreeTerms)
      tempErrors.agreeTerms = 'You must agree to the terms';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div>
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        {errors.agreeTerms && <span>{errors.agreeTerms}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;