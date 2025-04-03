const mongoose = require('mongoose');
const connectDB = async () => {

    try{
        mongoose.set('strictQuery', false);
        // const conn = await mongoose.connect(process.env.MONGODB_URI);  It was shown but somehow not working
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            tls: true, // Ensures TLS is enabled
            tlsAllowInvalidCertificates: true, // Bypass certificate validation issues
        });
        console.log(`Database Connected: ${conn.connection.host}`);
    }catch(error) {
        console.log(error);
    }

}

module.exports = connectDB;