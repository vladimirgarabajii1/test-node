import express from 'express';
import route from "./routes";

const app = express();
const port = 3000;

app.use(express.json())

app.use(route);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
