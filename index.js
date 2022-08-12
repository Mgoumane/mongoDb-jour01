const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/starWars",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connectée");
  }
);

const charactersSchema = new mongoose.Schema({
    name: String,
    saberColor: String,
    age: Number,
    isVilain: Boolean,
});
  
const characterModel = mongoose.model("personnages", charactersSchema);
characterModel.find({
    //name: "Yoda"
    //isVilain: false,
    age: {
        $gt: 50
    }
}).then((response) => console.log(response));
