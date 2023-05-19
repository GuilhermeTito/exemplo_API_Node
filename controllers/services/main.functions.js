const usuario = require("../../models/usuarios.js");
const { all } = require("../routes/main.routes.js");
usuario.sync();

const createUser = async (req,res) => {
    console.log(req.body)
    await usuario.create({
        "username": req.body.username,
        "password": req.body.password
    });
    res.send("usuario criado");

};

const getAllUsers = async (req,res) => {
    const allusers = await usuario.findAll();
    res.send(allusers);
};

const GetUser = async (req,res) => {
    const id = req.params.id;
    const getUsuario = await usuario.findByPk(id);

    if(getUsuario == null)
    {
        res.json({"Message":"Usuarios não encontrado"})
    }
    else
    {
        res.json(getUsuario);
    }
};

const UpdateUser = async (req,res) => {
    const id = req.params.id;
    const getUsuario = await usuario.findByPk(id);

    if(getUsuario == null)
    {
        res.json({"Message":"Usuarios não encontrado"})
    }
    else
    {
        await getUsuario.set({
            "username": req.body.username,
            "password": req.body.password
        })

        await getUsuario.save();

        res.json(getUsuario)
    }
};

const DeleteUser = async (req,res) => {
    const id = req.params.id;
    const getUsuario = await usuario.findByPk(id);

    if(getUsuario == null)
    {
        res.send("usuario não exitente");
    }
    else
    {
        await getUsuario.destroy();
        res.send("usuario delatado.");
    }
};

module.exports = {
    createUser,
    getAllUsers,
    GetUser,
    DeleteUser,
    UpdateUser,
}