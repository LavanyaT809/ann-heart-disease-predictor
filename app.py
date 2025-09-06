import os
import numpy as np
from flask import Flask, jsonify, request, send_from_directory
from keras.models import load_model
from flask_cors import CORS

# --- Custom Utility Imports ---
# NOTE: These files are assumed to be in the `utils` directory
from dashboard_utils import ensure_dashboard
from utils.explain import explain_prediction, save_shap_plot
from utils.ranges import compare_with_ranges
from utils.recommendations import generate_recommendations

# --- Flask App Initialization ---
# Set static_folder to frontend/dist to serve React build
app = Flask(__name__, static_folder='frontend/dist', static_url_path='')
CORS(app)  # Enable CORS for all routes

# --- Load Trained ML Model ---
model = load_model("heart_disease_model.h5")

# Feature names (order must match model input)
FEATURE_NAMES = [
    "age", "sex", "cp", "trestbps", "chol",
    "fbs", "restecg", "thalach", "exang",
    "oldpeak", "slope", "ca", "thal"
]

# ------------------- ROUTES -------------------

@app.route("/predict", methods=["POST"])
def predict():
    """
    Handles prediction requests from the React frontend.
    It expects a JSON payload and returns a JSON response.
    """
    try:
        data = request.get_json()

        features = np.array([[
            int(data["age"]),
            int(data["sex"]),
            int(data["chestPainType"]),
            int(data["restingBP"]),
            int(data["cholesterol"]),
            int(data["fastingBloodSugar"]),
            int(data["restECG"]),
            int(data["maxHeartRate"]),
            int(data["exerciseAngina"]),
            float(data["stDepression"]),
            int(data["slope"]),
            int(data["majorVessels"]),
            int(data["thal"])
        ]])

        pred = model.predict(features)[0][0]
        probability = round(float(pred) * 100, 2)

        if probability < 30:
            risk_category = "🟢 Low Risk"
        elif probability < 70:
            risk_category = "🟡 Medium Risk"
        else:
            risk_category = "🔴 High Risk"

        result = "⚠️ Heart Disease Detected" if pred >= 0.5 else "✅ No Heart Disease"

        explanation = explain_prediction(features, FEATURE_NAMES)
        shap_plot_path = save_shap_plot(features, FEATURE_NAMES)

        health_comparison = compare_with_ranges(features, FEATURE_NAMES)
        recommendations = generate_recommendations(features, FEATURE_NAMES)

        host = request.host_url.rstrip('/')

        return jsonify({
            "result": result,
            "probability": probability,
            "risk_category": risk_category,
            "explanation": explanation,
            "shap_plot_url": f"{host}/static/plots/{os.path.basename(shap_plot_path)}",
            "health_comparison": health_comparison,
            "recommendations": recommendations,
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Serve React frontend at root
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')


# Serve static files (e.g., SHAP plot images)
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


# Catch-all route to support React Router for client-side routing
@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/dashboard")
def dashboard():
    return jsonify({"message": "Dashboard API endpoint."})


# ------------------- MAIN -------------------
if __name__ == "__main__":
    app.run(debug=True, port=5000)














# import os
# import numpy as np
# from flask import Flask, jsonify, request, send_from_directory
# from keras.models import load_model
# from flask_cors import CORS

# # --- Custom Utility Imports ---
# # NOTE: These files are assumed to be in the `utils` directory
# from dashboard_utils import ensure_dashboard
# from utils.explain import explain_prediction, save_shap_plot
# from utils.ranges import compare_with_ranges
# from utils.recommendations import generate_recommendations

# # --- Flask App Initialization ---
# # The 'static_url_path' tells Flask where to serve static files from.
# app = Flask(__name__, static_url_path='/static')
# CORS(app) # Enable CORS for all routes

# # --- Load Trained ML Model ---
# # Make sure your model file is in the root directory
# model = load_model("heart_disease_model.h5")

# # Feature names (order must match model input)
# FEATURE_NAMES = [
#     "age", "sex", "cp", "trestbps", "chol",
#     "fbs", "restecg", "thalach", "exang",
#     "oldpeak", "slope", "ca", "thal"
# ]

# # ------------------- ROUTES -------------------

# @app.route("/predict", methods=["POST"])
# def predict():
#     """
#     Handles prediction requests from the React frontend.
#     It expects a JSON payload and returns a JSON response.
#     """
#     try:
#         # 1️⃣ Collect inputs from the JSON request body
#         data = request.get_json()

#         # Create a NumPy array with the correct order and data types
#         features = np.array([[
#             int(data["age"]),
#             int(data["sex"]),
#             int(data["chestPainType"]),
#             int(data["restingBP"]),
#             int(data["cholesterol"]),
#             int(data["fastingBloodSugar"]),
#             int(data["restECG"]),
#             int(data["maxHeartRate"]),
#             int(data["exerciseAngina"]),
#             float(data["stDepression"]),
#             int(data["slope"]),
#             int(data["majorVessels"]),
#             int(data["thal"])
#         ]])

#         # 2️⃣ Model prediction (probability)
#         pred = model.predict(features)[0][0]
#         probability = round(float(pred) * 100, 2)

#         # 3️⃣ Risk categorization
#         if probability < 30:
#             risk_category = "🟢 Low Risk"
#         elif probability < 70:
#             risk_category = "🟡 Medium Risk"
#         else:
#             risk_category = "🔴 High Risk"

#         result = "⚠️ Heart Disease Detected" if pred >= 0.5 else "✅ No Heart Disease"

#         # 4️⃣ Explainability (SHAP values + top features)
#         explanation = explain_prediction(features, FEATURE_NAMES)
#         shap_plot_path = save_shap_plot(features, FEATURE_NAMES)

#         # 5️⃣ Compare inputs with healthy ranges
#         health_comparison = compare_with_ranges(features, FEATURE_NAMES)

#         # 6️⃣ Generate personalized lifestyle recommendations
#         recommendations = generate_recommendations(features, FEATURE_NAMES)

#         # 7️⃣ Return all data as a JSON object
#         return jsonify({
#             "result": result,
#             "probability": probability,
#             "risk_category": risk_category,
#             "explanation": explanation,
#             "shap_plot_url": f"http://127.0.0.1:5000/static/plots/{os.path.basename(shap_plot_path)}",
#             "health_comparison": health_comparison,
#             "recommendations": recommendations,
#         })
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # This route serves your static image files.
# @app.route('/static/<path:path>')
# def send_static(path):
#     return send_from_directory('static', path)

# # This is a dummy route for the "Explore More" link in the React app.
# @app.route("/dashboard")
# def dashboard():
#     return jsonify({"message": "Dashboard API endpoint."})

# # ------------------- MAIN -------------------
# if __name__ == "__main__":
#     app.run(debug=True, port=5000)





