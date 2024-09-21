const express = require('express')
const router = express.Router()
const portfolioController = require("./../Controllers/portfolioController");
const Auth = require('./../Middleware/authMiddleware')
const upload = require('./../multerConfig');



router.post("/addAboutUs",Auth, portfolioController.addAboutUs);
router.get("/getAboutUs", portfolioController.getAboutUs);
router.post("/addExperience",Auth, portfolioController.addExperience);
router.get("/getExperience", portfolioController.getExperience);
// Add a new project
router.post("/projects/add", Auth, upload.array('images', 10), portfolioController.addProject);

// Edit an existing project
router.put("/projects/edit/:projectId", Auth, portfolioController.editProject);

// Delete a project
router.delete("/projects/delete/:projectId", Auth, portfolioController.deleteProject);

// Add images to a project
router.post("/projects/:projectId/images", Auth, upload.array('images', 10), portfolioController.addImagesToProject);

// Remove images from a project
router.delete("/projects/:projectId/images", Auth, portfolioController.removeImagesFromProject);

router.get('/projects/getProjects', portfolioController.getProjects)

router.post('/skills/add', Auth, portfolioController.addSkills)
router.get('/skills/getSkills', portfolioController.getSkills)





module.exports = router;
