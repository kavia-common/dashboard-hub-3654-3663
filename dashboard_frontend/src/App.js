import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import Activity from "./pages/Activity";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import Support from "./pages/Support";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component providing routing and layout without a global NavBar.
   * Navigation is driven by the Home page's bento grid; section pages include their own back-to-home control.
   */
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)]">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Existing */}
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            {/* New */}
            <Route path="/overview" element={<Overview />} />
            <Route path="/team" element={<Team />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Dashboard. Ocean Professional theme.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
