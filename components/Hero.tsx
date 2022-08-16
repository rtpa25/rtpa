import axios from 'axios';
import Lottie from 'react-lottie';
import heroAnimation from '../public/heroAnimation.json';

export const getStaticProps = async () => {
  const { data } = await axios.get(
    'https://embed.lottiefiles.com/animation/74635'
  );

  return {
    props: {
      data,
    },
  };
};

function Hero() {
  return (
    <div className='flex mx-5 my-20 md:mx-40 ' id='hero'>
      <div className='flex flex-col items-start justify-between'>
        <div>
          <h1 className='mb-4 ml-2 font-mono text-lg text-blue-700'>
            Hi, my name is
          </h1>
          <h2 className='text-5xl font-extrabold text-transparent md:text-7xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500'>
            Ronit Panda.
          </h2>
          <h3 className='mt-4 mb-8 text-4xl font-bold text-blue-500 md:text-6xl '>
            A person who iterates fast
          </h3>
          <div className='flex  leading-loose'>
            <p className='mt-4 text-lg text-gray-700 lg:text-lg flex-wrap'>
              I’m a software developer specializing in building full stack web
              apps. Currently, I’m looking for an internship at a seed or
              series-A stage startup as a Full-Stack developer intern, to be
              around people like whom I want to be and contribute to teams that
              are trying to bring a DIFFERENCE 🚀.
            </p>
          </div>
        </div>
        <div>
          <a
            href={`mailto:pandaronit25@gmail.com`}
            className='mt-20 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
            <span className='relative px-5 py-2.5 transition-all ease-in duration-105 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 md:text-3xl text-xl'>
              GET IN TOUCH
            </span>
          </a>
        </div>
      </div>
      <div className='hidden lg:w-full lg:flex lg:justify-end'>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: heroAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}

export default Hero;
