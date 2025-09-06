import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

COLS = [
    'age','sex','cp','trestbps','chol','fbs','restecg','thalach',
    'exang','oldpeak','slope','ca','thal','class'
]

def load_clean_data(csv_path: str) -> pd.DataFrame:
    """Load Cleveland data, clean missing, add target + helper cols."""
    df = pd.read_csv(csv_path, names=COLS)
    df = df.replace('?', np.nan).dropna()
    for c in COLS:
        df[c] = pd.to_numeric(df[c])
    df['disease'] = (df['class'] > 0).astype(int)
    df['sex_label'] = df['sex'].map({0: "Female", 1: "Male"})
    df['age_group'] = pd.cut(df['age'], bins=[0, 40, 50, 60, 120],
                             labels=["<40", "40-50", "50-60", "60+"])
    return df

def compute_kpis(df: pd.DataFrame) -> dict:
    """Quick stats like BI cards."""
    return {
        "avg_age": round(df['age'].mean(), 1),
        "avg_chol": round(df['chol'].mean(), 1),
        "avg_thalach": round(df['thalach'].mean(), 1),
        "pct_disease": round(df['disease'].mean() * 100, 1)
    }

def generate_plots(df: pd.DataFrame, out_dir: str = "static/plots") -> dict:
    os.makedirs(out_dir, exist_ok=True)
    files = {}

    # Distribution histograms
    hists = []
    for c in ['age','chol','trestbps','thalach']:
        plt.figure()
        sns.histplot(df[c], bins=25, kde=True)
        plt.title(f"Distribution of {c}")
        fname = f"hist_{c}.png"
        plt.savefig(os.path.join(out_dir, fname), dpi=120)
        plt.close()
        hists.append(f"plots/{fname}")
    files["hists"] = hists

    # Class distribution pie
    plt.figure()
    df['disease'].value_counts().plot.pie(
        labels=['No Disease','Disease'], autopct='%1.1f%%')
    plt.title("Class Distribution")
    fname = "pie_class.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["pie"] = f"plots/{fname}"

    # Correlation heatmap
    plt.figure(figsize=(8,6))
    sns.heatmap(df.corr(numeric_only=True), cmap="coolwarm", center=0)
    plt.title("Correlation Heatmap")
    fname = "heatmap_corr.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["heatmap"] = f"plots/{fname}"

    # Risk by Age Group
    plt.figure()
    sns.barplot(x="age_group", y="disease", data=df, estimator=np.mean)
    plt.ylabel("% with Disease")
    plt.title("Risk by Age Group")
    fname = "risk_age.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["risk_age"] = f"plots/{fname}"

    # Risk by Gender
    plt.figure()
    sns.barplot(x="sex_label", y="disease", data=df, estimator=np.mean)
    plt.ylabel("% with Disease")
    plt.title("Risk by Gender")
    fname = "risk_gender.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["risk_gender"] = f"plots/{fname}"

    # Boxplot Cholesterol vs Disease
    plt.figure()
    sns.boxplot(x="disease", y="chol", data=df)
    plt.title("Cholesterol by Disease Outcome")
    fname = "box_chol.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["box_chol"] = f"plots/{fname}"

    # Boxplot Thalach vs Disease
    plt.figure()
    sns.boxplot(x="disease", y="thalach", data=df)
    plt.title("Max Heart Rate by Disease Outcome")
    fname = "box_thalach.png"
    plt.savefig(os.path.join(out_dir, fname), dpi=120)
    plt.close()
    files["box_thalach"] = f"plots/{fname}"

    return files

def ensure_dashboard(csv_path: str, out_dir: str = "static/plots") -> tuple:
    """Return KPIs + plot files for dashboard."""
    df = load_clean_data(csv_path)
    kpis = compute_kpis(df)
    files = generate_plots(df, out_dir)
    return kpis, files




