// Using ECMAScript modules system, enabled by adding "type": "module"
// to package.json and ".mjs" file extension (optional)
// For more: https://nodejs.org/api/esm.html#enabling
import express from 'express';

const app = express();

// Route
app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Ad 1' },
    { id: 2, name: 'Ad 2' },
    { id: 3, name: 'Ad 3' },
  ]);
});

app.listen(3333);