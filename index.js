import app from "./src/app";
import config from './src/config/config.js';

const port = 8080
app.listen(port)

console.log(`Listen on port ${port}`)

export default app;