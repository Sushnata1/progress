    const express = require('express');
    const app = express();
    const port = 3000;

    // Define a route that returns an SVG
    app.get('/:progress/:total', (req, res) => {

        console.log(req.params);
        ratio = req.params.progress / req.params.total;
        
        // Set the Content-Type header to image/svg+xml
        res.setHeader('Content-Type', 'image/svg+xml');

        // Construct your SVG string
        const svgContent = `
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="50" height="50" rx="20" ry="20" fill="green" fill-opacity="${ratio}"/>
            </svg>
        `;

        // Send the SVG content as the response
        res.send(svgContent);
    });

    // Start the server
    app.listen(port, () => {
        console.log(`SVG API listening at http://localhost:${port}`);
    });