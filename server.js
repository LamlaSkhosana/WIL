const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());

const config = {
    user: 'DESKTOP-QAFA1QR/User',        // Replace with your SQL Server username
    password: '',    // Replace with your SQL Server password
    server: 'property',         // Your server name
    database: 'RealEstate',      // Your database name
    options: {
        encrypt: true,           // Use this if you're on Azure
        trustServerCertificate: true, // Change to true for local dev / self-signed certs
    },
};

const properties = [
    { name: "Modern Family Home", image: "Buy/Family.png", link: "Properties/Family.html" },
    { name: "Luxury Condo", image: "Buy/condo.png", link: "Properties/Condo.html" },
    { name: "Architectural Home", image: "Buy/archi.png", link: "Properties/Architectural.html" },
    { name: "Luxury Mansion", image: "Buy/mansion.png", link: "Properties/Mansion.html" },
    { name: "Cozy Apartment", image: "Buy/Apartment.png", link: "https://example.com/property5" },
    { name: "Historic Villa", image: "Buy/Townh.png", link: "https://example.com/property6" },
    { name: "Contemporary Loft", image: "Buy/Townhouse.png", link: "https://example.com/property7" },
    { name: "Beachfront Bungalow", image: "Buy/flat.png", link: "https://example.com/property8" },
    { name: "Mountain Cabin", image: "Buy/modern.png", link: "https://example.com/property9" },
    { name: "Urban Studio", image: "Buy/Villa.jpg", link: "https://example.com/property10" }
];

app.post('/add-properties', async (req, res) => {
    try {
        await sql.connect(config);
        const transaction = new sql.Transaction();
        await transaction.begin();

        const request = new sql.Request(transaction);
        for (const property of properties) {
            await request.query(`INSERT INTO Properties (Name, Image, Link) VALUES ('${property.name}', '${property.image}', '${property.link}')`);
        }

        await transaction.commit();
        res.send('Properties inserted successfully');
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Error inserting properties');
    } finally {
        await sql.close();
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
