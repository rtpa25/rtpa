/** @format */

import { FC } from 'react';
import IconGitHub from './icons/Github';
import IconLinkedin from './icons/Linkedin';
import IconTwitter from './icons/Twitter';

const Footer: FC = () => {
  return (
    <div className='text-center flex items-center justify-center flex-col'>
      <ul className='flex md:hidden'>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconGitHub />
            </a>
          </div>
        </li>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconTwitter />
            </a>
          </div>
        </li>
        <li>
          <div className='socials-link'>
            <a href={''} target='_blank' rel='noreferrer'>
              <IconLinkedin />
            </a>
          </div>
        </li>
      </ul>
      <p className='font-mono text-xl text-blue-700 cursor-pointer hover:text-cyan-600 duration-300 mb-10'>
        <a target='_blank' rel='noreferrer' href='https://github.com/rtpa25/rp'>
          Designed and Built by RP
        </a>
      </p>
    </div>
  );
};

export default Footer;
