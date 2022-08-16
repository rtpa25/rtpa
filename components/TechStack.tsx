/** @format */

import TechBox from './TechBox';
import fsvg from '../public/frontend.svg';
import bsvg from '../public/backend.svg';
import { BackendTech, FrontendTech } from '../config/TechList';
import { Element } from 'react-scroll';

const TechStack = () => {
  return (
    <Element name='tech'>
      <div className='mx-5 my-60 md:mx-40' id='tech'>
        <div>
          <h2 className='section-heading'>Tech That I love</h2>
          <p className='mt-10  font-mono text-lg text-blue-700'>
            This list grows faster than you think....
          </p>
          <div className='lg:flex lg:flex-row lg:justify-between my-14 flex-col'>
            <TechBox
              categoryName={'FrontEnd'}
              categoryImage={fsvg}
              techList={FrontendTech}
            />
            <TechBox
              categoryName={'BackEnd'}
              categoryImage={bsvg}
              techList={BackendTech}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default TechStack;
