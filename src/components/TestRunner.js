import React, { useState } from 'react';
import axios from 'axios';
import { PlayIcon } from '@heroicons/react/24/solid';

// NOTE: This component triggers GitHub Actions via API.
// For security, never expose your GitHub token in a public repo or static hosting (like GitHub Pages).
// For public deployments, consider using a backend proxy or GitHub Apps for secure authentication.

export default function TestRunner() {
  const [status, setStatus] = useState('');

  const runTests = async () => {
    setStatus('⏳ Running tests...');
    try {
      await axios.post('https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/actions/workflows/run-tests.yml/dispatches',
        { ref: "main" },
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
          }
        });
      setStatus('✅ Tests triggered successfully!');
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to trigger tests');
    }
  };

  return (
    <div>
      <button onClick={runTests} className="flex items-center">
        <PlayIcon className="h-5 w-5 mr-2" /> Run Playwright & Pytest
      </button>
      <p className="mt-2 text-sm text-gray-400">{status}</p>
    </div>
  );
}