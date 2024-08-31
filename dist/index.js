"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const services_1 = require("./services");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imageBase64, type, userId } = req.body;
        // Validação da imagem base64
        if (!(0, utils_1.validateBase64Image)(imageBase64)) {
            return res.status(400).json({ error: 'Invalid base64 image data.' });
        }
        // Verificação de leitura anterior no mês
        const hasPreviousReading = yield (0, services_1.checkPreviousReading)(type, userId);
        if (hasPreviousReading) {
            return res.status(400).json({ error: 'Reading already exists for this month.' });
        }
        // Extração do valor numérico pela API do Gemini
        const value = yield (0, services_1.extractValueFromImage)(imageBase64);
        // Geração de GUID e link temporário
        const guid = (0, utils_1.generateGUID)();
        const tempLink = (0, utils_1.createTempLink)(imageBase64);
        return res.status(200).json({
            guid,
            tempLink,
            value,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
