import Router, { Express } from 'express';
import { getProdutsRoutes } from './productRoutes';

const router = Router();

const initRoutes = (app: Express) => {
    router.get('/', (_, res) => res.json({ msg: 'Hi there' }));
    router.use('/products', getProdutsRoutes());
    return app.use(router);
};

export default initRoutes;
