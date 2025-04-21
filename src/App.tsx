import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import WidgetSlider from "./components/WidgetSlider";

export default function App() {
  const [showWidgetSlider, setShowWidgetSlider] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <Dashboard setShowWidgetSlider={setShowWidgetSlider} />
      {/* Widget Slider */}
      {showWidgetSlider && (
        <WidgetSlider setShowWidgetSlider={setShowWidgetSlider} />
      )}
    </div>
  );
}
