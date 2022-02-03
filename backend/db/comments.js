const knex = require("./knex");

const createComment = (comment) => knex("comments").insert(comment)
 

const getComments = ()=> knex("comments").select("*")

const deleteComment= (id) =>{
    console.log("id",id)
    return knex("comments").where("id",id).del()
} 

module.exports ={ 
    createComment,
    getComments,
    deleteComment
}