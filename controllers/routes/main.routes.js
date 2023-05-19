const {Router} = require("express");
const userFunctions = require("../services/main.functions.js");

const router = Router();

router.get("/", userFunctions.getAllUsers);

router.post("/", userFunctions.createUser);

router.put("/:id", userFunctions.UpdateUser);


router.delete("/:id", userFunctions.DeleteUser);

router.get("/:id", userFunctions.GetUser);



module.exports = router;