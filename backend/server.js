const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb+srv://Karangoplani72:ihKrrtNr4YjnIbBY@cluster0.9irzuzh.mongodb.net/nailstudio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema
const serviceSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    createdAt: { type: Date, default: Date.now }
});

const Service = mongoose.model('Service', serviceSchema);

// Multer config for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Route to add service
app.post('/add-service', upload.single('image'), async (req, res) => {
    try {
        const { name, description } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : '';
        const service = new Service({ name, description, image });
        await service.save();
        res.json({ message: 'Service added successfully!', service });
    } catch (err) {
        res.status(500).json({ message: 'Error adding service', error: err });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
