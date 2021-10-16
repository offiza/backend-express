import Post from './Post.js';

class PostController {
    async create(req, res){
        try{
            const {name, job, position, picture} = req.body;
            const post = await Post.create({name, job, position, picture});
            res.json(post);
        }catch(e){
            res.status(500).json(e);
            console.log(e);
        }
    }

    async getAll(req, res){
        try{
            const users = await Post.find();
            return res.json(users);
        }catch(e){
            res.status(500).json(e);
            console.log(e);
        }
    }

    async getOne(req, res){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message:"No Id"});
            }
            const user = await Post.findById(id)
            return res.json(user);
        }catch(e){
            res.status(500).json(e);
            console.log(e);
        }
    }

    async update(req, res){
        try{

        }catch(e){
            res.status(500).json(e);
            console.log(e);
        }
    }

    async delete(req, res){
        try{

        }catch(e){
            res.status(500).json(e);
            console.log(e);
        }
    }
}

export default new PostController;