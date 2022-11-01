import dbConnect from "../../../lib/mongo";
import Video from "../../../models/Video";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === "GET") {
        try{
            const videos = await Video.find()
            res.status(200).json(videos)
        } catch(err){
            res.status(500).json(err)
        }
    }

    if (method === "POST") {
        try{
            console.log("creating document...")
            const video = await Video.create(req.body);
            console.log("document created!")
            res.status(201).json({ video });
        } catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
}