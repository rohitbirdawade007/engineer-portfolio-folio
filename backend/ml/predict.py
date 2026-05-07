import sys
import json
import joblib
import numpy as np
import os

# Load model and scaler
# Paths are relative to the backend root
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model.pkl')
SCALER_PATH = os.path.join(BASE_DIR, 'scaler.pkl')

def predict():
    try:
        # Read input from stdin
        input_json = sys.stdin.read()
        data = json.loads(input_json)
        
        # Check if model exists
        if not os.path.exists(MODEL_PATH) or not os.path.exists(SCALER_PATH):
            print(json.dumps({"error": "Model files missing on server"}))
            return

        model = joblib.load(MODEL_PATH)
        scaler = joblib.load(SCALER_PATH)
        
        # Prepare input data
        # Order: age, gender, height, weight, bmi, activity
        input_array = np.array([[
            data['age'],
            data['gender'],
            data['height'],
            data['weight'],
            data['bmi'],
            data['activity']
        ]])
        
        # Scale and Predict
        input_scaled = scaler.transform(input_array)
        prediction = model.predict(input_scaled)
        
        # Output result
        print(json.dumps({
            "success": True,
            "prediction": prediction[0]
        }))
        
    except Exception as e:
        print(json.dumps({
            "success": False,
            "error": str(e)
        }))

if __name__ == "__main__":
    predict()
