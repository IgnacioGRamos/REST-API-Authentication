"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("./db");
app_1.default.listen(app_1.default.get('port')); //le decimos que escuche en el puerto antes definido en app.set
console.log('Server on port,', app_1.default.get('port'));
