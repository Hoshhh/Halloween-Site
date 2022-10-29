import dbConnect from "../../../lib/mongo";
import Game from "../../../models/Game";

export default async function handler(req, res) {
    const { method } = req;

    console.log('connecting to mongo...')
    await dbConnect();
    console.log('connected!')

    if (method === "GET") {
        try{
            const games = await Game.find()
            res.status(200).json(games)
        } catch(err){
            res.status(500).json(err)
        }
    }

    if (method === "POST") {
        try{
            console.log("creating document...")
            const game = await Game.create(req.body);
            console.log("document created!")
            res.status(201).json({ game });
        } catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
}