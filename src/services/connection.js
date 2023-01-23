require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function connection()
{
    await mongoose.connect(process.env.MONGO_URL);
}

module.exports = {
    connection
}