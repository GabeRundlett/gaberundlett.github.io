import { useState } from 'react';
import './index.css';
import Startup from '../../components/Startup';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  if (showStartup)
    return (
      <Startup
        onClick={() => {
          setShowStartup((oldState) => !oldState);
        }}
      />
    );

  return (
    <div className="home">
      <div className="hero-space">
        <div className={`banner__${inView === true ? 'unfocused' : 'focused'}`}>
          <div className="text">
            <h1>Gabe Rundlett</h1>
            <h2>
              I am a young software engineer who loves <br /> making cool things
              with code in my free-time
            </h2>
          </div>
        </div>
      </div>
      <div className="container" ref={ref}>
        <div>{`${inView}`}</div>
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
