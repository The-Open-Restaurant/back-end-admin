// v 1.0.0
import express from "express";

const app = express();

app.get((req: Request, res: Response) => {
  return res.send("From Express");
});

app.listen(3000, () => {
  console.log("Application running on http://localhost:3000");
});
