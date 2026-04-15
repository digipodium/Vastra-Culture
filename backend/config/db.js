const mongoose = require('mongoose');
require('dotenv').config();
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const connectDB = async () => {
    try {
        console.log('🔄 Connecting to MongoDB...');
        const mongoURI = process.env.MONGODB_URI;
        
        if (!mongoURI) {
            throw new Error('MONGODB_URI not found in .env');
        }

        const conn = await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log('✅ MongoDB Connected Successfully');
        console.log(`📍 Connected to: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error.message);
        console.error('Retrying in 5 seconds...');
        
        // Retry after 5 seconds
        setTimeout(() => {
            connectDB();
        }, 5000);
    }
};

module.exports = connectDB;