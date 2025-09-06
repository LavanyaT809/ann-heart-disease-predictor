import React from 'react';
import bodySilhouette from '../assets/body_silhouette.png';

const PredictionDashboard = ({ resultData, onBackClick, onHomeClick }) => {
  if (!resultData) return <div>Loading dashboard...</div>;

  const renderStatusIcon = s =>
    s.includes('Abnormal') ? <span style={{ color: '#F59E42' }}>⚠️</span> :
    s.includes('Normal') ? <span style={{ color: '#43BF4D' }}>✅</span> : "";

  return (
    <div className="dashboard-layout">
      <div className="sidebar-bg">
        <img
          src={bodySilhouette}
          alt="Human body silhouette with heart"
          style={{ maxWidth: "90%", borderRadius: "20px" }}
        />
      </div>

      <div className="cards-area">
        <div className="card-box">
          <h2>Prediction Result</h2>
          <p>
            <strong>Probability:</strong>{' '}
            <span style={{ color: '#43BF4D', fontWeight: 'bold' }}>{resultData.probability}%</span>
          </p>
          <p>
            <strong>Risk Category:</strong>{' '}
            <span style={{ color: '#EF4444', fontWeight: 'bold' }}>{resultData.risk_category}</span>
          </p>
        </div>

        <div className="card-box">
          <h3>Health Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Value</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {resultData.health_comparison.map((item, index) => (
                <tr key={index}>
                  <td>{item.feature}</td>
                  <td>{item.value}</td>
                  <td>{renderStatusIcon(item.status)} {item.status.replace(/^(⚠️|✅)\s*/, '')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-box">
          <h3>Why This Prediction?</h3>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Value</th>
                <th>Impact</th>
              </tr>
            </thead>
            <tbody>
              {resultData.explanation.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.feature}</td>
                  <td>{item.value}</td>
                  <td>{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-box">
          <h3>Personalized Lifestyle Recommendations</h3>
          <ul>
            {resultData.recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
          </ul>
        </div>

        <div className="card-box feature-contribution" style={{ gridColumn: '1 / span 2' }}>
          <h3>Feature Contribution Plot</h3>
          {resultData.shap_plot_url && (
            <img
              src={resultData.shap_plot_url}
              alt="SHAP Plot"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '8px' }}
            />
          )}
        </div>

        <div style={{ gridColumn: '1 / span 2', marginTop: "20px", display: 'flex', gap: '12px' }}>
          <button
            onClick={onBackClick}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
          >
            ← Back to Predictor
          </button>
          <button
            onClick={onHomeClick}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
          >
             Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionDashboard;




