import express from "express";
import cors from 'cors'
import clientRoutes from "./routes/clientRoute.js"

const app = express();

const port = 3000;

app.use(cors())
app.use(express.json())

app.use('/api', clientRoutes); // Should output a json file

// app.get("/", (req, res) => {
//   res.send("Hello Backend");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
