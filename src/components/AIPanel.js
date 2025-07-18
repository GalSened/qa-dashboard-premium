import React, { useState } from 'react';
import axios from 'axios';

export default function AIPanel() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const askAI = async () => {
    setResponse('Thinking...');
    try {
      const res = await axios.post('http://localhost:3001/api/ask', { question: input });
      setResponse(res.data.answer);
    } catch (err) {
      setResponse('Error: AI not configured or server offline');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Ask AI something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={askAI}>Ask</button>
      <p>{response}</p>
    </div>
  );
}