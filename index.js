import app from "./src/app";
import config from './src/config/config.js';

const port = 'https://proyecto-final-backend-coderhouse.vercel.app/';
app.listen(port)

console.log(`Listen on port ${port}`)

export default app;