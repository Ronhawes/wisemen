const prisma = require("../../Prisma")

const AddComment = async (req, res, next) => {
  try {
    const { player_id, comment } = req.body;

    if (!player_id || !comment) {
      throw {
        custom: true,
        message: "Player ID and comment are required",
      };
    }

    const commentData = await prisma.comments.create({
      data: {
        player: {
          connect: {
            playerid: parseInt(player_id),
          },
        },
        comment,
        datecreated: new Date(),
        dateupdated: new Date(),
      },
    });

    return res.status(200).json({ message: "Comment was added successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = AddComment;