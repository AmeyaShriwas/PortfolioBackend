const AboutUsModel = require('./../Models/aboutUsModel')
const portfolioService = require("./../Services/portfolioServices");


const addAboutUs = async(req, resp)=> {
    const AboutUsData = req.body

    const AddAboutUs = await portfolioService.AddAboutUsPortfolio(AboutUsData)
    if(AddAboutUs){
        resp.status(200).json({ success: true, message: AddAboutUs.message });
    }
}

const getAboutUs = async(req, resp)=> {
    const GetAboutUs = await portfolioService.GetAboutUsPortfolio(req)
    
    if(GetAboutUs){
        resp.status(200).json({ success: true, message: GetAboutUs.message, data: GetAboutUs.data });
    }
}

const addExperience = async(req, resp)=> {
   const addExper = req.body
   const addExp = await portfolioService.AddExperiencePortfolio(addExper)
   if(addExp){
    resp.status(200).json({ success: true, message: addExp.message });
}
}

const getExperience = async(req, resp)=> {
    const GetExperience = await portfolioService.GetExperiencePortfolio(req)
    
    if(GetExperience){
        resp.status(200).json({ success: true, message: GetExperience.message, data: GetExperience.data });
    }
}

const addProject = async (req, resp) => {
    console.log('res get', req.body)
    try {
        const { title, description, category } = req.body;
        const files = req?.files?.map(file => file.path);

        const projectData = { title, description, images: files, category };
        const result = await portfolioService.addProject(projectData);
        return resp.status(200).json({ success: true, message: result.message });
    } catch (error) {
        console.error('Error adding project:', error);
        return resp.status(500).json({ success: false, message: 'Error adding project' });
    }
};

const editProject = async (req, resp) => {
    try {
        const projectId = req.params.projectId;
        const updates = req.body;

        const result = await portfolioService.editProject(projectId, updates);
        return resp.status(200).json({ success: true, message: result.message });
    } catch (error) {
        console.error('Error editing project:', error);
        return resp.status(500).json({ success: false, message: 'Error editing project' });
    }
};

const deleteProject = async (req, resp) => {
    try {
        const projectId = req.params.projectId;
        const result = await portfolioService.deleteProject(projectId);
        return resp.status(200).json({ success: true, message: result.message });
    } catch (error) {
        console.error('Error deleting project:', error);
        return resp.status(500).json({ success: false, message: 'Error deleting project' });
    }
};

const addImagesToProject = async (req, resp) => {
    try {
        const projectId = req.params.projectId;
        const files = req.files ? req.files.map(file => file.path) : []; // Check if files exist

        // Validate that files are present
        if (files.length === 0) {
            return resp.status(400).json({ success: false, message: 'No images uploaded' });
        }

        const result = await portfolioService.addImagesToProject(projectId, files);
        return resp.status(200).json({ success: true, message: result.message });
    } catch (error) {
        console.error('Error adding images to project:', error);
        return resp.status(500).json({ success: false, message: 'Error adding images to project' });
    }
};


const removeImagesFromProject = async (req, resp) => {
    try {
        const projectId = req.params.projectId;
        const { imageIds } = req.body;
        
        const result = await portfolioService.removeImagesFromProject(projectId, imageIds);
        return resp.status(200).json({ success: true, message: result.message });
    } catch (error) {
        console.error('Error removing images from project:', error);
        return resp.status(500).json({ success: false, message: 'Error removing images from project' });
    }
};

const getProjects = async(req, resp)=> {
    const GetProjects = await portfolioService.GetProjectsPortfolio(req)
    
    if(GetProjects){
        resp.status(200).json({ success: true, message: GetProjects.message, data: GetProjects.data });
    }
}


const addSkills = async(req, resp)=> {
    const skillsData = req.body

    const skillData = await portfolioService.AddSkillsPortfolio(skillsData)
    if(skillData){
        resp.status(200).json({ success: true, message: skillData.message });
    }
}

const getSkills = async(req, resp)=> {
    const GetSkills = await portfolioService.GetSkillsPortfolio(req)
    
    if(GetSkills){
        resp.status(200).json({ success: true, message: GetSkills.message, data: GetSkills.data });
    }
}

module.exports = {addAboutUs, getAboutUs, addExperience, getExperience,  addProject,
    editProject,
    deleteProject,
    addImagesToProject,
    removeImagesFromProject, getProjects, addSkills, getSkills}