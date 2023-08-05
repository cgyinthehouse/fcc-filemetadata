"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.get("/", function (_req, res) {
    res.sendFile("index.html", { root: path_1.default.join(__dirname, "../public") });
});
app.post("/api/fileanalyse", (0, multer_1.default)().single("upfile"), function (req, res) {
    var _a, _b, _c;
    res.json({
        name: (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname,
        type: (_b = req.file) === null || _b === void 0 ? void 0 : _b.mimetype,
        size: (_c = req.file) === null || _c === void 0 ? void 0 : _c.size,
    });
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Your app is listening on port " + port);
});
exports.default = app;
