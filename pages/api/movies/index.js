import dbConnect from "../../../lib/mongo";
import Movie from "../../../models/Movie";

export default async function handler(req, res) {
    const { method } = req;

    console.log('connecting to mongo...')
    await dbConnect();
    console.log('connected!')

    if (method === "GET") {
        try{
            const movies = await Movie.find()
            res.status(200).json(movies)
        } catch(err){
            res.status(500).json(err)
        }
    }

    if (method === "POST") {
        try{
            console.log("creating document...")
            const movie = await Movie.create(req.body);
            console.log("document created!")
            res.status(201).json({ movie });
        } catch(err) {
            console.log(err)
            res.status(500).json(err);
        }
    }
}