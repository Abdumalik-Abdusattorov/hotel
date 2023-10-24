const authRouter = require("./auth.rout");
const hotelsRouter = require("./hotels.route");
const roomsRouter = require("./rooms.route");
const usersRouter = require("./users.route");

module.exports = [
    authRouter,
    hotelsRouter,
    roomsRouter,
    usersRouter,
];