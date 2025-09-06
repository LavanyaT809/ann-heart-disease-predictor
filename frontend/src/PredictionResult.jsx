import React from 'react';

const PredictionResult = ({ resultData, onBackClick }) => {
    if (!resultData) {
        return <div>Loading results...</div>; // Handle case where data isn't available yet
    }

    return (
        <div className="result-container">
            <button className="back-btn" onClick={onBackClick}>
                ← Back to Predictor
            </button>
            <div className="card result-summary">
                <h2>{resultData.result}</h2>
                <p>
                    <strong>Probability:</strong> {resultData.probability}%
                </p>
                <p>
                    <strong>Risk Category:</strong> {resultData.risk_category}
                </p>
            </div>
            <div className="card">
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
                                <td style={{ color: item.color }}>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card">
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
                        {resultData.explanation.map((item, index) => (
                            <tr key={index}>
                                <td>{item.feature}</td>
                                <td>{item.value}</td>
                                <td>{item.impact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card">
                <h3>Feature Contribution Plot</h3>
                {resultData.shap_plot_url && (
                    <img src={resultData.shap_plot_url} alt="SHAP Plot" />
                )}
            </div>
            <div className="card">
                <h3>Personalized Lifestyle Recommendations</h3>
                <ul>
                    {resultData.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
};

export default PredictionResult;