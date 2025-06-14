require('dotenv').config();
const cors = require('cors');
const express = require('express');
const MongoConnect = require('./config/db.js');
const createDefault = require('./utils/createDefault.js');
const brandRoute = require('./routes/brandRoute.js');
const feedbackRoute = require('./routes/feedbackRoute.js');
const productRoute = require('./routes/productRoute.js');

const app = express();
const port = process.env.PORT || 3001; 

// ✅ Middlewares
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));  
app.use(express.json()); 
 
// ✅ Connection to MongoDB
MongoConnect();

// ✅ Call Routes
createDefault();
app.use('/api/brand', brandRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/products', productRoute);

// ✅ Routes Controls
app.get('/', (req, res) => {
    res.send('Hello from Shiva Enterprises API 🚀');
});

// ✅ Starting Server
app.listen(port, () => {
    console.log(`✅ Server Running on http://localhost:${port}`);
});