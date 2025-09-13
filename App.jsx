import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/Card";
import Button from "./components/ui/Button";
import "./index.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="brand">Trash to Triumph</h1>
        {[
          "dashboard",
          "map",
          "complaints",
          "gamification",
          "segregation",
          "notifications",
          "analytics",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`nav-btn ${activeTab === tab ? "active" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </aside>

      {/* Main */}
      <main className="main">
        {activeTab === "dashboard" && <UserDashboard />}
        {activeTab === "map" && <InteractiveMap />}
        {activeTab === "complaints" && <Complaints />}
        {activeTab === "gamification" && <Gamification />}
        {activeTab === "segregation" && <Segregation />}
        {activeTab === "notifications" && <Notifications />}
        {activeTab === "analytics" && <Analytics />}
      </main>
    </div>
  );
}

// Components
function UserDashboard() {
  return (
    <Card>
      <CardContent>
        <h2>User Dashboard</h2>
        <p>Bin fill levels: 65%</p>
        <p>Next collection: Tomorrow at 10 AM</p>
      </CardContent>
    </Card>
  );
}

function InteractiveMap() {
  return (
    <Card>
      <CardContent>
        <h2>Interactive Map</h2>
        <p>📍 Nearest Bin: 200m</p>
        <p>📍 Recycling Center: 1.5km</p>
        <p>🚛 Staff Route Optimized</p>
      </CardContent>
    </Card>
  );
}

function Complaints() {
  return (
    <Card>
      <CardContent>
        <h2>Complaint Submission</h2>
        <input className="input" placeholder="Describe issue..." />
        <Button>Upload Photo</Button>
        <p>Status: Pending...</p>
      </CardContent>
    </Card>
  );
}

function Gamification() {
  return (
    <Card>
      <CardContent>
        <h2>Gamification</h2>
        <p>⭐ Points: 120</p>
        <p>🏅 Badge: Eco-Warrior</p>
        <p>🏆 Leaderboard: You are #5</p>
      </CardContent>
    </Card>
  );
}

function Segregation() {
  return (
    <Card>
      <CardContent>
        <h2>Waste Segregation</h2>
        <p>Upload a photo, AI suggests correct bin.</p>
        <Button>Upload Waste Photo</Button>
      </CardContent>
    </Card>
  );
}

function Notifications() {
  return (
    <Card>
      <CardContent>
        <h2>Notifications</h2>
        <p>📢 Pickup Reminder: Tomorrow 10 AM</p>
        <p>⚠️ Delay Alert: Today’s pickup postponed to 5 PM</p>
      </CardContent>
    </Card>
  );
}

function Analytics() {
  return (
    <Card>
      <CardContent>
        <h2>Analytics</h2>
        <p>Total Waste Collected: 5 Tons</p>
        <p>Route Efficiency: 87%</p>
        <p>Complaints Resolved: 92%</p>
      </CardContent>
    </Card>
  );
}

