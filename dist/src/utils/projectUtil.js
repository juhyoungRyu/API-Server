"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUuid = getUuid;
const crypto_1 = require("crypto");
function getUuid() {
    return (0, crypto_1.randomUUID)().replace('-', '');
}
