import express from "express";
import{
    getCarros,
    getCarro,
    createCarro,
    updateCarro,
    deleteCarro
} from "../Controllers/carroControllers.js";

const router = express.Router();

router.get('/', getCarros)

router.get('/sigla', getCarro);

router.post('/', createCarro)

router.put('/sigla', updateCarro)

router.delete('/sigla', deleteCarro)

export default router;