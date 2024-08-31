"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBase64Image = validateBase64Image;
exports.generateGUID = generateGUID;
exports.createTempLink = createTempLink;
const uuid_1 = require("uuid");
function validateBase64Image(base64) {
    const base64Regex = /^data:image\/(png|jpeg|jpg);base64,[a-zA-Z0-9+/]+={0,2}$/;
    return base64Regex.test(base64);
}
function generateGUID() {
    return (0, uuid_1.v4)();
}
function createTempLink(base64) {
    // Simulação de criação de link temporário
    return `https://tempimage.com/${generateGUID()}`;
}
