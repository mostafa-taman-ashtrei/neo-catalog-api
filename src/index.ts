import { config } from 'dotenv';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import initRoutes from './routes/initRoutes';

(async () => {
    config();

    const app = express();
    const port = process.env.PORT || 8080;

    // middlewares
    app.use(helmet()); // Helps with securing the app
    app.use(express.json()); // Parses incoming requests with json payloads
    app.use(morgan('dev')); // Provides logs for all the requests

    // save logs to access.log in production
    if (process.env.NODE_ENV === 'production') {
        const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
        app.use(morgan('combined', { stream: accessLogStream }));
    }

    initRoutes(app);

    app.listen(port, () => console.log(`Server is running on port ${port} ...`));
})();
