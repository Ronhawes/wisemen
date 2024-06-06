const { AddPlayer, deletePlayer, updatePlayer } = require("../controllers/users")

const router = require("express").Router()

router.post("/add", AddPlayer)
router.post("/delete:player_id", deletePlayer)
router.post("/update:player_id", updatePlayer)


module.exports = router