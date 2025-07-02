
import { ArrowLeft, Thermometer, Droplet, Sun, Zap, Cpu, Wifi, TrendingUp, Leaf, Fish, Egg } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SmartAgriculturePage = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 24.5,
    humidity: 68,
    ph: 6.8,
    lightIntensity: 85,
    waterLevel: 92
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(prev => ({
        temperature: Math.max(20, Math.min(30, prev.temperature + (Math.random() - 0.5) * 2)),
        humidity: Math.max(40, Math.min(90, prev.humidity + (Math.random() - 0.5) * 5)),
        ph: Math.max(5.5, Math.min(8.0, prev.ph + (Math.random() - 0.5) * 0.2)),
        lightIntensity: Math.max(60, Math.min(100, prev.lightIntensity + (Math.random() - 0.5) * 10)),
        waterLevel: Math.max(70, Math.min(100, prev.waterLevel + (Math.random() - 0.5) * 8))
      }));
    }, 2000);

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
            <h1 className="text-2xl font-bold text-gradient">🌾 Smart Agriculture System</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Project Overview */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI and IoT Integration in Sustainable Agriculture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary smart farming system combining hydroponics, aquaponics, and poultry management 
            with AI-driven automation for optimal resource utilization and maximum yield.
          </p>
        </div>

        {/* Main System Visualization */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          {/* Smart Farm Layout */}
          <div className="xl:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-green-600" />
                  Smart Farm Layout
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6 min-h-[400px]">
                  {/* Hydroponics Section */}
                  <div className="absolute top-4 left-4 bg-green-200 rounded-lg p-4 w-48 animate-pulse">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf size={20} className="text-green-700" />
                      <span className="font-semibold text-green-800">Hydroponics</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-green-400 rounded-full animate-bounce" 
                             style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>

                  {/* Aquaponics Section */}
                  <div className="absolute top-4 right-4 bg-blue-200 rounded-lg p-4 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <Fish size={20} className="text-blue-700" />
                      <span className="font-semibold text-blue-800">Aquaponics</span>
                    </div>
                    <div className="bg-blue-400 rounded-lg h-16 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-500 animate-pulse opacity-50"></div>
                      <Fish className="absolute top-2 left-2 text-blue-800 animate-bounce" />
                      <Fish className="absolute bottom-2 right-4 text-blue-800 animate-bounce" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>

                  {/* Poultry Section */}
                  <div className="absolute bottom-4 left-4 bg-yellow-200 rounded-lg p-4 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <Egg size={20} className="text-yellow-700" />
                      <span className="font-semibold text-yellow-800">Poultry</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse" 
                             style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>

                  {/* Central Control Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg border-2 border-primary">
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="text-primary animate-spin" />
                      <span className="font-bold text-primary">AI Control Hub</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-100 p-2 rounded text-xs text-center">ESP32</div>
                      <div className="bg-blue-100 p-2 rounded text-xs text-center">Raspberry Pi</div>
                      <div className="bg-purple-100 p-2 rounded text-xs text-center col-span-2">AI Engine</div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <animate id="dash" attributeName="stroke-dasharray" 
                               values="0,10;5,5;10,0;5,5;0,10" dur="2s" repeatCount="indefinite"/>
                    </defs>
                    <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0;5,5;0,10" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0;5,5;0,10" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </line>
                    <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dasharray" values="0,10;5,5;10,0;5,5;0,10" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </line>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Dashboard */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="text-primary animate-pulse" />
                  Live Sensor Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Thermometer className="text-red-600" />
                    <span className="font-medium">Temperature</span>
                  </div>
                  <span className="text-2xl font-bold text-red-600">{sensorData.temperature.toFixed(1)}°C</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Droplet className="text-blue-600" />
                    <span className="font-medium">Humidity</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{sensorData.humidity.toFixed(0)}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="text-green-600" />
                    <span className="font-medium">pH Level</span>
                  </div>
                  <span className="text-2xl font-bold text-green-600">{sensorData.ph.toFixed(1)}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Sun className="text-yellow-600" />
                    <span className="font-medium">Light</span>
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">{sensorData.lightIntensity.toFixed(0)}%</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Droplet className="text-cyan-600" />
                    <span className="font-medium">Water Level</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-600">{sensorData.waterLevel.toFixed(0)}%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-green-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Crop Yield Increase</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">+35%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Water Usage Reduction</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">-28%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Efficiency</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">+42%</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Automation Level</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">85%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Stack */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>🛠️ Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-blue-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Hardware Layer</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>ESP32 Microcontrollers</div>
                  <div>Raspberry Pi 4</div>
                  <div>DHT11/22 Sensors</div>
                  <div>pH & TDS Sensors</div>
                  <div>Ultrasonic Sensors</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="text-green-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">IoT Communication</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>WiFi Connectivity</div>
                  <div>MQTT Protocol</div>
                  <div>Real-time Data Streaming</div>
                  <div>Cloud Integration</div>
                  <div>Mobile App Interface</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">AI & Automation</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>Machine Learning Models</div>
                  <div>Predictive Analytics</div>
                  <div>Automated Control Systems</div>
                  <div>Decision Tree Algorithms</div>
                  <div>Resource Optimization</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "🌱", title: "Smart Hydroponics", desc: "Automated nutrient delivery and pH optimization" },
            { icon: "🐟", title: "Integrated Aquaponics", desc: "Symbiotic fish and plant cultivation system" },
            { icon: "🐓", title: "Poultry Management", desc: "Climate-controlled environment for optimal production" },
            { icon: "🤖", title: "AI Decision Making", desc: "Intelligent resource allocation and optimization" },
            { icon: "📱", title: "Remote Monitoring", desc: "Real-time dashboard and mobile app control" },
            { icon: "⚡", title: "Energy Efficient", desc: "Solar-powered with smart energy management" }
          ].map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Agriculture?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This project demonstrates the power of combining AI, IoT, and sustainable farming practices 
            to create efficient, scalable agricultural solutions for the future.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90" onClick={() => window.open("https://github.com/", "_blank")}>
              <Github className="mr-2" size={16} />
              View Source Code
            </Button>
            <Button variant="outline" asChild>
              <Link to="/#contact">
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
