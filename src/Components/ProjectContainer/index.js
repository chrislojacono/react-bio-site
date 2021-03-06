import React from 'react';
import ProjectCard from '../Card';
import projectArray from '../../helpers/data/projectData';

export default function ProjectContainer() {
  return (
    <div className='d-flex flex-wrap justify-content-center' id="projectSection">
      {projectArray.map((project) => (
        <ProjectCard key={project.id} projectData={project} />
      ))}
    </div>
  );
}
