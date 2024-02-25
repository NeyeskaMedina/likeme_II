import pool  from "../../db/conectionDB.js";

const getPosts = async () => {
    const sqlQuery = { text: "SELECT * FROM posts" };
    try {
        const response = await pool.query(sqlQuery);
        return response.rows;
    } catch (err) {
        console.log(err);
    }
};

const createPost = async ({ titulo, url, descripcion }) => {
    const sqlQuery = {
        text: "INSERT INTO posts (titulo, img, descripcion, likes ) VALUES ($1, $2, $3, 0) RETURNING *",
        values: [ titulo, url, descripcion ],
    };
    try {
        const response = await pool.query(sqlQuery);
        return response.rows;
    } catch (err) {
        console.log(err);
    }
};

const putPosts = async ( id ) =>{
    const sqlQuery = {
        test: "UPDATE posts SET likes + 1 WHERE id= $1 RETURNING *",
        values: [id]
    }
    try {
        const res = await pool.query(sqlQuery);
        return res.rows;
    } catch (err) {
        console.log(err);
    }
};
const deletePosts = async ( id ) =>{
    const sqlQuery = {
        text: "DELETE FROM posts WHERE id = $1",
        values: [id],
    }
    try {
        const res = await pool.query(sqlQuery)
        return res.rowCount;
    } catch (err) {
        console.log(err)
    }
};
export { getPosts, createPost, putPosts, deletePosts};