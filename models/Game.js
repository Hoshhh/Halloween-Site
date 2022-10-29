import mongoose from "mongoose";


const GameSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
},
{ timestamps: true }
);

export default mongoose.models.Game || mongoose.model("Game", GameSchema);