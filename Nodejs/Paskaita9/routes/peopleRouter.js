import express from "express";
import { addPerson, addPhoneToPerson, getPeople, getPeopleWithPhones } from "../controllers/person.js";

const router = express.Router();

router.get("/people", getPeople);

router.get("/people/phones", getPeopleWithPhones);

router.post("/people", addPerson)

router.put("/people/:personId/phone/:phoneId", addPhoneToPerson)

export default router;