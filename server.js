const express = require("express");
const app = express();

//Init MiddleWare
app.use(express.json({ extended: false }));

const cors = require("cors");

app.use(cors({ origin: true }));
app.use("/api", require("./routes/api/calculator.js"));
app.use("/", require("./routes/api/getToken.js"));
app.use(cors());

const PORT = process.env.PORT || 5000;
app.get("/health", (req, res) => {
  res.json({ statusCode: 200, data: "Success" });
});

app.get("/", (req, res) => {
  res.send("<h2>Hello this is the home page</h2>");
});

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
