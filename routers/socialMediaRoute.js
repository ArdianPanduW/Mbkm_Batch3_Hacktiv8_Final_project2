const SocialMediaController = require("../controllers/socialMediaController");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/socialMediaAuthorization");
const router = require("express").Router();

router.use(authentication);

router.post("/socialmedias", SocialMediaController.create);
router.get("/socialmedias", SocialMediaController.getAll);

router.use("/socialmedias/:id", authorization);

router.put("/socialmedias/:id", SocialMediaController.update);
router.delete("/socialmedias/:id", SocialMediaController.delete);

module.exports = router;