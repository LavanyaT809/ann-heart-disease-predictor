# utils/ranges.py

HEALTHY_RANGES = {
    "age": (20, 60),  # typical low-risk range
    "trestbps": (90, 120),  # normal resting blood pressure
    "chol": (125, 200),  # mg/dL normal cholesterol
    "thalach": (100, 200),  # normal max heart rate range (varies with age)
    "oldpeak": (0, 2),  # ST depression normal range
}

def compare_with_ranges(inputs, feature_names):
    """
    Compare patient inputs with healthy ranges.
    Returns list of dicts with status.
    """
    results = []
    for i, f in enumerate(feature_names):
        if f in HEALTHY_RANGES:
            low, high = HEALTHY_RANGES[f]
            val = float(inputs[0][i])
            if val < low or val > high:
                status = f"⚠️ Abnormal (Normal: {low}-{high})"
                color = "red"
            else:
                status = f"✅ Normal ({low}-{high})"
                color = "green"
            results.append({
                "feature": f,
                "value": val,
                "status": status,
                "color": color
            })
    return results
