const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const titleSchema = new mongoose.Schema({ title: String });
const Title = mongoose.model('Title', titleSchema);

app.post('/check-title', async (req, res) => {
    const { title } = req.body;
    const existingTitle = await Title.findOne({ title: new RegExp(`^${title}$`, 'i') });

    if (existingTitle) {
        return res.status(400).json({ message: 'Title already exists' });
    }

    const newTitle = new Title({ title });
    await newTitle.save();

    res.status(200).json({ message: 'Title is unique and saved' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
