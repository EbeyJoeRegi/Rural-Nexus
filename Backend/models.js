const mongoose = require('mongoose');

// Define schemas and models
const userSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    username: { type: String, unique: true, required: true },
    name: String,
    phone: String,
    address: String,
    job_title: String,
    email: String,
    password: String,
    activation: { type: Number, default: 0 },
    user_type: { type: String, default: 'user' },
    raID: { type: String, unique: true, required: true }
});

const announcementSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: String,
    content: String,
    created_at: { type: Date, default: Date.now }
});

const suggestionSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: String,
    content: String,
    username: String,
    created_at: { type: Date, default: Date.now },
    response: String
});

const querySchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    username: String,
    matter: String,
    time: { type: Date, default: Date.now },
    admin_response: String
});

const placeSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    place_name: String
});

const cropSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    crop_name: { type: String, required: true },
    avg_price: { type: mongoose.Schema.Types.Mixed, required: true },
});

const priceSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    place_id: { type: Number, ref: 'Place', required: true },
    crop_id: { type: Number, ref: 'Crop', required: true },
    price: mongoose.Schema.Types.Mixed,
    month_year: String
});

const counterSchema = new mongoose.Schema({
    _id: String,
    sequence_value: Number
});

const User = mongoose.model('User', userSchema);
const Announcement = mongoose.model('Announcement', announcementSchema);
const Suggestion = mongoose.model('Suggestion', suggestionSchema);
const Query = mongoose.model('Query', querySchema);
const Place = mongoose.model('Place', placeSchema);
const Crop = mongoose.model('Crop', cropSchema);
const Price = mongoose.model('Price', priceSchema);
const Counter = mongoose.model('Counter', counterSchema);

module.exports = {
    User,
    Announcement,
    Suggestion,
    Query,
    Place,
    Crop,
    Price,
    Counter
};
