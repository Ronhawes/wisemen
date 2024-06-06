const prisma = require("../../Prisma")

const UpdateComment = async (req, res, next) => {
  try {
    const { player_id, comment_id } = req.params;
    const { comment } = req.body;

    if (!player_id || !comment_id || !comment) {
      throw {
        custom: true,
        message: "Player ID, comment ID, and comment are required",
      };
    }

    const commentData = await prisma.comments.update({
      where: {
        commentid: parseInt(comment_id),
      },
      data: {
        comment,
        dateupdated: new Date(),
      },
    });

    return res.status(200).json({ message: "Comment was updated successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = UpdateComment;