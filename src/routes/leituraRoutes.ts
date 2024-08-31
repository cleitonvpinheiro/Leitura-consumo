import { Router } from "express";
import { getLeituras, getLeituraById, createLeitura, updateLeitura, deletLeitura } from "../controllers/leituraController";

const router = Router();

router.get('/leituras', getLeituras);
router.get('/leituras/:id', getLeituraById );
router.post('/leituras', createLeitura);
router.put('/leituras/:id', updateLeitura);
router.delete('/leituras/:id', deletLeitura);

export default router;
