import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from PIL import Image
from tensorflow import keras
from dotenv import load_dotenv
import json

load_dotenv()

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model = keras.models.load_model("detection_model_mobilenetv2.h5")

# Load class indices from JSON file with UTF-8 encoding
with open("class_indices.json", encoding="utf-8") as f:
    class_indices = json.load(f)

# Function to preprocess image
def preprocess_image(image):
    image_rgb = image.convert("RGB")
    resized_image = image_rgb.resize((224, 224))
    normalized_image = np.array(resized_image, dtype=np.float32) / 255.0
    input_image = np.expand_dims(normalized_image, axis=0)
    return input_image

# Function to predict diseases
def predict_diseases(model, image, class_indices):
    preprocessed_img = preprocess_image(image)
    probs = model.predict(preprocessed_img)[0]
    predicted_class_index = np.argmax(probs)
    predicted_class_name = class_indices[str(predicted_class_index)]
    return predicted_class_name, float(probs[predicted_class_index])

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    image = Image.open(file.file)
    predicted_disease, probability = predict_diseases(model, image, class_indices)
    return {"predicted_disease": predicted_disease, "probability": probability}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
