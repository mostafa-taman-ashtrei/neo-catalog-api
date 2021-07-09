"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productRoutes_1 = require("./productRoutes");
var router = express_1.default();
var initRoutes = function (app) {
    router.get('/', function (_, res) { return res.json({ msg: 'Hi there' }); });
    router.use('/products', productRoutes_1.getProdutsRoutes());
    return app.use(router);
};
exports.default = initRoutes;
//# sourceMappingURL=initRoutes.js.map