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
exports.checkPreviousReading = checkPreviousReading;
exports.extractValueFromImage = extractValueFromImage;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_API_URL = process.env.GEMINI_API_URL || '';
function checkPreviousReading(type, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return false;
    });
}
function extractValueFromImage(base64) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(GEMINI_API_URL, {
                image: base64,
            }, {
                headers: {
                    'Authorization': `Bearer ${GEMINI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            if (response.data && response.data.value) {
                return response.data.value;
            }
            else {
                throw new Error('Failed to extract value: Invalid response from Gemini API');
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error communicating with Gemini API:', error.message);
            }
            else {
                console.error('Unexpected error:', error);
            }
            throw new Error('Failed to extract value from image');
        }
    });
}
