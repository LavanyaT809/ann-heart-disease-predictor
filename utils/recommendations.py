# utils/recommendations.py

def generate_recommendations(features, feature_names):
    """
    Generate lifestyle & health recommendations 
    based on patient input values.
    """
    recs = []
    data = dict(zip(feature_names, features[0]))

    # Example personalized rules:
    if data["chol"] > 240:
        recs.append("🍔 High cholesterol detected → Reduce fatty foods & increase fiber.")
    elif data["chol"] < 125:
        recs.append("🥗 Cholesterol too low → Ensure balanced diet with healthy fats.")

    if data["thalach"] < 100:
        recs.append("🏃 Low max heart rate → Add more cardio exercises (after doctor consult).")
    elif data["thalach"] > 180:
        recs.append("⚠️ Unusually high heart rate → Get a cardiology check-up.")

    if data["oldpeak"] > 2:
        recs.append("🧘 High ST depression → Stress test recommended. Practice relaxation & yoga.")

    if data["trestbps"] > 140:
        recs.append("💓 High resting BP → Reduce salt & monitor blood pressure regularly.")

    if data["age"] > 50 and data["cp"] == 2:
        recs.append("👴 Chest pain noted → Immediate consultation with a cardiologist advised.")

    # Default tip if no specific risk found
    if not recs:
        recs.append("✅ Maintain healthy lifestyle: Balanced diet, regular exercise, no smoking.")

    return recs
