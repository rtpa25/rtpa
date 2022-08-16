import { AiOutlineMenu } from 'react-icons/ai';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FC, useState } from 'react';
import { Link } from 'react-scroll';
import MobileNavigator from './MobileNavigator';

const Navbar: FC = () => {
  const [vis, setVis] = useState<boolean>(false);
  return (
    <div className='flex justify-between mx-5 my-5 md:mx-40 '>
      <div
        className='font-mono text-3xl font-bold text-blue-800 cursor-pointer'
        onClick={() => {
          window.location.reload();
        }}>
        RP
      </div>
      <div className='hidden md:flex md:items-center'>
        <div className='nav-link'>
          <Link to='work' smooth={true} duration={1000}>
            Experience
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='projects' smooth={true} duration={1000}>
            Projects
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='tech' smooth={true} duration={1000}>
            Tech
          </Link>
        </div>
        <div className='nav-link'>
          <Link to='contact' smooth={true} duration={1000}>
            Contact
          </Link>
        </div>
        <a
          className='nav-button'
          href='/resume.pdf'
          target='_blank'
          rel='noreferrer'>
          Resume
        </a>
      </div>

      <div className='relative text-blue-800 md:hidden'>
        {vis === false ? (
          <AiOutlineMenu
            className='top-0 right-0 mx-1 my-2 scale-150 cursor-pointer'
            onClick={() => {
              setVis(true);
              disableBodyScroll(document.querySelector('#modal-root')!);
            }}
          />
        ) : (
          <div className=''>
            <MobileNavigator
              show={vis}
              onClose={() => {
                setVis(false);
                enableBodyScroll(document.querySelector('#modal-root')!);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
