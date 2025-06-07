import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React, { useState } from 'react';

function HomeTab() {
  return (
    <header className="flex-grow flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">CatBypasser</h1>
      <p className="text-xl text-white mb-8 max-w-2xl drop-shadow-md">
        Bypass Roblox's chat filters with style. Stable, smart, and effective.
      </p>
      <div className="space-x-4">
        <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transform transition">
          Get Started
        </button>
        <button className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:scale-105 transform transition">
          Learn More
        </button>
      </div>
    </header>
  );
}

function ApiTab() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-4">CatBypasser API Documentation</h2>
      <p className="mb-4">Base URL: <code className="bg-gray-900 px-2 py-1 rounded">https://catbypasser.api.shadow62.dev</code></p>
      <h3 className="text-2xl font-semibold mt-6 mb-2">POST /bypass</h3>
      <pre className="bg-black bg-opacity-50 p-4 rounded text-sm overflow-auto">
        {`Request Body:
{
  "text": "your message here",
  "mode": "fast" // or "smart"
}`}        
      </pre>
      <p className="mt-2">Returns:</p>
      <pre className="bg-black bg-opacity-50 p-4 rounded text-sm overflow-auto">
        {`{
  "bypassed": "text with bypass characters"
}`}
      </pre>
    </div>
  );
}

function PlaygroundTab() {
  const [input, setInput] = useState('');
  const [svgUrl, setSvgUrl] = useState(null);

  const generateSvg = () => {
    const bypassed = input.split('').join('ٖ');
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='100'>
      <rect width='100%' height='100%' fill='black'/>
      <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-family='monospace'>${bypassed}</text>
    </svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    setSvgUrl(URL.createObjectURL(blob));
  };

  return (
    <div className="p-8 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Playground</h2>
      <p className="mb-4">Type a message below to see it bypassed and rendered as an image.</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full max-w-xl px-4 py-2 rounded text-black mb-4"
        placeholder="Enter your text here"
      />
      <br />
      <button onClick={generateSvg} className="px-6 py-2 bg-white text-black rounded font-semibold hover:scale-105 transition">
        Generate
      </button>
      {svgUrl && (
        <div className="mt-6">
          <h3 className="text-xl mb-2">Result</h3>
          <img src={svgUrl} alt="Bypassed Text" className="mx-auto border rounded shadow-lg" />
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const tabs = ['Home', 'API', 'Playground'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col">
      <nav className="w-full bg-white bg-opacity-20 backdrop-blur-md">
        <ul className="max-w-4xl mx-auto flex space-x-8 p-4">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 rounded-md transition ${
                activeTab === tab
                  ? 'bg-white bg-opacity-80 text-gray-900 font-semibold'
                  : 'text-white hover:bg-white hover:bg-opacity-30'
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-grow">
        {activeTab === 'Home' && <HomeTab />}
        {activeTab === 'API' && <ApiTab />}
        {activeTab === 'Playground' && <PlaygroundTab />}
      </main>

      <footer className="w-full py-4 text-center text-white text-sm">
        © 2025 CatBypasser. All rights reserved.
      </footer>
    </div>
  );
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
}
