/** @format */

import Scroll from 'react-scroll';

const Element = Scroll.Element;

const Contact = () => {
  return (
    <Element name='contact'>
      <div id='contact' className='mx-5 my-24 md:mx-40'>
        <div className='flex flex-col items-center'>
          <p className='mt-10 font-mono text-xl text-blue-700'>What’s Next?</p>
          <h1 className='mb-6 text-4xl font-bold text-blue-800 md:text-6xl'>
            Get In Touch
          </h1>
          <p className='max-w-screen-md text-lg text-center text-blue-900/95 md:px-12'>
            I’m currently looking for an internship at a seed or series-A
            startup as a full-Stack Developer Intern and contribute to teams
            that want to make a difference. Sounds up to your streak 👇
          </p>
          <a
            href={`mailto:pandaronit25@gmail.com`}
            className='mt-20 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-105 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 md:text-3xl text-xl'>
              Say Hello
            </span>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
