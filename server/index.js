const express = require("express");
const cors = require("cors");
const db = require("./db");
const burgerModel = require("./models/burgerModel");
const app = express();
const burgersRoute = require("./routes/burgersRoute");

app.use(express.json());
app.use(cors());

//http://localhost:4000/api/burgers/getBurgers
app.use("/api/burgers/", burgersRoute);

//serverımızı inşa edeceğimiz portu belirleyerek ayağa kaldırdık.
app.listen(4000, () => {
  console.log(`Food Order Serverı 4000 portunda başarıyla ayağa kalktı 🔥🔥🔥`);
});
