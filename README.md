# 🧠 Brain Tumor Detection using Deep Learning

A Flask-based web application that detects brain tumors from MRI images using a trained **Deep Learning (CNN) model**.  
Frontend is built with **HTML, CSS, and JavaScript**, while the backend uses **Flask API + Python**.

---

## 📂 Project Structure

Model/ # Deep learning model + training
│── BrainTumorModel_1.h5
│── BrainTumorModel_1.json
│── train.py
│
static/ # Static assets
│── js/
│ │── detection.js
│ │── model.js
│── detection.css
│── home.css
│
templates/ # HTML templates (Flask Jinja2)
│── complete_app.html
│── home.html
│
uploads/ # Uploaded MRI images
│── brain_tumor.png
│── brain_tumor1.png
│── brain1.jpeg
│── not_tumor.jpeg
│── ...
│
app.py # Main Flask app
requirements.txt # Dependencies
.gitattributes # Line ending config
README.md # Project documentation

---

## 🚀 Features
- Upload MRI images for brain tumor detection  
- CNN deep learning model trained on MRI dataset  
- Flask REST API backend  
- User-friendly web interface with HTML, CSS, JS  
- Displays results in real-time  

---

## 🛠️ Tech Stack
**Backend:** Flask, TensorFlow/Keras, OpenCV, Numpy, Pandas  
**Frontend:** HTML5, CSS3, JavaScript  
**Other:** Bootstrap (optional), Git  

---

## ⚡ Setup & Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/brain-tumor-detection.git
   cd brain-tumor-detection
   
1)Create virtual environment:-
  python -m venv venv
  venv\Scripts\activate   # Windows
  source venv/bin/activate  # Linux/Mac

2)Install dependencies:-
  pip install -r requirements.txt

3)Run the Flask app::-
    python app.py

4)Open in browser:-
    http://127.0.0.1:5000








