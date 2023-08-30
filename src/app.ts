import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes/index";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); //Permite cualquier dominio pueda consumir esta API.
app.use(router);


app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
});
