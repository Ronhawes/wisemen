const { AddPlayer, deletePlayer, updatePlayer } = require("../controllers/users")

const router = require("express").Router()

router.post("/add", AddPlayer)
router.delete("/delete", deletePlayer)
router.put("/update", updatePlayer)


module.exports = router