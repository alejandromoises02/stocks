import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const API_KEY = process.env.TWELVEDATA_API_KEY;
const BASE_URL = process.env.TWELVEDATA_BASE_URL;

app.use(cors());

app.get('/api/twelvedata/:endpoint', async (req, res) => {
  const { endpoint } = req.params;
  const queryParams = new URLSearchParams({ ...req.query, apikey: API_KEY });
  const response = await fetch(`${BASE_URL}/${endpoint}?${queryParams}`);
  const data = await response.json();
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
