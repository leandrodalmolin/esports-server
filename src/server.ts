import express from 'express';

const app = express();

// List games
app.get('/games', (request, response) => {
  return response.json([]);
});

// Create ad
app.post('/ads', (request, response) => {
  return response.status(201).json([]);
});

// List ads by game
app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    { id: 1, name: 'Ad 1' },
    { id: 2, name: 'Ad 2' },
    { id: 3, name: 'Ad 3' },
    { id: 4, name: 'Ad 4' },
  ]);
});

// List discord users by ad
app.get('/ads/:id/discord', (request, response) => {
  // const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);