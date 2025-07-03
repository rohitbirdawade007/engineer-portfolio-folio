import React from 'react';

const SmartAgriculturePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Smart Agriculture System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* System Overview */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">System Overview</h2>
          <p className="text-gray-700">
            This smart agriculture system integrates sensors, microcontrollers, and cloud connectivity to automate and optimize farming processes. It monitors environmental conditions, controls irrigation, and provides real-time data for informed decision-making.
          </p>
        </div>
        
        {/* Key Components */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Key Components</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Temperature and Humidity Sensors</li>
            <li>Soil Moisture Sensors</li>
            <li>pH Level Sensors</li>
            <li>Water Level Sensors</li>
            <li>Light Sensors</li>
            <li>Microcontroller (e.g., Arduino, Raspberry Pi)</li>
            <li>Relay Modules for Actuators</li>
            <li>Cloud Platform for Data Storage and Analysis</li>
          </ul>
        </div>
        
        {/* System Architecture */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">System Architecture</h2>
          <p className="text-gray-700">
            The system follows a three-layer architecture:
          </p>
          <ul className="list-decimal pl-5 text-gray-700">
            <li>
              <strong>Sensing Layer:</strong> Sensors collect real-time data on environmental conditions.
            </li>
            <li>
              <strong>Control Layer:</strong> A microcontroller processes sensor data and controls actuators (e.g., pumps, lights, fans).
            </li>
            <li>
              <strong>Application Layer:</strong> Data is transmitted to a cloud platform for storage, analysis, and remote monitoring.
            </li>
          </ul>
        </div>
        
        {/* Data Flow */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Data Flow</h2>
          <p className="text-gray-700">
            The data flow can be summarized as follows:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Sensors → Microcontroller</li>
            <li>Microcontroller → Cloud Platform</li>
            <li>Cloud Platform → User Interface (Web/Mobile)</li>
          </ul>
        </div>
        
        {/* AI Logic Examples */}
        
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">AI Logic Examples:</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• If Temperature &gt; 30°C → Turn ON Fan</p>
                <p>• If pH &lt; 6.0 OR pH &gt; 7.5 → Alert & Adjust</p>
                <p>• If Water Level &lt; 40% → Turn ON Pump</p>
                <p>• If Light &lt; 200 Lux → Turn ON Grow Lights</p>
              </div>
            </div>
            
        
        {/* Benefits */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Increased Crop Yield</li>
            <li>Efficient Resource Utilization</li>
            <li>Reduced Labor Costs</li>
            <li>Real-time Monitoring and Control</li>
            <li>Data-driven Decision Making</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartAgriculturePage;
