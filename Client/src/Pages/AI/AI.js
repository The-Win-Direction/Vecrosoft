import React from 'react';
import './ai.css'

function AI() {
  return (
    <div class="container">
     <h1>Plant Disease Classifier With AI</h1>
     <h2>Made By Vecrosoft</h2>
     <h3>Choose an image</h3>
     <div class="image-drag">
      <p>Drag and drop image here</p>
      <button>Browse image</button>
     </div>
     <button>Predict</button>
    </div>
  )
}

export default AI
