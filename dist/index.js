"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectUtil_1 = require("./src/utils/projectUtil");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // JSON 본문 파싱 미들웨어 추가
app.listen(8080, () => {
    console.log(`Server is running at :8080`);
});
const dataApi = express_1.default.Router();
dataApi.post('/create', (req, res) => {
    const objReturn = {
        success: true,
        data: {
            id: (0, projectUtil_1.getUuid)(),
            name: req.body.name
        },
        error: {
            code: 0,
            type: '',
            message: ''
        }
    };
    res.send(objReturn);
    return;
});
app.use('/api', dataApi); // 라우터를 앱에 등록
