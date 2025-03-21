import express, { application } from "express";
import booksRoutes from "./routes/booksRouter.js";

const app = express();
app.use(express.json());

app.use("/books", booksRoutes);

app.listen(3000, () => {
  console.log("Server runs");
});
