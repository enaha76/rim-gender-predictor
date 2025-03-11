// import { useState } from "preact/hooks";

// export default function ModelInfo() {
//   const [activeSection, setActiveSection] = useState("overview");

//   // Function to render metrics visualization
//   const renderMetricsChart = () => {
//     const metrics = [
//       { name: "Accuracy", value: 92.97 },
//       { name: "AUC", value: 97.81 },
//       { name: "Precision", value: 90.85 },
//       { name: "Recall", value: 93.06 },
//       { name: "F1 Score", value: 91.94 }
//     ];

//     return (
//       <div class="mt-4 mb-6">
//         {metrics.map((metric) => (
//           <div class="mb-3" key={metric.name}>
//             <div class="flex justify-between mb-1">
//               <span class="text-sm font-medium text-gray-700">{metric.name}</span>
//               <span class="text-sm font-medium text-gray-700">{metric.value}%</span>
//             </div>
//             <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//               <div 
//                 class="h-full bg-blue-500"
//                 style={{ width: `${metric.value}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   // Function to render the active section content
//   const renderSectionContent = () => {
//     switch (activeSection) {
//       case "overview":
//         return (
//           <div class="space-y-4">
//             <p>
//             Our gender prediction model uses machine learning to analyze name patterns. It was trained on a dataset of names from Mauritania.
//             </p>
//             <div class="grid grid-cols-2 gap-4">
//               <div class="p-4 bg-blue-50 rounded-lg">
//                 <p class="text-sm text-blue-600">Total Training Data</p>
//                 <p class="text-2xl font-bold">67,882</p>
//                 <p class="text-xs text-gray-500">names used for training</p>
//               </div>
//               <div class="p-4 bg-blue-50 rounded-lg">
//                 <p class="text-sm text-blue-600">Model Accuracy</p>
//                 <p class="text-2xl font-bold">92.97%</p>
//                 <p class="text-xs text-gray-500">on test data</p>
//               </div>
//               <div class="p-4 bg-blue-50 rounded-lg">
//                 <p class="text-sm text-blue-600">Female Names</p>
//                 <p class="text-2xl font-bold">38,448</p>
//                 <p class="text-xs text-gray-500">in training dataset</p>
//               </div>
//               <div class="p-4 bg-blue-50 rounded-lg">
//                 <p class="text-sm text-blue-600">Male Names</p>
//                 <p class="text-2xl font-bold">29,434</p>
//                 <p class="text-xs text-gray-500">in training dataset</p>
//               </div>
//             </div>
//           </div>
//         );
//       case "architecture":
//         return (
//           <div class="space-y-4">
//             <p>
//               The model uses a Logistic Regression algorithm with an ElasticNet penalty, optimized for performance on name-based gender prediction.
//             </p>
//             <div class="mt-4">
//               <h3 class="text-lg font-semibold mb-2">Model Architecture</h3>
//               <ul class="list-disc pl-6 space-y-2">
//                 <li>Algorithm: <span class="font-medium">Logistic Regression</span></li>
//                 <li>Penalty: <span class="font-medium">ElasticNet</span></li>
//                 <li>Hyperparameters:
//                   <ul class="list-disc pl-6 mt-1">
//                     <li>C = 3.33 (inverse of regularization strength)</li>
//                     <li>l1_ratio = 0.0 (ElasticNet mixing parameter)</li>
//                   </ul>
//                 </li>
//                 <li>Feature Vector Size: <span class="font-medium">1000 dimensions</span></li>
//                 <li>Training/Test Split: <span class="font-medium">80% / 20%</span></li>
//               </ul>
//             </div>
//           </div>
//         );
//       case "features":
//         return (
//           <div class="space-y-4">
//             <p>
//               The model extracts multiple feature types from names to identify patterns that correlate with gender.
//             </p>
//             <div class="mt-4">
//               <h3 class="text-lg font-semibold mb-2">Feature Extraction</h3>
//               <ul class="list-disc pl-6 space-y-2">
//                 <li>
//                   <span class="font-medium">Suffix Analysis</span>
//                   <p class="text-sm text-gray-600 mt-1">
//                     Extracts the last letter, last two letters, and last three letters of a name
//                   </p>
//                 </li>
//                 <li>
//                   <span class="font-medium">Prefix Analysis</span>
//                   <p class="text-sm text-gray-600 mt-1">
//                     Extracts the first letter, first two letters, and first three letters of a name
//                   </p>
//                 </li>
//                 <li>
//                   <span class="font-medium">Length Features</span>
//                   <p class="text-sm text-gray-600 mt-1">
//                     Categorizes names as short/medium/long and uses exact length
//                   </p>
//                 </li>
//                 <li>
//                   <span class="font-medium">Vowel/Consonant Analysis</span>
//                   <p class="text-sm text-gray-600 mt-1">
//                     Calculates vowel ratio and determines if a name has more vowels or consonants
//                   </p>
//                 </li>
//                 <li>
//                   <span class="font-medium">Pattern Recognition</span>
//                   <p class="text-sm text-gray-600 mt-1">
//                     Identifies specific patterns common in names (e.g., "ou", "ah", "ma", "med")
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         );
//       case "performance":
//         return (
//           <div class="space-y-4">
//             <p>
//               Our model demonstrates strong performance across various metrics, with balanced accuracy for both male and female names.
//             </p>
            
