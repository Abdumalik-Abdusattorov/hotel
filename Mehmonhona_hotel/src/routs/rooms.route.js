const { createRoom, roomFind, roomFindall, roomUpdate, roomDelete } = require("../controlers/rooms.controller");

const router = require("express").Router();

router.post("/room/create/:id",createRoom);
router.get("/room/findall",roomFindall);
router.get("/room/find/:id",roomFind);
router.put("/room/update/:id",roomUpdate);
router.delete("/room/delete/:id",roomDelete)

module.exports = router;
