const prisma = require("../../Prisma")

const AddPlayer = async (req, res, next) => {
  try {
    const { fullnames, username } = req.body

    if (!fullnames || !username) {
      throw {
        custom: true,
        message: "Fullnames and username are required",
      };
    }

    const player = await prisma.players.create({
      data: {
        fullnames,
        username,
        datecreated: new Date(),
        dateupdated: new Date(),
      },
    });

    return res.status(200).json({ message: "Player was added successfully" });

  } catch (error) {
    next(error);
  }
};

module.exports = AddPlayer;