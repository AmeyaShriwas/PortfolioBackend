const AboutUsModel = require('../Models/aboutUsModel');
const ExperienceModel = require('./../Models/experienceModel');
const Project = require('./../Models/projectsModel')
const Skills = require('./../Models/skillsModel')

const AddAboutUsPortfolio = async (data) => {
    try {
  
      // Find if there's already an "About Us" document in the database
      const existingAboutUs = await AboutUsModel.findOne();
  
      if (existingAboutUs) {
        // Update the existing document with the new data
        existingAboutUs.aboutUsDetail = data.aboutUsDetail;
        await existingAboutUs.save();
        return { success: true, message: 'About Us successfully updated' };
      } else {
        // If no document exists, create a new one
        const newAboutUs = new AboutUsModel({
          aboutUsDetail: data.aboutUsDetail // Correctly accessing the aboutUsDetail property
        });
        await newAboutUs.save();
        return { success: true, message: 'About Us successfully added' };
      }
  
    } catch (error) {
      console.error('Error adding/updating About Us:', error);
      return { success: false, message: 'Failed to add/update About Us', error: error.message };
    }
  };
  
  
const GetAboutUsPortfolio = async()=> {
   const AboutUs = await AboutUsModel.find()
   return {success: false, message: 'About Us Content', data: AboutUs}
}

const AddExperiencePortfolio = async (data) => {
    try {
  
      // Find if there is an existing experience document
      let existingExperience = await ExperienceModel.findOne();
  
      if (existingExperience) {
        // Update the existing document by pushing new experience details
        existingExperience.ExperienceDetail = data.ExperienceDetail;
        await existingExperience.save();
        return { success: true, message: 'Experience successfully updated' };
      } else {
        // Create a new experience document if none exists
        const newExperience = new ExperienceModel({
          ExperienceDetail: data.ExperienceDetail
        });
        await newExperience.save();
        return { success: true, message: 'Experience successfully added' };
      }
  
    } catch (error) {
      console.error('Error adding/updating experience:', error);
      return { success: false, message: 'Failed to add/update experience', error: error.message };
    }
  };
  
  const GetExperiencePortfolio = async()=> {
    const Experince = await ExperienceModel.find()
    return {success: false, message: 'Experience Content', data: Experince}
  }


  const addProject = async (projectData) => {
    const newProject = new Project(projectData);
    await newProject.save();
    return { message: 'Project added successfully' };
};

const editProject = async (projectId, updates) => {
    await Project.findByIdAndUpdate(projectId, updates, { new: true });
    return { message: 'Project updated successfully' };
};

const deleteProject = async (projectId) => {
    await Project.findByIdAndDelete(projectId);
    return { message: 'Project deleted successfully'};
};

const addImagesToProject = async (projectId, images) => {
    const project = await Project.findById(projectId);
    project.images.push(...images);
    await project.save();
    return { message: 'Images added successfully' };
};

const removeImagesFromProject = async (projectId, imageIds) => {
    const project = await Project.findById(projectId);
    project.images = project.images.filter(image => !imageIds.includes(image));
    await project.save();
    return { message: 'Images removed successfully' };
};

const GetProjectsPortfolio = async()=> {
    const Projects = await Project.find()
    return {success: false, message: 'Projects Content', data: Projects}
}

const AddSkillsPortfolio = async(data)=> {
    try {
  
        // Find if there's already an "About Us" document in the database
        const existingSkills = await Skills.findOne();
    
        if (existingSkills) {
          // Update the existing document with the new data
          existingSkills.skillsDetail = data.skillsDetail;
          await existingSkills.save();
          return { success: true, message: 'Skills successfully updated' };
        } else {
          // If no document exists, create a new one
          const newSkillstUs = new Skills({
            newSkillstUs: data.newSkillstUs // Correctly accessing the aboutUsDetail property
          });
          await newSkillstUs.save();
          return { success: true, message: 'Skills successfully added' };
        }
    
      } catch (error) {
        console.error('Error adding/updating Skills:', error);
        return { success: false, message: 'Failed to add/update Skills', error: error.message };
      }
}

const GetSkillsPortfolio = async()=> {
    const Skill = await Skills.find()
    return {success: false, message: 'Skills Content', data: Skill}
}


module.exports = { AddAboutUsPortfolio, GetAboutUsPortfolio, AddExperiencePortfolio, GetExperiencePortfolio,  addProject,
    editProject,
    deleteProject,
    addImagesToProject,
    removeImagesFromProject, GetProjectsPortfolio, AddSkillsPortfolio, GetSkillsPortfolio };
