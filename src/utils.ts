import { v4 as uuidv4 } from 'uuid';

export function validateBase64Image(base64: string): boolean {
    const base64Regex = /^data:image\/(png|jpeg|jpg);base64,[a-zA-Z0-9+/]+={0,2}$/;
    const regex: RegExp = /^data:image\/(png|jpeg|jpg|gif);base64,[A-Za-z0-9+/=]+$/;
    return regex.test(base64);
    
}

export function generateGUID(): string {
    return uuidv4();
}

export function createTempLink(base64: string): string {
    // Simulação de criação de link temporário
    return `https://tempimage.com/${generateGUID()}`;
}

