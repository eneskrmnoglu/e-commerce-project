const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema(
  {
    ad: { type: String, require },
    ozellik: [],
    fiyat: [],
    marka: { type: String, require },
    kategori: { type: String, require },
    img: { type: String, require },
    desc: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const burgerModel = mongoose.model("foods", burgerSchema);

module.exports = burgerModel;
