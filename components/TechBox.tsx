/** @format */

import Image from 'next/image';
import React from 'react';
import { TechList } from '../config/interfaces';

interface TechBoxProps {
  categoryName: string;
  categoryImage: any;
  techList: TechList[];
}

const TechBox: React.FC<TechBoxProps> = ({
  categoryName,
  techList,
  categoryImage,
}) => {
  return (
    <div className='md:mx-10 flex-1 my-10 bg-blue-100/30 p-10 shadow-lg rounded-lg '>
      <div className='flex items-center justify-between'>
        <h3 className='tech-stack-category-header'>{categoryName}</h3>
        <Image
          src={categoryImage}
          alt='frontend'
          height={60}
          width={60}
          color='green'
        />
      </div>
      <hr className='m-2' />
      <ul>
        {techList.map((tech) => {
          return (
            <li key={tech.id}>
              <div className='flex items-center justify-between my-10'>
                <p className='text-xl font-mono text-blue-800 '>
                  {tech.techName}
                </p>
                <Image src={tech.icon} alt='react' height={50} width={50} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechBox;
