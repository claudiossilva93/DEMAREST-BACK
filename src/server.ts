import express from "express";
const cors = require('cors')
import router from "./router";
const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3000);
