import dbConnect from "../../../lib/mongo";
import Costume from "../../../models/Costume";

export default async function handler(req, res) {
    const { method } = req;

    console.log('connecting to mongo...')
    await dbConnect();
    console.log('connected!')

    if (method === "GET") {
        try{
            const costumes = await Costume.find()
            res.status(200).json(costumes)
        } catch(err){
            res.status(500).json(err)
        }
    }

    if (method === "POST") {
        try{
            console.log("creating document...")
            const costume = await Costume.create(req.body);
            console.log("document created!")
            res.status(201).json({ costume });
        } catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
}