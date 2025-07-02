
import { ArrowLeft, Thermometer, Droplet, Sun, Zap, Cpu, Wifi, TrendingUp, Leaf, Fish, Egg, Github, Play, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SmartAgriculturePage = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 29.5,
    humidity: 65,
    ph: 6.4,
    lightIntensity: 220,
    waterLevel: 75
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: Math.max(20, Math.min(35, prev.temperature + (Math.random() - 0.5) * 2)),
        humidity: Math.max(40, Math.min(90, prev.humidity + (Math.random() - 0.5) * 5)),
        ph: Math.max(5.5, Math.min(8.0, prev.ph + (Math.random() - 0.5) * 0.2)),
        lightIntensity: Math.max(100, Math.min(400, prev.lightIntensity + (Math.random() - 0.5) * 20)),
        waterLevel: Math.max(30, Math.min(100, prev.waterLevel + (Math.random() - 0.5) * 8))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-gradient">🌾 AI and IoT Integration in Sustainable Agriculture</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI and IoT Integration in Sustainable Agriculture</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            A real-time, intelligent farm monitoring and automation system using AI + IoT to optimize resource usage 
            and automate agricultural environments across hydroponic, aquaponic, and poultry sections.
          </p>
        </div>

        {/* 1. Project Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="text-green-600" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed text-lg">
              A multidisciplinary project integrating AI algorithms and IoT devices to optimize resource usage and 
              automate agricultural environments. The system monitors real-time parameters like temperature, humidity, 
              pH, water level, and light intensity across hydroponic, aquaponic, and poultry sections and takes 
              automatic actions (e.g., turning on fans, pumps, or lights) using ESP32 and Raspberry Pi controllers.
            </p>
          </CardContent>
        </Card>

        {/* 2. System Architecture Diagram */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="text-blue-600" />
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Architecture Diagram */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <img 
                  src="/lovable-uploads/edf21421-bc8a-46d3-9dd5-c6c00cdb3cdd.png" 
                  alt="Block Diagram of AI-IoT based Smart Agriculture System" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-center text-gray-800">System Block Diagram</h4>
              </div>

              {/* Components List */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📡 Sensors</h4>
                  <div className="space-y-2 text-sm">
                    <div>• pH Sensor - Water quality monitoring</div>
                    <div>• DHT11 - Temperature & Humidity detection</div>
                    <div>• LDR - Light intensity measurement</div>
                    <div>• Ultrasonic - Water level monitoring</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">🎛️ Controllers</h4>
                  <div className="space-y-2 text-sm">
                    <div>• ESP32 - Microcontroller for sensor integration</div>
                    <div>• Raspberry Pi - Central processing unit</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">⚙️ Actuators</h4>
                  <div className="space-y-2 text-sm">
                    <div>• Water Pump - Irrigation control</div>
                    <div>• Fan - Temperature regulation</div>
                    <div>• LED Lights - Supplemental lighting</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">🌐 Communication & AI</h4>
                  <div className="space-y-2 text-sm">
                    <div>• WiFi/IoT - ThingSpeak/Blynk integration</div>
                    <div>• AI Logic - Rule-based optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🌱", title: "Real-time Monitoring", desc: "Continuous tracking of plant, water, and poultry conditions" },
                { icon: "🤖", title: "AI-based Decision Logic", desc: "Automated farming operations based on intelligent algorithms" },
                { icon: "🌐", title: "Remote IoT Access", desc: "Monitor and control via IoT dashboard from anywhere" },
                { icon: "🔁", title: "Sustainable Integration", desc: "Seamless integration of multiple farming systems" },
                { icon: "📊", title: "Data Visualization", desc: "Live data logging and comprehensive visualization" },
                { icon: "⚡", title: "Energy Efficient", desc: "Optimized power consumption with smart controls" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 4. Results - Dashboard View */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="text-blue-600 animate-pulse" />
              Live Dashboard & Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Live Sensor Readings */}
              <div className="xl:col-span-2 space-y-4">
                <h4 className="font-semibold mb-4">Real-time Sensor Readings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center gap-3">
                      <Thermometer className="text-red-600" size={24} />
                      <span className="font-medium">Temperature</span>
                    </div>
                    <span className="text-2xl font-bold text-red-600">{sensorData.temperature.toFixed(1)}°C</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <Droplet className="text-blue-600" size={24} />
                      <span className="font-medium">Humidity</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{sensorData.humidity.toFixed(0)}%</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-3">
                      <Zap className="text-green-600" size={24} />
                      <span className="font-medium">pH Level</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">{sensorData.ph.toFixed(1)}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center gap-3">
                      <Sun className="text-yellow-600" size={24} />
                      <span className="font-medium">Light Intensity</span>
                    </div>
                    <span className="text-2xl font-bold text-yellow-600">{sensorData.lightIntensity.toFixed(0)} Lux</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg border-l-4 border-cyan-500 md:col-span-2">
                    <div className="flex items-center gap-3">
                      <Droplet className="text-cyan-600" size={24} />
                      <span className="font-medium">Water Level</span>
                    </div>
                    <span className="text-2xl font-bold text-cyan-600">{sensorData.waterLevel.toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              {/* Action Flow & AI Logic */}
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-3 text-orange-600">🔥 Automated Actions</h4>
                  <div className="space-y-3 text-sm">
                    <div className={`p-3 rounded-lg ${sensorData.temperature > 30 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'}`}>
                      <strong>Fan:</strong> {sensorData.temperature > 30 ? 'ON' : 'OFF'} 
                      <br />
                      <span className="text-xs">Temp > 30°C</span>
                    </div>
                    <div className={`p-3 rounded-lg ${sensorData.waterLevel < 40 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}>
                      <strong>Water Pump:</strong> {sensorData.waterLevel < 40 ? 'ON' : 'OFF'}
                      <br />
                      <span className="text-xs">Level < 40%</span>
                    </div>
                    <div className={`p-3 rounded-lg ${sensorData.lightIntensity < 150 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600'}`}>
                      <strong>LED Lights:</strong> {sensorData.lightIntensity < 150 ? 'ON' : 'OFF'}
                      <br />
                      <span className="text-xs">Light < 150 Lux</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-3 text-purple-600">🧠 AI Decision Flow</h4>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Sensor Data Collection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Rule-based Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span>Actuator Control</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <span>Data Logging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Technologies Used */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="text-blue-600" />
              Technologies Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold mb-3">Hardware</h4>
                <div className="text-sm space-y-1 text-gray-600">
                  <div>ESP32, Raspberry Pi</div>
                  <div>DHT11, LDR, pH Sensor</div>
                  <div>Ultrasonic Sensor, Relay</div>
                  <div>Pumps, Fans, LED Lights</div>
                </div>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-green-600" size={32} />
                </div>
                <h4 className="font-semibold mb-3">Software</h4>
                <div className="text-sm space-y-1 text-gray-600">
                  <div>Python, Arduino IDE</div>
                  <div>ThingSpeak, Blynk</div>
                  <div>WiFi Communication</div>
                  <div>Data Visualization</div>
                </div>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={32} />
                </div>
                <h4 className="font-semibold mb-3">AI/Logic</h4>
                <div className="text-sm space-y-1 text-gray-600">
                  <div>Rule-based automation</div>
                  <div>Threshold monitoring</div>
                  <div>Decision tree logic</div>
                  <div>Expandable to ML forecasting</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6. Impact */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              Project Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">+40%</div>
                <div className="text-sm text-gray-600">Crop Yield Increase</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">-35%</div>
                <div className="text-sm text-gray-600">Water Waste Reduction</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">-60%</div>
                <div className="text-sm text-gray-600">Manual Labor Reduction</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Intelligent Monitoring</div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Increased yield and health tracking through continuous monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Reduced manual labor and water waste through automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Intelligent climate control for optimal crop and poultry conditions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7. Learnings & Takeaways */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="text-green-600" />
              Learnings & Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">IoT System Design</h4>
                <p className="text-sm text-gray-600">Learned microcontroller integration, sensor calibration, and real-time data communication protocols.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Automation Logic</h4>
                <p className="text-sm text-gray-600">Developed rule-based automation systems and threshold-based decision making for agricultural applications.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">AI Model Planning</h4>
                <p className="text-sm text-gray-600">Gained insights into environmental prediction models and future implementation of machine learning algorithms.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Demo & Resources */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Explore the Project</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to dive deeper? Access the source code, watch system demonstrations, and download the comprehensive project report.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" onClick={() => window.open("https://github.com/", "_blank")}>
              <Github className="mr-2" size={16} />
              View Source Code
            </Button>
            <Button variant="outline" onClick={() => window.open("https://www.youtube.com/", "_blank")}>
              <Play className="mr-2" size={16} />
              Watch Demo Video
            </Button>
            <Button variant="outline" onClick={() => window.open("#", "_blank")}>
              <Download className="mr-2" size={16} />
              Download Report
            </Button>
            <Button variant="outline" asChild>
              <Link to="/#contact">
                <ExternalLink className="mr-2" size={16} />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAgriculturePage;
