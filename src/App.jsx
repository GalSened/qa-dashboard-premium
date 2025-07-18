import React from 'react';
import TestRunner from './components/TestRunner.jsx';
import AIPanel from './components/AIPanel.jsx';
import LinksPanel from './components/LinksPanel.jsx';

export default function App() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mb-6">🚀 QA DevOps Dashboard</h1>
      <p className="text-center text-gray-400 mb-8">
        Manage your tests, AI tools, and development environment – optimized for iPad & iPhone.
      </p>
      <div className="panel">
        <h2 className="text-xl font-semibold mb-4">Run Automated Tests</h2>
        <TestRunner />
      </div>
      <div className="panel">
        <h2 className="text-xl font-semibold mb-4">AI Assistant (ChatGPT & Claude)</h2>
        <AIPanel />
      </div>
      <div className="panel">
        <h2 className="text-xl font-semibold mb-4">Quick Access Links</h2>
        <LinksPanel />
      </div>
    </div>
  );
}