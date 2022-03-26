"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//intializations
const app = (0, express_1.default)();
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use((0, morgan_1.default)('dev')); //usamos el modulo de desarrollo'dev' de morgan
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false })); // estos metodos de express son necesario para las request tipo post y put, reciben 
app.use(express_1.default.json()); // los datos enviados desde el front 
//routes
app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});
exports.default = app;
