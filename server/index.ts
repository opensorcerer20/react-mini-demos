import cors from 'cors';
import dotenv from 'dotenv';
import type {
  Request,
  Response,
} from 'express';
import express from 'express';

dotenv.config();

const app = express();
// const corsOptions = {
//     origin: 'http://localhost:3000', // Only allow requests from this origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
//     credentials: true // Allow sending cookies/authentication headers
// };
// app.use(cors(corsOptions));
app.use(cors());

// @todo not being used
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express App!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
