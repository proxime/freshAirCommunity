const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/data', require('./routes/api/data'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/news', require('./routes/api/news'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));