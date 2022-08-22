import { FC } from 'react';
import { Element } from 'react-scroll';
import { AiOutlineFolder } from 'react-icons/ai';
import IconGitHub from './icons/Github';
import { SIDE_PROJECTS_DATA } from '../config/sideProjectsData';

const OtherProjects: FC = () => {
  return (
    <Element name='others'>
      <div className='mx-5 my-60 md:mx-40'>
        <h2 className='section-heading'>Other Side Projects</h2>
        <div className='project-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-8 my-20'>
          {SIDE_PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                className='project-element bg-blue-100/30 rounded-sm shadow-sm p-10 cursor-pointer transition-all duration-300 hover:scale-105'>
                <div className='header flex justify-between items-center mb-4'>
                  <div className='w-14 h-14 text-blue-800 hover:text-cyan-600 duration-200 my-3 cursor-pointer'>
                    <AiOutlineFolder className='w-full h-full' />
                  </div>
                  <div className='project-link'>
                    <a href={project.repoLink} target='_blank' rel='noreferrer'>
                      <IconGitHub />
                    </a>
                  </div>
                </div>
                <div className='description'>
                  <h3 className='text-2xl font-semibold text-blue-800 cursor-pointer'>
                    {project.title}
                  </h3>
                  <p className='text-gray-700 my-4'>{project.description}</p>
                  <ul className='flex  flex-wrap'>
                    {project.techStack.map((tech) => {
                      const techIdIsOne = tech.id === 1;
                      return (
                        <li
                          className={`tech-list-item ${
                            techIdIsOne ? 'ml-0' : ''
                          }`}
                          key={tech.id}>
                          {tech.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default OtherProjects;
