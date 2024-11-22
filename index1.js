const express = require('express'); // Import Express.js
const app = express(); // Create an Express application

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my Express.js server!<h1/>');
});

app.get('/about', (req, res) => {
              res.send('This is the About page.');
            });
            
 app.get('/contact', (req, res) => {
 res.send('This is the Contact page.');
});
            

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
