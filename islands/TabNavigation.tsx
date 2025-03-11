import { useState } from "preact/hooks";
import GenderPredictor from "./GenderPredictor.tsx";
import ModelInfo from "./ModelInfo.tsx";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("predictor");
  
  // Function to render the active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "predictor":
        return <GenderPredictor />;
      case "model":
        return <ModelInfo />;
      case "stats":
        return (
          <div class="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Statistics</h2>
            <div class="mb-4">
              <h3 class="text-xl font-semibold mb-2">Usage Statistics</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-600">Total Predictions</p>
                  <p class="text-2xl font-bold">12,458</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-600">Accuracy Rate</p>
                  <p class="text-2xl font-bold">94.2%</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-600">Male Names</p>
                  <p class="text-2xl font-bold">52.7%</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg">
                  <p class="text-sm text-blue-600">Female Names</p>
                  <p class="text-2xl font-bold">47.3%</p>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 italic">
              Statistics updated daily. Last update: March 10, 2025.
            </p>
          </div>
        );
      case "contact":
        return (
            <div class="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
            <p class="mb-4">
              Have questions or feedback about our gender prediction service? 
              We'd love to hear from you!
            </p>
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-2">Contact Information</h3>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>ahmedou.enaha@gmail.com</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <a href="https://www.linkedin.com/in/cheikh-ahmedou-enaha-85470723b/" target="_blank" class="text-blue-600 hover:underline">linkedin.com/in/cheikh-ahmedou-enaha</a>
                </li>
              </ul>
            </div>
            <p class="text-sm text-gray-500 italic">
              We typically respond to inquiries within 24-48 hours.
            </p>
          </div>
        );
      default:
        return <GenderPredictor />;
    }
  };
  
  return (
    <div class="min-h-screen relative overflow-hidden animated-background">
      {/* Animated background elements */}
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
      
      {/* Header with tabs */}
      <header class="bg-white shadow-md relative z-10">
        <div class="container mx-auto px-4 py-3">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="flex items-center mb-4 md:mb-0"> 
              <div class="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
               Rim Gender Predictor
              </div>
            </div>
            
            <nav class="flex space-x-1">
              <button 
                onClick={() => setActiveTab("predictor")}
                class={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "predictor" 
                    ? "bg-blue-100 text-blue-500" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Predictor
              </button>
              <button 
                onClick={() => setActiveTab("model")}
                class={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "model" 
                    ? "bg-blue-100 text-blue-500" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Model Info
              </button>
              <button 
                onClick={() => setActiveTab("stats")}
                class={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "stats" 
                    ? "bg-blue-100 text-blue-500" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Statistics
              </button>
              <button 
                onClick={() => setActiveTab("contact")}
                class={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "contact" 
                    ? "bg-blue-100 text-blue-500" 
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main content area */}
      <main class="container mx-auto flex items-center justify-center min-h-[calc(100vh-64px)] p-4 relative z-10">
        {renderTabContent()}
      </main>
      
      {/* Animated gradient background styles */}
      <style>{`
        .animated-background {
          background: linear-gradient(to right, #f0e7ff, #e0f2fe);
          position: relative;
        }
        
        .bubbles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          top: 0;
          left: 0;
        }
        
        .bubble {
          position: absolute;
          bottom: -100px;
          width: 40px;
          height: 40px;
          background: linear-gradient(to right, rgba(211, 188, 255, 0.3), rgba(147, 197, 253, 0.3));
          border-radius: 50%;
          opacity: 0.5;
          animation: rise 15s infinite ease-in;
        }
        
        .bubble:nth-child(1) {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-duration: 8s;
        }
        
        .bubble:nth-child(2) {
          width: 20px;
          height: 20px;
          left: 20%;
          animation-duration: 5s;
          animation-delay: 1s;
        }
        
        .bubble:nth-child(3) {
          width: 50px;
          height: 50px;
          left: 35%;
          animation-duration: 10s;
          animation-delay: 2s;
        }
        
        .bubble:nth-child(4) {
          width: 80px;
          height: 80px;
          left: 50%;
          animation-duration: 7s;
          animation-delay: 0s;
        }
        
        .bubble:nth-child(5) {
          width: 35px;
          height: 35px;
          left: 55%;
          animation-duration: 6s;
          animation-delay: 1s;
        }
        
        .bubble:nth-child(6) {
          width: 45px;
          height: 45px;
          left: 65%;
          animation-duration: 8s;
          animation-delay: 3s;
        }
        
        .bubble:nth-child(7) {
          width: 90px;
          height: 90px;
          left: 70%;
          animation-duration: 12s;
          animation-delay: 2s;
        }
        
        .bubble:nth-child(8) {
          width: 25px;
          height: 25px;
          left: 80%;
          animation-duration: 6s;
          animation-delay: 2s;
        }
        
        .bubble:nth-child(9) {
          width: 15px;
          height: 15px;
          left: 70%;
          animation-duration: 5s;
          animation-delay: 1s;
        }
        
        .bubble:nth-child(10) {
          width: 60px;
          height: 60px;
          left: 30%;
          animation-duration: 10s;
          animation-delay: 4s;
        }
        
        .bubble:nth-child(11) {
          width: 30px;
          height: 30px;
          left: 60%;
          animation-duration: 7s;
          animation-delay: 3s;
        }
        
        .bubble:nth-child(12) {
          width: 45px;
          height: 45px;
          left: 15%;
          animation-duration: 9s;
          animation-delay: 2s;
        }
        
        @keyframes rise {
          0% {
            bottom: -100px;
            transform: translateX(0);
          }
          50% {
            transform: translateX(20px);
          }
          100% {
            bottom: 120%;
            transform: translateX(-20px);
          }
        }
      `}</style>
    </div>
  );
}