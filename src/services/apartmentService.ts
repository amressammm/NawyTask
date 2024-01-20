const Apartment = require("../models/Apartment");

exports.getApartments = async (req, res) => {
    try {
        const apartments = await Apartment.find({}, "_id address description ");
        res.send({ data: apartments });
    } catch (error) {
        res.send({ error: error.toString() });
    }
};

exports.createApartment = async (req, res) => {
    try {
        const response = await Apartment.create({
            ...req.body,
        });
        res.send({ data: response });
    } catch (error) {
        res.send({ error: error.toString() });
    }
};

exports.getApartmentDetails = async (req, res) => {
    try {
        const apartmentId = req.params.id;
        const apartment = await Apartment.findById({ _id: apartmentId });
        res.send({ data: apartment });
    } catch (error) {
        res.send({ error: error.toString() });
    }
};
