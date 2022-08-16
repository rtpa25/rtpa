import { ProjectProps } from '../config/interfaces';
import IconExternal from './icons/ExternalLink';
import IconGitHub from './icons/Github';

const ProjectSM: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  repoLink,
  externalLink,
}) => {
  return (
    <div className='my-20 bg-blue-100/30 rounded-lg shadow-lg w-full h-full'>
      <div className={`flex flex-col  flex-1 p-10 `}>
        <h1 className={`mb-4  font-mono text-lg text-blue-700`}>
          Featured Project
        </h1>

        <h2 className='text-4xl font-bold text-blue-800 cursor-pointer'>
          {`
            ${title}.
          `}
        </h2>
        <div className={`z-10 p-6  my-1 text-left pl-0`}>{description}</div>
        <ul className='flex flex-wrap'>
          <li className={`tech-list-item `}>NextJS</li>
          {techStack.map((tech) => {
            return (
              <li className={`tech-list-item `} key={tech.id}>
                {tech.name}
              </li>
            );
          })}
        </ul>
        <div className='flex'>
          <div className='project-link'>
            <a href={repoLink} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          </div>
          <div className='project-link'>
            <a href={externalLink} target='_blank' rel='noreferrer'>
              <IconExternal />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSM;
