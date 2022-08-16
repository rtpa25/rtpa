import { FC, useState } from 'react';

import Scroll from 'react-scroll';
import { OrgData } from '../config/interfaces';
import { ORG_DATA } from '../config/orgData';

const Element = Scroll.Element;

const WorkExperience: FC = () => {
  const [selectedOrg, setSeletectedOrg] = useState<OrgData>(ORG_DATA[0]);

  return (
    <Element name='work'>
      <div className='mx-5 my-60 md:mx-40 md:px-28'>
        <h2 className='section-heading'>Places I have worked at</h2>
        <div className='md:flex md:overflow-hidden md:my-20'>
          <div className='flex justify-start overflow-x-auto my-4 md:flex-col md:justify-start md:overflow-hidden md:mr-4 md:w-1/4'>
            {ORG_DATA.map((org) => {
              return (
                <div
                  key={org.id}
                  className={` font-mono text-lg text-blue-700 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-all duration-150 hover:text-blue-900 md:mr-20 md:my-3 md:w-full ${
                    selectedOrg.id === org.id ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => {
                    setSeletectedOrg(org);
                  }}>
                  {org.name}
                </div>
              );
            })}
          </div>
          <div className='org-work my-8'>
            <h3 className='font-semibold text-lg text-gray-700'>
              {selectedOrg.name}{' '}
              <a
                href={selectedOrg.website}
                className='text-blue-700 hover:text-blue-900 duration-150 transform'>
                @{selectedOrg.name}
              </a>
            </h3>
            <span className='text-blue-700 font-mono text-sm'>
              {selectedOrg.startDate} - {selectedOrg.endDate}
            </span>
            <ul className='my-4 list-disc marker:text-blue-700 mx-4'>
              {selectedOrg.work.map((work) => {
                return (
                  <li key={work.id} className='my-2 leading-loose'>
                    {work.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default WorkExperience;
