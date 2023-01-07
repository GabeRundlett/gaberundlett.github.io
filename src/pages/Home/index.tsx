import { useState } from 'react';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import './index.css';
import Startup from '../../components/Startup';

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);

  if (showStartup)
    return (
      <Startup
        onClick={() => {
          setShowStartup((oldState) => !oldState);
          console.log('hello');
        }}
      ></Startup>
    );

  return (
    <div className="home">
      <div className="hero-space">
        <div className="banner">
          <h2>
            I am a young software engineer who loves <br /> making cool things
            with code in my free-time
          </h2>
        </div>
      </div>
      <div className="container">
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
        <div>test</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Home;