//             {renderMetricsChart()}
            
//             <div class="grid grid-cols-2 gap-4 mb-4">
//               <div class="p-4 bg-blue-50 rounded-lg">
//                 <p class="text-sm text-blue-600">Male Name Accuracy</p>
//                 <p class="text-2xl font-bold">93.06%</p>
//               </div>
//               <div class="p-4 bg-pink-50 rounded-lg">
//                 <p class="text-sm text-pink-600">Female Name Accuracy</p>
//                 <p class="text-2xl font-bold">92.91%</p>
//               </div>
//             </div>
            
//             <div class="bg-gray-50 p-4 rounded-lg">
//               <h3 class="text-lg font-semibold mb-2">Confusion Matrix</h3>
//               <div class="grid grid-cols-2 gap-2 text-center">
//                 <div class="bg-green-100 p-2 rounded">
//                   <p class="font-medium">True Female</p>
//                   <p class="text-xl font-bold">7,179</p>
//                 </div>
//                 <div class="bg-red-100 p-2 rounded">
//                   <p class="font-medium">False Male</p>
//                   <p class="text-xl font-bold">548</p>
//                 </div>
//                 <div class="bg-red-100 p-2 rounded">
//                   <p class="font-medium">False Female</p>
//                   <p class="text-xl font-bold">406</p>
//                 </div>
//                 <div class="bg-green-100 p-2 rounded">
//                   <p class="font-medium">True Male</p>
//                   <p class="text-xl font-bold">5,444</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case "examples":
//         return (
//           <div class="space-y-4">
//             <p>
//               Below are some example predictions from our model showing its accuracy across different types of names.
//             </p>
            
