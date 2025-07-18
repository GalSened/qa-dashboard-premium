import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  try {
    const openaiRes = await axios.post('https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: question }]
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );
    res.json({ answer: openaiRes.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ answer: 'Error connecting to AI' });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`AI Proxy Server running on port ${PORT}`));