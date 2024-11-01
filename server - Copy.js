// server.js
const express = require('express'); // Check if this line throws an error
const bodyParser = require('body-parser'); // Check if this line throws an error
const nodemailer = require('nodemailer'); // Check if this line throws an error
const path = require('path');

const app = express();
const PORT = 5001; // Server will run on port 5000
const port = 5001; // or any other available port


// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the public directory

// Route to serve the contact form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html')); // Ensure contact.html is in the public folder
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password'     // Your email password or app-specific password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'mohantymart2012@gmail.com', // Where to send the email
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            return res.status(500).send('Error sending email.'); // Respond with an error message
        }
        console.log('Email sent:', info.response);
        res.send('Email sent successfully!'); // Respond with success message
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
