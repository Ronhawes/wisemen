const { AddComment, deleteComment, updateComment } = require("../controllers/comments")


const router = require("express").Router()

router.post("/add", AddComment)
router.post("/delete:player_id", DeleteComment)
router.post("/update:player_id", updateComment)


module.exports = router