const express = require("express");
const router = express.Router();
const multerUploads = require("../middleware/multerUploads");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
router.get("/getUser", auth, authController.getUser);
router.post("/register", authController.register);
// router.post("/activation", authController.activateEmail);
router.post("/login", authController.login);
router.post("/access_token", authController.getAccessToken);
// router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword", auth, authController.resetPassword);
router.post("/changePassword", auth, authController.changePassword);
router.post("/updateProfile", auth, authController.updateProfile);

router.post("/updateProfilePic",
    auth,
    multerUploads.single("file"),
    authController.updateProfilePic
);

router.delete("/deleteAccount", auth, authController.deleteAccountPermanently);
router.get("/logout", authController.logout);
router.get("/info", auth, authController.getUserInfo);
module.exports = router;
