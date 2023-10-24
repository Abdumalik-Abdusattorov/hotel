const { userUpdate, userFind, userFindall, userDelete } = require("../controlers/users.controller");
const { isAdmin } = require("../moddlewares/isAdmin.middleware");
const { isAuth } = require("../moddlewares/isAuth.middleware");

const router = require("express").Router();

router.put("/user/userupdate/:id",isAdmin,isAuth,userUpdate);
router.get("/user/userfind/:id",isAuth,isAdmin,userFind);
router.get("/user/userfindall",isAuth,isAdmin,userFindall);
router.delete("user/userdelete",isAuth,isAdmin,userDelete);

module.exports = router;
