import Router from 'express';
import { getAllProducts, getProductById } from '../controllers/product.controller';

export const getProdutsRoutes = () => {
    const router = Router();
    router.get('/all', getAllProducts);
    router.get('/:id', getProductById);
    return router;
};
