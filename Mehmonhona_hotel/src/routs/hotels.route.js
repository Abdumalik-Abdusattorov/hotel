const { hotelCreate, hotelUpdate, hotelDelete, hotelFind, hotelFindall, countByCity, countByType } = require("../controlers/hotels.route");
const { isAdmin } = require("../moddlewares/isAdmin.middleware");
const { isAuth } = require("../moddlewares/isAuth.middleware");

const router = require("express").Router();

router.post("/hotel/hotelcreate",isAuth,isAdmin,hotelCreate);
router.put("/hotel/hotelupdate/:id",isAuth,isAdmin,hotelUpdate);
router.delete("/hotel/hoteldelete/:id",isAuth,isAdmin,hotelDelete);
router.get("/hotel/hotelfind/:id",hotelFind);
router.get("/hotel/hotelfind",hotelFindall);

router.get("/hotel/",hotelFind);
router.get("/hotel/countByCity",countByCity);
router.get("/hotel/countByType",countByType);

module.exports = router;
