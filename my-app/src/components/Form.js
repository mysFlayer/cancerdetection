import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './FormComponent.css';
import axios from 'axios';

function Main() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      radius_mean: '',
      texture_mean: '',
      perimeter_mean: '',
      area_mean: '',
      smoothness_mean: '',
      compactness_mean: '',
      concavity_mean: '',
      concave_points_mean: '',
      symmetry_mean: '',
      fractal_dimension_mean: '',
    });
  
    const sendFormData = async (data) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/submit-form/', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Form submitted successfully');
        const result = response.data;
        console.log(result)
        navigate('/success', { state: { data: result } });
      } catch (error) {
        console.error('Form submission failed', error.response.data);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      await sendFormData(formData);
    };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {Object.keys(formData).map((key) => (
        <div className="form-group" key={key}>
          <label htmlFor={key}>{key.toUpperCase()}</label>
          <input
            type="number"
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      ))}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default Main;