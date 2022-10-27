import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
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

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);