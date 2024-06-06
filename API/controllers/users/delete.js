const prisma = require("../../Prisma")

const DeleteComment = async (req, res, next) => {
  try {
    const { comment_id } = req.params;

    if (!comment_id) {
      throw {
        custom: true,
        message: "Comment ID is required",
      };
    }

    const commentData = await prisma.comments.delete({
      where: {
        commentid: parseInt(comment_id),
      },
    });

    return res.status(200).json({ message: "Comment was deleted successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = DeleteComment;