import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       
        'Technology Executive',
        1000,
        'Mathematical Physicist',
        1000,
        'AI Product Expert',
        1000,
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ''
      ]}
      wrapper="span"
      speed={50}
      style={{
        position: 'relative',
        left:'2em',
        fontSize: '2em', 
        display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typing;