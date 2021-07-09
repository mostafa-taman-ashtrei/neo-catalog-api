"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProdutsRoutes = void 0;
var express_1 = __importDefault(require("express"));
var product_controller_1 = require("../controllers/product.controller");
var getProdutsRoutes = function () {
    var router = express_1.default();
    router.get('/all', product_controller_1.getAllProducts);
    router.get('/:id', product_controller_1.getProductById);
    return router;
};
exports.getProdutsRoutes = getProdutsRoutes;
//# sourceMappingURL=productRoutes.js.map