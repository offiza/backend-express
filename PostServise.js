import Post from "./Post.js";

class PostService {
  async create(post) {
    const createdPost = await Post.create({ post });
    res.json(createdPost);
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) throw new Error("No Id");

    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) throw new Error("No Id");

    const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updatedPost;
  }

  async delete(id) {
    if (!id) throw new Error("No Id");

    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService;

