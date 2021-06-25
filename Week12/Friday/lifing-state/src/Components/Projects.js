import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = ({ projects, removeProject }) => {
  return (
    <ul>
      {projects.map(project => {
        return <ProjectItem project={project} removeProject={removeProject} />
      })}
    </ul>
  )
}

export default Projects
