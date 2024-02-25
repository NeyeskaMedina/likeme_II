import {
        getPosts, 
        createPost, 
        putPosts, 
        deletePosts } from "../model/postModel.js";

const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: "Error al procesar la solicitud, compruebe la ruta" });
        console.error("Error al procesar la solicitud:", err);
    }
};
const createPosts = async (req, res) => {
    try {
        const post = req.body;
        const newPost = await createPost(post);
        console.log(req.body);
        res.status(201).json({ post: newPost });
    } catch (err) {
        res.status(500).json({ error: "Error al enviar la solicitud, verifique que lo datos esten completos" });
        console.error("Error al procesar la solicitud:", err);
    }
};
const updatePosts = async (req, res) => {
    try {
        const { id } = req.params;
        const like = await putPosts(id);
        res.status(200).json({ post: like });
    } catch (err) {
        res.status(500).json({ error: "Error al intentar modificar el servicio" })
        console.error("Error al intentar modificar el servicio", err)
    }
};

const deletPosts = async (req, res) => {
    try {
        const { id } = req.params;
        const delete_Post = await deletePosts(id);
        if(delete_Post === 0){
            return res.status(404).json({ message: "No existe el Post" })
        }
        res.status(200).json({ message: "El Post fue eliminado con exito" })
    } catch (err) {
        res.status(500).json({ error: "Error al intentar eliminar el Post" })
        console.error("Error al intentar eliminar el Post", err)
    }
};

export { getAllPosts, createPosts, updatePosts, deletPosts };