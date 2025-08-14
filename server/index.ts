import cors from 'cors';
import dotenv from 'dotenv';
import type {
  Request,
  Response,
} from 'express';
import express from 'express';

dotenv.config({ path: '.env.local' });

const app = express();
// const corsOptions = {
//     origin: 'http://localhost:3000', // Only allow requests from this origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
//     credentials: true // Allow sending cookies/authentication headers
// };
// app.use(cors(corsOptions));
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    // Handle the GET request here
    // For example, send back some JSON data
    setTimeout(() => { res.json({ message: 'This is data from your GET API!' }) }, 2000)
    ;
});

/*
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id; // Access URL parameters
    // In a real application, you would fetch user data from a database
    res.json({ id: userId, name: `User ${userId}` });
});
*/

app.get('/', (req: Request, res: Response) => {
  res.status(401).send('Not authorized');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
