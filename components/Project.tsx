import Image from 'next/image';
import { ProjectProps } from '../config/interfaces';
import IconExternal from './icons/ExternalLink';
import IconGitHub from './icons/Github';

const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  techStack,
  externalLink,
  repoLink,
  photo,
}) => {
  const idIsOdd = id % 2 !== 0;
  return (
    <div className='flex justify-between my-28'>
      {idIsOdd ? (
        <div className='h-fit flex-1 mx-2 overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer bg-blue-200/30 hover:bg-transparent'>
          <Image
            src={photo}
            alt='project image'
            className='-z-20 h-full w-full'
          />
        </div>
      ) : null}
      <div
        className={`flex flex-col ${
          idIsOdd ? 'items-end' : 'items-start'
        } flex-1`}>
        <h1
          className={`mb-4 ${
            idIsOdd ? 'ml-2' : ''
          } font-mono text-lg text-blue-700`}>
          Featured Project
        </h1>

        <h2 className='text-4xl font-bold text-blue-800 cursor-pointer'>
          {`
            ${title}.
          `}
        </h2>
        <div
          className={`z-10 py-6 px-4 my-4 ${
            idIsOdd ? 'text-right' : 'text-left'
          } bg-blue-100/30 text-blue-900/95  shadow-lg`}>
          {description}
        </div>
        <ul className='flex  flex-wrap'>
          {techStack.map((tech) => {
            const techIdIsOne = tech.id === 1;
            return (
              <li
                className={`tech-list-item ${techIdIsOne ? 'ml-2' : ''} ${
                  idIsOdd ? 'text-right' : 'text-left'
                }`}
                key={tech.id}>
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
      {!idIsOdd ? (
        <div className='h-fit flex-1 mx-2 overflow-hidden duration-700 rounded-lg shadow-lg cursor-pointer bg-blue-200/30 hover:bg-transparent'>
          <Image
            src={photo}
            alt='project image'
            className='-z-20 h-full w-full'
          />
        </div>
      ) : null}
    </div>
  );
};

export default Project;
