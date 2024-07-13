const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect("mongodb+srv://heshanchamika:heshan@veggify-recipe-app.fd17x8h.mongodb.net/veggify-recipe-app?retryWrites=true&w=majority&appName=veggify-recipe-app");

  app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server!");
  });
}

main().then(() => console.log("Mongodb Connected Successfully")).catch((err) => console.log(err));

// routes
const itemRoutes = require("./src/routes/itemRoute");
const categoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", itemRoutes);
app.use("/api", categoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
