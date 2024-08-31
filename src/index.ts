import express, { Request, Response } from 'express';
import { validateBase64Image, generateGUID, createTempLink } from './utils';
import { checkPreviousReading, extractValueFromImage } from './services';

const app = express();
app.use(express.json());

app.post('/upload', async (req: Request, res: Response) => {
    try {
        const { imageBase64, type, userId } = req.body;

        // Validação da imagem base64
        if (!validateBase64Image(imageBase64)) {
            return res.status(400).json({ error: 'Invalid base64 image data.' });
        }

        // Verificação de leitura anterior no mês
        const hasPreviousReading = await checkPreviousReading(type, userId);
        if (hasPreviousReading) {
            return res.status(400).json({ error: 'Reading already exists for this month.' });
        }

        // Extração do valor numérico pela API do Gemini
        const value = await extractValueFromImage(imageBase64);

        // Geração de GUID e link temporário
        const guid = generateGUID();
        const tempLink = createTempLink(imageBase64);

        return res.status(200).json({
            guid,
            tempLink,
            value,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
