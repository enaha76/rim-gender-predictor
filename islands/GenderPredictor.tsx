import { useState } from "preact/hooks";

// API base URL - change this to your FastAPI endpoint
const API_BASE_URL = "http://localhost:8000";

interface GenderPrediction {
  name: string;
  predicted_gender: string;
  probability: number;
}

export default function GenderPredictor() {
  // State for single name prediction
  const [name, setName] = useState("");
  const [prediction, setPrediction] = useState<GenderPrediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  // Function to predict gender for a single name
  const predictGender = async () => {
    if (!name.trim()) {
      setError("Please enter a name");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.trim() }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log("API Prediction data:", data.prediction);
        setPrediction(data.prediction);
        setShowModal(true);
        // Clear the input field after successful prediction
        setName("");
      } else {
        setError("Prediction failed. Please try again.");
      }
    } catch (err) {
      setError(`Error connecting to API: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  // Get gender-based color class
  const getGenderColor = (gender) => {
    if (!gender) return 'bg-blue-500';
    return gender.toLowerCase() === 'male' || gender === 'M' ? 'bg-blue-500' : 'bg-pink-500';
  };
  
  // Generate a background style based on name and gender
  const getBackgroundStyle = () => {
    if (!prediction) return {};
    
    const isMale = prediction.predicted_gender.toLowerCase() === 'male' || prediction.predicted_gender === 'M';
    const nameLength = prediction.name.length;
    const firstChar = prediction.name.charAt(0).toLowerCase();
    const charCode = firstChar.charCodeAt(0);
    
    // Create variations based on name characteristics
    const intensity = ((charCode % 5) + 1) * 10; // 10, 20, 30, 40, or 50
    const angle = (nameLength * 15) % 360; // Rotate gradient based on name length
    
    // Return different gradients based on gender and name characteristics
    if (isMale) {
      return {
        background: `linear-gradient(${angle}deg, rgba(239, 246, 255, 0.${intensity}), rgba(191, 219, 254, 0.${intensity}), rgba(147, 197, 253, 0.${intensity}))`,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      };
    } else {
      return {
        background: `linear-gradient(${angle}deg, rgba(252, 231, 243, 0.${intensity}), rgba(249, 168, 212, 0.${intensity}), rgba(244, 114, 182, 0.${intensity}))`,
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      };
    }
  };
  
  // Format gender label for display
  const formatGenderLabel = (gender) => {
    if (!gender) return 'UNKNOWN';
    
    if (gender === 'M' || gender.toLowerCase() === 'male') {
      return 'MALE';
    } else if (gender === 'F' || gender.toLowerCase() === 'female') {
      return 'FEMALE';
    }
    
    return gender.toUpperCase();
  };
  
  // Get gender letter for the circle
  const getGenderLetter = (gender) => {
    if (!gender) return '?';
    
    if (gender === 'M' || gender.toLowerCase() === 'male') {
      return 'M';
    } else if (gender === 'F' || gender.toLowerCase() === 'female') {
      return 'F';
    }
    
    return gender.charAt(0).toUpperCase();
  };
  
  return (
    <div 
      class="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-xl shadow-lg transition-all duration-500"
      style={prediction ? getBackgroundStyle() : {}}
    >
      <div class="w-full text-center mb-8">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
          Name Gender Predictor
        </h1>
        <p class="text-gray-600 mt-2">Enter a name to predict its gender</p>
      </div>
      
      <div class="w-full flex items-center mb-6 gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
          placeholder="Enter a name..."
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onKeyPress={(e) => {
            if (e.key === 'Enter') predictGender();
          }}
        />
        <button
          onClick={predictGender}
          disabled={loading}
          class="px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "..." : "Predict"}
        </button>
      </div>
      
      {error && (
        <div class="w-full p-3 mb-4 text-red-700 bg-red-100 rounded-lg animate-fade-in">
          {error}
        </div>
      )}
      
      {loading && (
        <div class="w-full flex justify-center py-6">
          <div class="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Name-based pattern decoration - visible when prediction exists */}
      {prediction && (
        <div class="w-full mt-4 flex justify-center">
          <div class={`h-1 w-1/2 rounded-full ${getGenderColor(prediction.predicted_gender)}`}></div>
        </div>
      )}
      
      {/* Modal Popup */}
      {showModal && prediction && (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="relative bg-white rounded-xl shadow-xl p-6 m-4 max-w-sm w-full animate-slide-in">
            {/* Close button */}
            <button 
              onClick={() => setShowModal(false)}
              class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
            
            <div class="pt-4 text-center">
              <h2 class="text-2xl font-bold text-center mb-2">Name Gender Predictor</h2>
              <p class="text-gray-600 mb-6">Enter a name to predict its gender</p>
              
              {/* Gender Letter Circle */}
              <div class="flex justify-center mb-4">
                <div class={`w-24 h-24 rounded-full flex items-center justify-center ${getGenderColor(prediction.predicted_gender)}`}>
                  <span class="text-white text-4xl font-bold">
                    {getGenderLetter(prediction.predicted_gender)}
                  </span>
                </div>
              </div>
              
              {/* Name and Gender Display */}
              <h2 class="text-2xl font-bold">{prediction.name}</h2>
              <div class={`mt-2 inline-block px-6 py-2 rounded-full text-white font-medium mb-4 
                          ${getGenderColor(prediction.predicted_gender)}`}>
                {formatGenderLabel(prediction.predicted_gender)}
              </div>
              
              {/* Confidence meter */}
              <div class="w-full mt-4 mb-6">
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-medium text-gray-700">Confidence</span>
                  <span class="text-sm font-medium text-gray-700">
                    {Math.round(prediction.probability * 100)}%
                  </span>
                </div>
                <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    class={`h-full ${getGenderColor(prediction.predicted_gender)}`}
                    style={{ width: `${prediction.probability * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Footer text */}
              <div class="mt-4 text-sm text-gray-500 italic">
                This prediction is based on historical data and statistical analysis.
              </div>
              
              {/* Close button */}
              <div class="mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-gray-800 transition-colors"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes progressFill {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slide-in {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
}