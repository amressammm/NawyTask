import { Router } from "express";
const apartmentService = require("../services/apartmentService");

export const index = Router();

index.get("/apartments", apartmentService.getApartments);
index.get("/apartment-details/:id", apartmentService.getApartmentDetails);
index.post("/create", apartmentService.createApartment);
