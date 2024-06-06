const prisma = require("../../Prisma")

const DeletePlayer = async (req, res, next) => {
  try {
    const { player_id } = req.params;

    if (!player_id) {
      throw {
        custom: true,
        message: "Player ID is required",
      };
    }

    const player = await prisma.players.delete({
      where: {
        playerid: parseInt(player_id),
      },
    });

    return res.status(200).json({ message: "Player deleted successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = DeletePlayer;