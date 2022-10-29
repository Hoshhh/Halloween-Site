import mongoose from "mongoose";


const CostumeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

export default mongoose.models.Costume || mongoose.model("Costume", CostumeSchema);