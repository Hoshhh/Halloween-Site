import mongoose from "mongoose";


const VideoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Video || mongoose.model("Video", VideoSchema);