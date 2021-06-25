import React from 'react';

const ProjectItem = ({ project, removeProject }) => {
  const handleDelete = (e) => {
    removeProject(project.id);
  }
  return (
    <li>
      <div className="row">
        <div className="col-8">
          {project.title}
          &nbsp;
          <span className="quote">{project.category}</span>
        </div>

        <div className="col-4 text-right pr-5">
          <a href="#" onClick={handleDelete} > X </a>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
