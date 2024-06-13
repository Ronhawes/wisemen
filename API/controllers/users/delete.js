const prisma = require("../../prisma")

const DeletePlayer = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id) {
      throw {
        custom: true,
        message: "Player ID is required",
      };
    }

    const player = await prisma.players.delete({
      where: {
        playerid: parseInt(id),
      },
    });

    return res.status(200).json({ message: "Player deleted successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = DeletePlayer;