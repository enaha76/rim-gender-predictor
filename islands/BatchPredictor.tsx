import { useState } from "preact/hooks";

// API base URL - change this to your FastAPI endpoint
const API_BASE_URL = "http://localhost:8000";

interface GenderPrediction {
  name: string;
  predicted_gender: string;
  probability: number;
}

export default function BatchPredictor() {
  const [batchInput, setBatchInput] = useState("");
  const [batchPredictions, setBatchPredictions] = useState<GenderPrediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Function to predict gender for multiple names
  const predictBatch = async () => {
    if (!batchInput.trim()) {
      setError("Please enter names");
      return;
    }
    
    const names = batchInput
      .split(",")
      .map(name => name.trim())
      .filter(name => name.length > 0);
    
    if (names.length === 0) {
      setError("Please enter valid names separated by commas");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${API_BASE_URL}/predict-batch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ names }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setBatchPredictions(data.predictions);
      } else {
        setError(data.error || "Failed to predict gender for batch");
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="batch-predictor">
      <h2>Batch Prediction</h2>
      
      {error && <div className="error">{error}</div>}
      
      <div className="input-group">
        <textarea
          value={batchInput}
          onChange={(e) => setBatchInput((e.target as HTMLTextAreaElement).value)}
          placeholder="Enter names separated by commas"
          disabled={loading}
          rows={3}
        />
        <button 
          onClick={predictBatch} 
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Batch"}
        </button>
      </div>
      
      {batchPredictions.length > 0 && (
        <div className="batch-results">
          <h3>Batch Results:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {batchPredictions.map((pred, idx) => (
                <tr key={idx}>
                  <td>{pred.name}</td>
                  <td>{pred.predicted_gender}</td>
                  <td>
                    <div className="confidence-mini-bar">
                      <div 
                        className="confidence-mini-fill" 
                        style={{width: `${pred.probability * 100}%`, backgroundColor: pred.predicted_gender === "male" ? "#2196f3" : "#f06292"}}
                      >
                      </div>
                    </div>
                    {(pred.probability * 100).toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <style>{`
        .batch-predictor {
          margin-top: 40px;
        }
        
        .error {
          background-color: #ffebee;
          color: #c62828;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        button {
          padding: 10px 15px;
          background-color: #2196f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          align-self: flex-start;
        }
        
        button:disabled {
          background-color: #b0bec5;
          cursor: not-allowed;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        
        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        
        th {
          background-color: #f5f5f5;
        }
        
        .confidence-mini-bar {
          width: 100px;
          height: 10px;
          background-color: #e0e0e0;
          border-radius: 5px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }
        
        .confidence-mini-fill {
          height: 100%;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}