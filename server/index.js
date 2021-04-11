import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import postItems from './routes/items.js';

const app = express();
const PORT = process.env.PORT || 5000;

// setup middleware to manage http requests
app.use(cors());

// routes middleware
app.use('/items', postItems);

// demo database
const MONGODB_URI = 'mongodb+srv://HostGuestAdmin:hotsguestadmin@cluster0.huhb3.mongodb.net/HostGuestRemote?retryWrites=true&w=majority';

// connect to the demo database
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// listener to check whether mongoose is connected to db
mongoose.connection.on('connected', () => {
    console.log('mongoose has been connected');
});


// remove warnings in the console
mongoose.set('useFindAndModify', false);