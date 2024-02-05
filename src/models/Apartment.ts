const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

export default Apartment;
