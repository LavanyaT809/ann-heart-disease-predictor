# utils/explain.py
import shap
import matplotlib.pyplot as plt
import numpy as np
import os
from keras.models import load_model

# Load model once
model = load_model("heart_disease_model.h5")

# SHAP explainer → requires background data
# Here, we’ll just use a simple zero baseline for neural networks
background = np.zeros((1, 13))
explainer = shap.Explainer(model, background)

def explain_prediction(input_data, feature_names):
    """
    Returns top 3 contributing features for a prediction
    """
    shap_values = explainer(input_data)
    values = shap_values.values[0]

    # Sort by absolute impact
    sorted_idx = np.argsort(abs(values))[::-1]

    top_features = []
    for i in range(3):
        idx = sorted_idx[i]
        top_features.append({
            "feature": feature_names[idx],
            "value": float(input_data[0][idx]),
            "impact": round(float(values[idx]), 3)
        })
    return top_features

def save_shap_plot(input_data, feature_names, out_dir="static/plots"):
    """
    Saves SHAP bar plot as an image and returns relative path
    """
    os.makedirs(out_dir, exist_ok=True)
    shap_values = explainer(input_data)

    plt.figure()
    shap.plots.bar(shap_values[0], show=False)
    file_path = os.path.join(out_dir, "shap_plot.png")
    plt.savefig(file_path, bbox_inches="tight")
    plt.close()

    return file_path.replace("\\", "/")  # for Windows compatibility







