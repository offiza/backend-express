import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    job: {type: String, required: true},
    position: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model('Post', Post)