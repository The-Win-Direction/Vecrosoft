import os
import numpy as np
from PIL import Image
from tensorflow import keras
import json

# Load the trained model
model = keras.models.load_model("detection_model_mobilenetv2.h5")

# Load class indices from JSON file
with open("class_indices.json") as f:
    class_indices = json.load(f)

# Function to preprocess image
def preprocess_image(image):
    image_rgb = image.convert("RGB")
    resized_image = image_rgb.resize((224, 224))
    normalized_image = np.array(resized_image, dtype=np.float32) / 255.0
    input_image = np.expand_dims(normalized_image, axis=0)
    return input_image

# Function to predict diseases
def predict_diseases(image):
    preprocessed_img = preprocess_image(image)
    predictions = model.predict(preprocessed_img)
    predicted_class_index = np.argmax(predictions)
    predicted_class_name = class_indices[str(predicted_class_index)]
    probability = predictions[0][predicted_class_index]
    return predicted_class_name, probability
