const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Un post debe tener un título"],
    },
    description: {
        type: String,
        required: [true, "Un post debe tener una descripción"],
    },
    date: {
        type: Date,
        required: [true, "Un post debe tener una fecha"],
    },
    technologies: {
        type: [String],
        required: [true, "Un post debe contar con tecnologías"],
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
