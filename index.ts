import express from "express";
import cors from "cors";
import multer from "multer";
import path from 'path'
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.static("public"));


app.get("/", function(_req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});
app.post("/api/fileanalyse", multer().single("upfile"), function(req, res) {
  res.json({
    name: req.file?.originalname,
    type: req.file?.mimetype,
    size: req.file?.size,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Your app is listening on port " + port);
});

export default app
