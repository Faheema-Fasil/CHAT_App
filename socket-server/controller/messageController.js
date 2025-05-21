const Message = require("../Model/messageModel");

exports.saveMsg = async (data) => {
  console.log("message to be saved", data);
  try {
    const saveMsg = new Message(data);
    await saveMsg.save();
    return saveMsg;
  } catch (error) {
    res.status(400).send({ msg: "internal server error" });
  }
};

exports.getMessages = async (req, res) => {
  const userId = req.params.userId;
  const partnerId = req.params.partnerId;

  if (!userId || !partnerId) {
    return res.status(400).send({ msg: "Both user ids required" });
  }

  try {
    const allMsg = await Message.find({
      $or: [
        { "sender._id": userId, "receiver._id": partnerId },
        { "sender._id": partnerId, "receiver._id": userId },
      ],
    }).sort({ createdAt: 1 });

    return res.send({
      data: allMsg,
      msg: "Chat messages between users",
    });
  } catch (error) {
    res.status(500).send({ msg: "internal server error" });
  }
};
