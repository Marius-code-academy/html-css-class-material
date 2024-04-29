import express from "express";
import router from "./routes/index.js"

const PORT = 3000;

const app = express();

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))