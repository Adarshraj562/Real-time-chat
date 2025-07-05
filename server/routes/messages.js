
const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
const auth = require("../middleware/auth");

router.post("/addmsg/", auth, addMessage);
router.post("/getmsg/", auth, getMessages);

module.exports = router;
