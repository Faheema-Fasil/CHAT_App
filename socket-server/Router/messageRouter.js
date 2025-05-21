const { Router } = require("express");
const { getMessages } = require("../controller/messageController");
const router = Router();

router.get("/:userId/:partnerId", getMessages);

module.exports = router;
