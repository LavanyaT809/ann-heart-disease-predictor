# Heart Disease Predictor – Interactive ML Web App for Risk Analysis & Personalized Insights
A full-stack AI solution leveraging an Artificial Neural Network to predict heart disease risk from clinical features.This platform enables users to enter personal health data and instantly receive AI-powered risk predictions alongside detailed dashboard analyses, SHAP-based explanations, and tailored lifestyle recommendations!

Instead of generic reports, the app uses a pre-trained artificial neural network model for accurate risk scoring and provides interpretable visualizations.
## 🔗 Project Links

- **Live Demo:** [Heart Disease Predictor – Live Demo](https://ann-heart-disease-predictor-4.onrender.com/)
- **GitHub Repository:** [https://github.com/LavanyaT809/ann-heart-disease-predictor](https://github.com/LavanyaT809/ann-heart-disease-predictor)

## 🧰 Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
![SHAP](https://img.shields.io/badge/SHAP-FF9800?style=for-the-badge)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
## 📸 Screenshots

### 🏠 Homepage

Visualizes AI-powered heart disease risk prediction and interactive health insights. Users can explore key health statistics, actionable recommendations, and personalized risk analysis all in one modern dashboard

<img width="899" height="454" alt="home1" src="https://github.com/user-attachments/assets/5d8b182b-dffa-4297-899f-330afdcbf504" />

<img width="899" height="454" alt="home2final" src="https://github.com/user-attachments/assets/f6f1e31b-637c-4106-89b5-791b69d725ee" />








---
### 📝 Patient Entry Form

A clean and intuitive form for users to enter clinical details and instantly receive their heart disease risk score, supporting quick and personalized assessment for early detection.
<img width="274" height="454" alt="form" src="https://github.com/user-attachments/assets/fb33cc94-af8b-4154-b86d-55afad5bf943" />


---

### 📊 Detailed Insights

Uses a trained artificial neural network (ANN) analyzing 13 clinical features to predict heart disease risk. Displays risk probability, key feature impacts via SHAP, health comparisons, and personalized lifestyle advice for actionable insights.
<img width="899" height="454" alt="dashboard" src="https://github.com/user-attachments/assets/f655ae46-72ab-43c5-8425-c7b152ab7570" />

## 🚀 Features

- **Trained Artificial Neural Network** (ANN) model leveraging dense layers and nonlinear activations for accurate heart disease risk prediction.
  
- Uses **UCI Cleveland dataset** with 13 key clinical features: age, sex, chest pain, blood pressure, cholesterol, fasting blood sugar, ECG, thalach, exercise angina, ST depression, slope, major vessels, thal.
  
- **Delivers real-time probability scores** and categorizes risk as Low, Medium, or High based on model output.
  
- **Integrated SHAP explanations** highlight feature contributions and promote AI interpretability for each patient input.
  
- **Health comparison table** dynamically benchmarks user values against clinical normal ranges.
  
- **Personalized lifestyle recommendations** generated from abnormal feature values.
  
- **Achieves strong model accuracy**: **92%** (precision: 0.91/0.93, recall: 0.94/0.89, F1-score: 0.92/0.91).
  
- **Responsive dashboard UI** built with React for seamless patient entry, result visualization, and interactivity.
  
- **Fast and secure API** communication powered by Flask backend.
 ## 🛠️ Tech Stack

| Layer      | Technologies Used                                                  |
|------------|-------------------------------------------------------------------|
| Frontend   | React.js, JavaScript (ES6+), HTML5, CSS3                          |
| Styling    | Custom CSS (modular per component),Responsive Web Design |
| ML Model   | Keras, TensorFlow – Artificial Neural Network (ANN) architecture   |
| Data       | UCI Cleveland Heart Disease Dataset (CSV)                         |
| Backend    | Flask backend serving AI-powered prediction and SHAP explanation logic to the React frontend    |
| Explainability | SHAP – Feature impact visualization and interpretability       |
| Build      | Vite.js – Fast frontend build and bundling                        |
| Deploy     | Render – Cloud deployment (full-stack Flask + React app)           |

## 🧠 Why I Built This

 Heart disease is a leading cause of death worldwide, affecting roughly 1 in 3 adults. With millions losing their lives each year, I wanted to leverage machine learning to offer accessible, real-time risk assessments that empower individuals to understand and manage their heart health proactively.This project is driven by the motivation to apply technology in solving critical health problems and contribute to improving lives.
 
## 🚀 Getting Started

From setup to prediction in minutes!

📦 **Prerequisites**

- Python 3.8+ installed
  
- Node.js (v16+ recommended) and npm for frontend
  
- pip for installing Python packages

🛠️ **Installation Steps**

Follow these steps to run the project locally:

```bash
1. Clone the repository  
   git clone https://github.com/LavanyaT809/ann-heart-disease-predictor.git

2. Navigate to the project folder  
   cd heart-disease-predictor

3. Set up the backend  
   - Install dependencies:  
     pip install -r requirements.txt
   - (Optional) Download the UCI Cleveland dataset to /data if not included.

4. Start the Flask backend server  
   python app.py

5. Set up the frontend  
   - Navigate to frontend folder:  
     cd frontend  
   - Install frontend dependencies:  
     npm install 
   - Start the development server:  
     npm run dev
```

🌐 **Access the Web App**  
After running both servers, open:  
http://localhost:5173/

## 📁 Project Structure

├── data/
│   └── processed.cleveland.data        # UCI Heart Disease dataset
├── frontend/
│   ├── public/                        # Frontend static assets
│   └── src/
│       ├── assets/                    # Images and SVGs for UI
│       ├── App.css                    # Global app styles
│       ├── CardioCare.css             # Core dashboard styles
│       ├── App.jsx                    # Main app structure/routing
│       ├── PredictionForm.jsx         # Patient detail entry form component
│       ├── PredictionResult.jsx       # Results dashboard component
│       ├── PredictionDashboard.jsx    # Layout for dashboard sections & charts
│       ├── index.css                  # General stylesheet
│       └── main.jsx                   # React/Vite frontend entry point
├── static/
│   └── plots/                         # Generated SHAP and result visualizations
│   └── style.css                      # Shared static styles
├── utils/
│   ├── explain.py                     # ML explainability (SHAP logic)
│   ├── ranges.py                      # Health metric normal ranges
│   ├── recommendations.py             # Personalized advice logic
│   └── dashboard_utils.py             # Helper functions for dashboard
├── heart_disease_model.h5             # Trained ANN model file
├── app.py                             # Flask backend server
├── HeartDiseasePrediction.ipynb        # Model development Jupyter notebook
├── requirements.txt                   # Python dependencies
├── package.json                       # Frontend dependencies and scripts
├── README.md                          # Project overview & documentation


## 🔭 Future Scope

- Integrate wearable device data (e.g., heart rate monitors, fitness trackers) for continuous real-time health monitoring and risk updates.
- Incorporate advanced deep learning architectures like LSTM or transformers to model temporal health data and improve prediction accuracy.
- Expand the model to support detection of additional cardiovascular conditions beyond heart disease for broader health insight.
- Add telemedicine features to connect users with healthcare providers for faster consultations based on risk analysis.

## 📚 What I Learned

✅ **Technical Learnings**
- Applied machine learning practically by building and training an artificial neural network (ANN) from clinical data, gaining deeper insight into model architecture, evaluation, and interpretability.
- Learned to integrate backend (Flask) and frontend (React) for seamless user experiences and real-time AI predictions.
- Implemented SHAP for transparent, explainable AI, and discovered the value of model interpretability in healthcare.
- Improved skills in data preprocessing, handling feature engineering, and visualizing analytical results on dashboard UIs.
- Gained experience debugging, optimizing, and deploying a full-stack ML application.

💡 **Personal & Adaptive Growth**
- Strengthened a problem-solving mindset by addressing real-world health challenges, adapting to new tools, and continuously learning from setbacks.
- Developed a user-centric approach, making clinical predictions understandable and actionable for diverse users.
- Learned the value of collaboration and feedback through iterative improvement and seeking clarity from documentation, research, and testing.
- Gained perspective on how technology can make a positive difference when paired with empathy and real-life applications.

## 🤝 Contributing

Contributions are welcome and appreciated! For major changes, please open an issue first to discuss your suggestions or proposed improvements.

## 💬 Support

For queries, suggestions, or feedback, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/lavanya-tuptewar).

## 📜 License

This project is licensed under the [MIT License](https://github.com/LavanyaT809/ann-heart-disease-predictor/blob/main/LICENSE).