//             <div class="overflow-x-auto">
//               <table class="min-w-full divide-y divide-gray-200">
//                 <thead class="bg-gray-50">
//                   <tr>
//                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Gender</th>
//                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted</th>
//                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
//                   </tr>
//                 </thead>
//                 <tbody class="bg-white divide-y divide-gray-200">
//                   <tr>
//                     <td class="px-6 py-4 whitespace-nowrap">Ahmed</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">99.97%</td>
//                   </tr>
//                   <tr>
//                     <td class="px-6 py-4 whitespace-nowrap">Fatima</td>
//                     <td class="px-6 py-4 whitespace-nowrap">F</td>
//                     <td class="px-6 py-4 whitespace-nowrap">F</td>
//                     <td class="px-6 py-4 whitespace-nowrap">99.30%</td>
//                   </tr>
//                   <tr>
//                     <td class="px-6 py-4 whitespace-nowrap">Mohammed</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">99.88%</td>
//                   </tr>
//                   <tr>
//                     <td class="px-6 py-4 whitespace-nowrap">Aisha</td>
//                     <td class="px-6 py-4 whitespace-nowrap">F</td>
//                     <td class="px-6 py-4 whitespace-nowrap">F</td>
//                     <td class="px-6 py-4 whitespace-nowrap">99.83%</td>
//                   </tr>
//                   <tr>
//                     <td class="px-6 py-4 whitespace-nowrap">Omar</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">M</td>
//                     <td class="px-6 py-4 whitespace-nowrap">89.92%</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select a section to learn more</div>;
//     }
//   };

//   return (
//     <div class="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
//       <h2 class="text-2xl font-bold mb-6">Gender Prediction Model</h2>
      
//       {/* Tabs for different sections */}
//       <div class="flex flex-wrap border-b border-gray-200 mb-6">
//         <button
//           onClick={() => setActiveSection("overview")}
//           class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
//             activeSection === "overview"
//               ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
//               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//           }`}
//         >
//           Overview
//         </button>
//         <button
//           onClick={() => setActiveSection("architecture")}
//           class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
//             activeSection === "architecture"
//               ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
//               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//           }`}
//         >
//           Architecture
//         </button>
//         <button
//           onClick={() => setActiveSection("features")}
//           class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
//             activeSection === "features"
//               ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
//               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//           }`}
//         >
//           Features
//         </button>
//         <button
//           onClick={() => setActiveSection("performance")}
//           class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
//             activeSection === "performance"
//               ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
//               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//           }`}
//         >
//           Performance
//         </button>
//         <button
//           onClick={() => setActiveSection("examples")}
//           class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
//             activeSection === "examples"
//               ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
//               : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
//           }`}
//         >
//           Examples
//         </button>
//       </div>
      
//       {/* Content area */}
//       <div class="p-4">
//         {renderSectionContent()}
//       </div>
//     </div>
//   );
// }












import { useState } from "preact/hooks";

