import Post from './Post.js';
import PostServise from './PostServise.js';


class PostController {
  async create(req, res) {
    try {
      const post = await PostServise.create(req.body);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostServise.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostServise.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostServise.delete(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  }
}

export default new PostController;