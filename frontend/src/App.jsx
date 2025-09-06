
import React, { useState } from 'react';
import './CardioCare.css';
import PredictionForm from './PredictionForm';
import PredictionDashboard from './assets/PredictionDashboard'; // Correct import path
import adultsImage from './assets/adults.png'; // Import your image here

// ICONS (using inline SVG for simplicity)
const HeartBurnIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BreathingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V9h2v4zm4 4h-2v-2h2v2zm0-4h-2V9h2v4z" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DizzinessIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2v20M2 12h20M7.5 4.25c1.87 2.16 2.5 3.5 4.5 4.75 2 1.25 4.13 2.59 5 4.5" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ECGIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7l1.5-3L15 7l3.5-3L22 7.5l-3.5 3L22 14h-3.5l-3.5-3L12 14V7z" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SymptomsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Heart burn",
      icon: <HeartBurnIcon />,
      imageUrl: "https://www.crmcinc.org/wp-content/uploads/2019/04/heart-disease-in-women.jpg"
    },
    {
      id: 2,
      title: "Chest discomfort",
      icon: <HeartIcon />,
      imageUrl: "https://medlineplus.gov/images/HeartDiseases_share.jpg"
    },
    {
      id: 3,
      title: "Shortness of breath",
      icon: <BreathingIcon />,
      imageUrl: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/types_of_breathing_problems_explained_bigbead/1800x1200_types_of_breathing_problems_explained_bigbead.jpg"
    },
    {
      id: 4,
      title: "Dizziness",
      icon: <DizzinessIcon />,
      imageUrl: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/tips_for_daily_living_with_hattrr_with_polyneuropathy_slideshow/1800ss_getty_rf_feeling_dizzy_after_standing.jpg"
    },
    {
      id: 5,
      title: "Irregular heartbeats",
      icon: <ECGIcon />,
      imageUrl: "https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--057cd04e-5a26-47a2-a967-22d1f9108a6d/arrhythmia-abnormal-heartbeat-sudden-cardiac-arrest-b.jpg?preferwebp=true"
    },
  ];

  return (
    <section className="symptoms-section" style={{ marginTop: "24px" }}>
      <div className="symptoms-header" style={{ fontSize: "1.18rem", fontWeight: "bold" }}>
        <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>CardioCare</span>
        <span style={{ color: '#333', fontWeight: "500" }}>
          &nbsp;could be right for you if you have either of the following symptoms, or if you previously weren't able to capture your symptoms.
        </span>
      </div>
      <div className="card-container">
        {cards.map(card => (
          <div
            key={card.id}
            className={`symptom-card ${hoveredCard === card.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-background" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="card-content">
              <div className="card-icon">{card.icon}</div>
              <p className="card-title">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

function App() {
  const [currentView, setCurrentView] = useState('homepage');
  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setCurrentView('form');
  };

  const handlePredict = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          age: parseInt(formData.age),
          sex: parseInt(formData.sex),
          chestPainType: parseInt(formData.chestPainType),
          restingBP: parseInt(formData.restingBP),
          cholesterol: parseInt(formData.cholesterol),
          fastingBloodSugar: parseInt(formData.fastingBloodSugar),
          restECG: parseInt(formData.restECG),
          maxHeartRate: parseInt(formData.maxHeartRate),
          exerciseAngina: parseInt(formData.exerciseAngina),
          stDepression: parseFloat(formData.stDepression),
          slope: parseInt(formData.slope),
          majorVessels: parseInt(formData.majorVessels),
          thal: parseInt(formData.thal),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPredictionData(data);
      setCurrentView('dashboard');
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    setCurrentView('form');
    setPredictionData(null);
  };

  // New handler to go back to homepage from dashboard
  const handleHomeClick = () => {
    setCurrentView('homepage');
    setPredictionData(null);
  };

  return (
    <div className="cardio-care-container">
      {isLoading ? (
        <div className="loading-screen">Loading...</div>
      ) : (
        <>
          {currentView === 'homepage' && (
            <>
              <header className="navbar">
                <div className="logo">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>C</span>ardio
                  <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>C</span>are
                </div>
                {/* Nav links removed as requested */}
                <button className="get-started-btn" onClick={handleGetStarted}>Get Started</button>
              </header>

              <section className="hero-section">
                <div className="hero-content">
                  <h1>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}>AI-powered prediction of </span>
                    <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>heart disease</span>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}> risk in minutes </span>
                  </h1>
                  <p style={{ fontSize: '1.15rem', fontWeight: '500' }}>
                    Enter your age, cholesterol, blood pressure, blood sugar, and more to get an instant risk score with accurate risk percentage and <span style={{ fontWeight: "bold" }}>easy-to-understand health insights</span>.
                  </p>
                </div>
              </section>

              <section
                className="how-it-works-section"
                id="how-it-works"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div className="how-it-works-content" style={{ flex: 1 }}>
                  <h2 style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: '6px' }}>
                    <span style={{ color: '#333' }}>How&nbsp;</span>
                    <span>
                      <span style={{ color: '#4CAF50', letterSpacing: '2px', fontWeight: 'bold' }}>C</span>ardio
                      <span style={{ color: '#4CAF50', letterSpacing: '2px', fontWeight: 'bold' }}>C</span>are
                    </span>
                    <span style={{ color: '#333', marginLeft: '12px' }}>works</span>
                  </h2>

                  <p style={{ marginBottom: '12px', fontSize: '1.15rem', fontWeight: '500' }}>
                    CardioCare instantly analyzes your health details and gives you a clear, AI-powered heart risk report.
                  </p>
                  <ul
                    style={{
                      marginTop: '12px',
                      marginBottom: '30px',
                      listStyle: 'none',
                      paddingLeft: 0,
                      fontSize: '1.15rem',
                      fontWeight: '500',
                    }}
                  >
                    <li style={{ marginBottom: '14px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: "bold", marginRight: "12px" }}>✔</span>
                      Risk score (%) with Low / Medium / High levels
                    </li>
                    <li style={{ marginBottom: '14px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: "bold", marginRight: "12px" }}>✔</span>
                      Key factors impacting your heart health
                    </li>
                    <li style={{ marginBottom: '14px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: "bold", marginRight: "12px" }}>✔</span>
                      Easy-to-understand insights with explanations
                    </li>
                    <li style={{ marginBottom: '14px' }}>
                      <span style={{ color: '#4CAF50', fontWeight: "bold", marginRight: "12px" }}>✔</span>
                      Personalized lifestyle recommendations
                    </li>
                  </ul>
                  <button className="get-started-btn" onClick={handleGetStarted}>
                    Get Started
                  </button>
                </div>
                <div
                  style={{
                    flex: 0.8,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={adultsImage}
                    alt="Adults at risk infographic"
                    style={{
                      maxWidth: '300px',
                      width: '90%',
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(76,175,80,0.11)',
                      backgroundColor: '#f0f8f0',
                    }}
                  />
                </div>
              </section>

              <SymptomsSection />
            </>
          )}

          {currentView === 'form' && <PredictionForm onPredict={handlePredict} />}

          {currentView === 'dashboard' && (
            <PredictionDashboard
              resultData={predictionData}
              onBackClick={handleBackClick}
              onHomeClick={handleHomeClick} // Pass home click handler here
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;




