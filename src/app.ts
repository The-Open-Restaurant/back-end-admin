// v 1.0.0
import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Application running on http://localhost:3000");
});
