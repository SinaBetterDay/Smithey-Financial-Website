const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Importing the CORS middleware

const app = express();
const PORT = 3000;

// Use CORS middleware to allow requests from other origins (frontend running on 5500)
app.use(cors()); // This will allow all origins by default

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '..', 'frontend'))); // Serve frontend files

// Endpoint to fetch PDF files from the "newsletterpdfs" folder
app.get('/api/newsletters', (req, res) => {
    const directoryPath = path.join(__dirname, '..', 'newsletterpdfs'); // Adjust folder path

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: "Unable to scan files" });
        }

        // Filter only PDF files and create URLs
        const pdfFiles = files
            .filter(file => file.endsWith('.pdf'))
            .map(file => `/newsletterpdfs/${file}`); // Ensure proper URL encoding

        res.json(pdfFiles);
    });
});

// Serve PDFs from the "newsletterpdfs" folder
app.use('/newsletterpdfs', express.static(path.join(__dirname, '..', 'newsletterpdfs')));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});