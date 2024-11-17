const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
app.use(cors());

// Configure AWS SDK
AWS.config.update({ region: 'us-east-1' }); // Replace with your AWS region, e.g., 'us-east-1'

const s3 = new AWS.S3();

// Endpoint to fetch S3 buckets
app.get('/api/s3-buckets', async (req, res) => {
    try {
        const buckets = await s3.listBuckets().promise();
        const bucketNames = buckets.Buckets.map(bucket => bucket.Name);
        res.json({ buckets: bucketNames });
    } catch (error) {
        console.error("Error fetching S3 buckets:", error);
        res.status(500).send("Error retrieving S3 buckets");
    }
});

const PORT = 5002; // Set a different port to avoid conflicts with backend1
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

