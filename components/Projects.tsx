import { FC } from 'react';
import { PROJECTS } from '../config/projectData';
import useWidnowDimension from '../hooks/useWindowDimension';
import Project from './Project';
import ProjectSM from './ProjectSM';
import { Element } from 'react-scroll';

const Projects: FC = () => {
  const { width } = useWidnowDimension();

  if (!width) return <></>;

  return (
    <Element name='projects'>
      <div className='mx-5 my-60 md:mx-40' id='projects'>
        <div className=''>
          <h2 className='section-heading'>Some Stuff I’ve Recently Built</h2>
          <ul>
            {PROJECTS.map((project) => {
              if (width > 850) {
                return (
                  <li key={project.id}>
                    <Project
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      externalLink={project.externalLink}
                      repoLink={project.repoLink}
                      photo={project.photo}
                      id={project.id}
                    />
                  </li>
                );
              } else {
                return (
                  <li key={project.id}>
                    <ProjectSM
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      externalLink={project.externalLink}
                      repoLink={project.repoLink}
                      photo={project.photo}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