export default function ModelInfo() {
  const [activeSection, setActiveSection] = useState("overview");

  // Function to render metrics visualization
  const renderMetricsChart = () => {
    const metrics = [
      { name: "Accuracy", value: 92.97 },
      { name: "AUC", value: 97.81 },
      { name: "Precision", value: 90.85 },
      { name: "Recall", value: 93.06 },
      { name: "F1 Score", value: 91.94 }
    ];

    return (
      <div class="mt-4 mb-6">
        {metrics.map((metric) => (
          <div class="mb-3" key={metric.name}>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium text-gray-700">{metric.name}</span>
              <span class="text-sm font-medium text-gray-700">{metric.value}%</span>
            </div>
            <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full bg-blue-500"
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Function to render the active section content
  const renderSectionContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div class="space-y-4">
            <p>
              Our gender prediction model uses machine learning to analyze name patterns. It was trained on a dataset of names from Mauritania.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-600">Total Training Data</p>
                <p class="text-2xl font-bold">67,882</p>
                <p class="text-xs text-gray-500">names used for training</p>
              </div>
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-600">Model Accuracy</p>
                <p class="text-2xl font-bold">92.97%</p>
                <p class="text-xs text-gray-500">on test data</p>
              </div>
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-600">Female Names</p>
                <p class="text-2xl font-bold">38,448</p>
                <p class="text-xs text-gray-500">in training dataset</p>
              </div>
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-600">Male Names</p>
                <p class="text-2xl font-bold">29,434</p>
                <p class="text-xs text-gray-500">in training dataset</p>
              </div>
            </div>
            
         
          </div>
        );
      case "architecture":
        return (
          <div class="space-y-4">
            <p>
              The model uses a Logistic Regression algorithm with an ElasticNet penalty, optimized for performance on name-based gender prediction.
            </p>
            <div class="mt-4">
              <h3 class="text-lg font-semibold mb-2">Model Architecture</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>Algorithm: <span class="font-medium">Logistic Regression</span></li>
                <li>Penalty: <span class="font-medium">ElasticNet</span></li>
                <li>Hyperparameters:
                  <ul class="list-disc pl-6 mt-1">
                    <li>C = 3.33 (inverse of regularization strength)</li>
                    <li>l1_ratio = 0.0 (ElasticNet mixing parameter)</li>
                  </ul>
                </li>
                <li>Feature Vector Size: <span class="font-medium">1000 dimensions</span></li>
                <li>Training/Test Split: <span class="font-medium">80% / 20%</span></li>
              </ul>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Model Training Process</h3>
              <div class="flex flex-col items-center">
                <svg viewBox="0 0 600 150" class="w-full max-w-2xl">
                  {/* Process flow line */}
                  <path d="M50,75 L150,75 L150,100 L250,100 L250,75 L350,75 L350,50 L450,50 L450,75 L550,75" 
                    stroke="#3b82f6" stroke-width="3" fill="none" />
                    
                  {/* Process nodes */}
                  <g>
                    <circle cx="50" cy="75" r="10" fill="#bfdbfe" />
                    <text x="50" y="105" text-anchor="middle" font-family="sans-serif" font-size="12">Data</text>
                  </g>
                  <g>
                    <circle cx="150" cy="75" r="10" fill="#bfdbfe" />
                    <text x="150" y="105" text-anchor="middle" font-family="sans-serif" font-size="12">Features</text>
                  </g>
                  <g>
                    <circle cx="250" cy="100" r="10" fill="#bfdbfe" />
                    <text x="250" y="130" text-anchor="middle" font-family="sans-serif" font-size="12">Training</text>
                  </g>
                  <g>
                    <circle cx="350" cy="75" r="10" fill="#bfdbfe" />
                    <text x="350" y="105" text-anchor="middle" font-family="sans-serif" font-size="12">Model</text>
                  </g>
                  <g>
                    <circle cx="450" cy="50" r="10" fill="#bfdbfe" />
                    <text x="450" y="30" text-anchor="middle" font-family="sans-serif" font-size="12">Validation</text>
                  </g>
                  <g>
                    <circle cx="550" cy="75" r="10" fill="#bfdbfe" />
                    <text x="550" y="105" text-anchor="middle" font-family="sans-serif" font-size="12">Deployment</text>
                  </g>
                </svg>
                <p class="text-sm text-gray-600 mt-2">Model training and deployment workflow</p>
              </div>
            </div>
          </div>
        );
      case "features":
        return (
          <div class="space-y-4">
            <p>
              The model extracts multiple feature types from names to identify patterns that correlate with gender.
            </p>
            <div class="mt-4">
              <h3 class="text-lg font-semibold mb-2">Feature Extraction</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li>
                  <span class="font-medium">Suffix Analysis</span>
                  <p class="text-sm text-gray-600 mt-1">
                    Extracts the last letter, last two letters, and last three letters of a name
                  </p>
                </li>
                <li>
                  <span class="font-medium">Prefix Analysis</span>
                  <p class="text-sm text-gray-600 mt-1">
                    Extracts the first letter, first two letters, and first three letters of a name
                  </p>
                </li>
                <li>
                  <span class="font-medium">Length Features</span>
                  <p class="text-sm text-gray-600 mt-1">
                    Categorizes names as short/medium/long and uses exact length
                  </p>
                </li>
                <li>
                  <span class="font-medium">Vowel/Consonant Analysis</span>
                  <p class="text-sm text-gray-600 mt-1">
                    Calculates vowel ratio and determines if a name has more vowels or consonants
                  </p>
                </li>
                <li>
                  <span class="font-medium">Pattern Recognition</span>
                  <p class="text-sm text-gray-600 mt-1">
                    Identifies specific patterns common in names (e.g., "ou", "ah", "ma", "med")
                  </p>
                </li>
              </ul>
            </div>
            
            <div class="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-3">Feature Importance</h3>
              <div class="space-y-2">
                {/* Feature Importance Bars */}
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Last letter</span>
                    <span class="text-sm font-medium">75%</span>
                  </div>
                  <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">First letter</span>
                    <span class="text-sm font-medium">68%</span>
                  </div>
                  <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Length</span>
                    <span class="text-sm font-medium">45%</span>
                  </div>
                  <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Vowel ratio</span>
                    <span class="text-sm font-medium">38%</span>
                  </div>
                  <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "38%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Patterns</span>
                    <span class="text-sm font-medium">27%</span>
                  </div>
                  <div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "27%" }}></div>
                  </div>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-2">Relative importance of different feature types in the prediction model</p>
            </div>
          </div>
        );
      case "performance":
        return (
          <div class="space-y-4">
            <p>
              Our model demonstrates strong performance across various metrics, with balanced accuracy for both male and female names.
            </p>
            
            <div class="mt-6">
              <h3 class="text-lg font-semibold mb-3">Performance Metrics</h3>
              <div class="space-y-3">
                {/* Performance Metric Bars */}
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Accuracy</span>
                    <span class="text-sm font-medium">92.97%</span>
                  </div>
                  <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "92.97%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">AUC</span>
                    <span class="text-sm font-medium">97.81%</span>
                  </div>
                  <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "97.81%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Precision</span>
                    <span class="text-sm font-medium">90.85%</span>
                  </div>
                  <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "90.85%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">Recall</span>
                    <span class="text-sm font-medium">93.06%</span>
                  </div>
                  <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "93.06%" }}></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm font-medium">F1 Score</span>
                    <span class="text-sm font-medium">91.94%</span>
                  </div>
                  <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="h-full bg-blue-500" style={{ width: "91.94%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-600">Male Name Accuracy</p>
                <p class="text-2xl font-bold">93.06%</p>
              </div>
              <div class="p-4 bg-pink-50 rounded-lg">
                <p class="text-sm text-pink-600">Female Name Accuracy</p>
                <p class="text-2xl font-bold">92.91%</p>
              </div>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Confusion Matrix</h3>
              <div class="grid grid-cols-2 gap-2 text-center">
                <div class="bg-green-100 p-2 rounded">
                  <p class="font-medium">True Female</p>
                  <p class="text-xl font-bold">7,179</p>
                </div>
                <div class="bg-red-100 p-2 rounded">
                  <p class="font-medium">False Male</p>
                  <p class="text-xl font-bold">548</p>
                </div>
                <div class="bg-red-100 p-2 rounded">
                  <p class="font-medium">False Female</p>
                  <p class="text-xl font-bold">406</p>
                </div>
                <div class="bg-green-100 p-2 rounded">
                  <p class="font-medium">True Male</p>
                  <p class="text-xl font-bold">5,444</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "examples":
        return (
          <div class="space-y-4">
            <p>
              Below are some example predictions from our model showing its accuracy across different types of names.
            </p>
            
            <div class="mt-6 mb-8">
              <h3 class="text-lg font-semibold mb-3">Prediction Confidence</h3>
              <div class="relative pt-1">
                <div class="flex mb-6 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-200 text-blue-800">
                      Male Names
                    </span>
                  </div>
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-pink-200 text-pink-800">
                      Female Names
                    </span>
                  </div>
                </div>
                <div class="flex mb-2 items-center justify-start">
                  <div class="w-20 text-right mr-2">
                    <span class="text-xs font-semibold inline-block text-blue-600">
                      Ahmed
                    </span>
                  </div>
                  <div class="flex-1 shadow-none">
                    <div class="flex h-4 overflow-hidden text-xs bg-blue-100 rounded">
                      <div style="width:99.97%" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div class="w-12 text-right pl-2">
                    <span class="text-xs font-semibold inline-block text-gray-600">
                      99.97%
                    </span>
                  </div>
                </div>
                <div class="flex mb-2 items-center justify-start">
                  <div class="w-20 text-right mr-2">
                    <span class="text-xs font-semibold inline-block text-pink-600">
                      Fatima
                    </span>
                  </div>
                  <div class="flex-1 shadow-none">
                    <div class="flex h-4 overflow-hidden text-xs bg-pink-100 rounded">
                      <div style="width:99.30%" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                    </div>
                  </div>
                  <div class="w-12 text-right pl-2">
                    <span class="text-xs font-semibold inline-block text-gray-600">
                      99.30%
                    </span>
                  </div>
                </div>
                <div class="flex mb-2 items-center justify-start">
                  <div class="w-20 text-right mr-2">
                    <span class="text-xs font-semibold inline-block text-blue-600">
                      Mohammed
                    </span>
                  </div>
                  <div class="flex-1 shadow-none">
                    <div class="flex h-4 overflow-hidden text-xs bg-blue-100 rounded">
                      <div style="width:99.88%" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div class="w-12 text-right pl-2">
                    <span class="text-xs font-semibold inline-block text-gray-600">
                      99.88%
                    </span>
                  </div>
                </div>
                <div class="flex mb-2 items-center justify-start">
                  <div class="w-20 text-right mr-2">
                    <span class="text-xs font-semibold inline-block text-pink-600">
                      Aisha
                    </span>
                  </div>
                  <div class="flex-1 shadow-none">
                    <div class="flex h-4 overflow-hidden text-xs bg-pink-100 rounded">
                      <div style="width:99.83%" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                    </div>
                  </div>
                  <div class="w-12 text-right pl-2">
                    <span class="text-xs font-semibold inline-block text-gray-600">
                      99.83%
                    </span>
                  </div>
                </div>
                <div class="flex mb-2 items-center justify-start">
                  <div class="w-20 text-right mr-2">
                    <span class="text-xs font-semibold inline-block text-blue-600">
                      Omar
                    </span>
                  </div>
                  <div class="flex-1 shadow-none">
                    <div class="flex h-4 overflow-hidden text-xs bg-blue-100 rounded">
                      <div style="width:89.92%" class="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                  </div>
                  <div class="w-12 text-right pl-2">
                    <span class="text-xs font-semibold inline-block text-gray-600">
                      89.92%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Gender</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Ahmed</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">99.97%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Fatima</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">F</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">F</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">99.30%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Mohammed</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">99.88%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Aisha</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">F</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">F</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">99.83%</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">Omar</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">M</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">89.92%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <div>Select a section to learn more</div>;
    }
  };

  return (
    <div class="w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Gender Prediction Model</h2>
      
      {/* Tabs for different sections */}
      <div class="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveSection("overview")}
          class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
            activeSection === "overview"
              ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveSection("architecture")}
          class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
            activeSection === "architecture"
              ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          }`}
        >
          Architecture
        </button>
        <button
          onClick={() => setActiveSection("features")}
          class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
            activeSection === "features"
              ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          }`}
        >
          Features
        </button>
        <button
          onClick={() => setActiveSection("performance")}
          class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
            activeSection === "performance"
              ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          }`}
        >
          Performance
        </button>
        <button
          onClick={() => setActiveSection("examples")}
          class={`mr-2 py-2 px-4 font-medium rounded-t-lg ${
            activeSection === "examples"
              ? "bg-blue-100 text-blue-500 border-b-2 border-blue-500"
              : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
          }`}
        >
          Examples
        </button>
      </div>
      
      {/* Content area */}
      <div class="p-4">
        {renderSectionContent()}
      </div>
    </div>
  );
}