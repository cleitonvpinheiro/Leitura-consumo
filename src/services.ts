import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY: string = process.env.GEMINI_API_KEY || '';
const GEMINI_API_URL: string = process.env.GEMINI_API_URL || '';

export async function checkPreviousReading(type: string, userId: string): Promise<boolean> {
   
    return false;
}
export async function extractValueFromImage(base64: string): Promise<number> {
    try {
        const response = await axios.post(GEMINI_API_URL, {
            image: base64,
        }, {
            headers: {
                'Authorization': `Bearer ${GEMINI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.data && response.data.value) {
            return response.data.value;
        } else {
            throw new Error('Failed to extract value: Invalid response from Gemini API');
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error communicating with Gemini API:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw new Error('Failed to extract value from image');
    }
}
