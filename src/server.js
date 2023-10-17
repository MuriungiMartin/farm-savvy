const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your API routes
// Example:
app.get('/api/items', (req, res) => {
  // Implement your API logic here
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
