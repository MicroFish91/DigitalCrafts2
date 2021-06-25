import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddProject from './AddProject';
import Projects from './Projects';

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'Javascript'
      },
      {
        id: uuidv4(),
        category: 'Back-End',
        title: 'Node'
      },
      {
        id: uuidv4(),
        category: 'Front-End',
        title: 'React'
      }
    ])
  }, []);

  const handleAddProject = (project) => {
    setProjects([project, ...projects]);
  }

  const handleRemoveProject = (id) => {
    const newProjects = projects.filter(project => project.id !== id);
    setProjects(newProjects);
  }
  
  return (
    <>
      Project Management 
      
      <Projects projects={projects} removeProject={handleRemoveProject} />
      <AddProject addProject={handleAddProject} />
    </>
  )
}

export default ProjectManagement
