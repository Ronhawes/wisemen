const prisma = require("../../Prisma")

const UpdatePlayer = async (req, res, next) => {
  try {
    const { player_id } = req.params;
    const { fullnames, username } = req.body;

    if (!player_id || !fullnames || !username) {
      throw {
        custom: true,
        message: "Player ID, fullnames, and username are required",
      };
    }

    const player = await prisma.players.update({
      where: {
        playerid: parseInt(player_id),
      },
      data: {
        fullnames,
        username,
        dateupdated: new Date(),
      },
    });

    return res.status(200).json({ message: "Player updated successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = UpdatePlayer;