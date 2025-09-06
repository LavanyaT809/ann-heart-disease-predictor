import React, { useState, useEffect } from 'react';

const PredictionForm = ({ onPredict }) => {
  const initialFormData = {
    age: '',
    sex: '',
    chestPainType: '',
    restingBP: '',
    cholesterol: '',
    fastingBloodSugar: '',
    restECG: '',
    maxHeartRate: '',
    exerciseAngina: '',
    stDepression: '',
    slope: '',
    majorVessels: '',
    thal: '',
  };

  const [formData, setFormData] = useState(() => {
    // Load saved form data from localStorage or default
    const savedData = localStorage.getItem('cardioFormData');
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  // Save form data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('cardioFormData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };
      return (
        <div className="prediction-form-container">
            <div className="prediction-form-card">
                <h2>Enter Patient Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group"><label>Age:</label><input type="number" name="age" value={formData.age} onChange={handleInputChange} className="prediction-form-input" required/></div>
                    <div className="form-group"><label>Sex (1=Male, 0=Female):</label><input type="number" name="sex" value={formData.sex} onChange={handleInputChange} className="prediction-form-input" min="0" max="1" required/></div>
                    <div className="form-group"><label>Chest Pain Type (0-3):</label><input type="number" name="chestPainType" value={formData.chestPainType} onChange={handleInputChange} className="prediction-form-input" min="0" max="3" required/></div>
                    <div className="form-group"><label>Resting BP:</label><input type="number" name="restingBP" value={formData.restingBP} onChange={handleInputChange} className="prediction-form-input" required/></div>
                    <div className="form-group"><label>Cholesterol:</label><input type="number" name="cholesterol" value={formData.cholesterol} onChange={handleInputChange} className="prediction-form-input" required/></div>
                    <div className="form-group"><label>Fasting Blood Sugar{'>'}120 (1/0):</label><input type="number" name="fastingBloodSugar" value={formData.fastingBloodSugar} onChange={handleInputChange} className="prediction-form-input" min="0" max="1" required/></div>
                    <div className="form-group"><label>Rest ECG (0-2):</label><input type="number" name="restECG" value={formData.restECG} onChange={handleInputChange} className="prediction-form-input" min="0" max="2" required/></div>
                    <div className="form-group"><label>Max Heart Rate:</label><input type="number" name="maxHeartRate" value={formData.maxHeartRate} onChange={handleInputChange} className="prediction-form-input" required/></div>
                    <div className="form-group"><label>Exercise Angina (1/0):</label><input type="number" name="exerciseAngina" value={formData.exerciseAngina} onChange={handleInputChange} className="prediction-form-input" min="0" max="1" required/></div>
                    <div className="form-group"><label>ST Depression:</label><input type="number" step="any" name="stDepression" value={formData.stDepression} onChange={handleInputChange} className="prediction-form-input" required/></div>
                    <div className="form-group"><label>Slope (0-2):</label><input type="number" name="slope" value={formData.slope} onChange={handleInputChange} className="prediction-form-input" min="0" max="2" required/></div>
                    <div className="form-group"><label>Major Vessels (0-3):</label><input type="number" name="majorVessels" value={formData.majorVessels} onChange={handleInputChange} className="prediction-form-input" min="0" max="3" required/></div>
                    <div className="form-group"><label>Thal (1-3):</label><input type="number" name="thal" value={formData.thal} onChange={handleInputChange} className="prediction-form-input" min="1" max="3" required/></div>
                    <button type="submit" className="predict-btn">Predict</button>
                </form>
            </div>
        </div>
    );
};

export default PredictionForm;






