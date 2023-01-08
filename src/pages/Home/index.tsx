import { useRef, useState } from 'react';
import './index.css';
import Startup from '../../components/Startup';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1
  });
  const content = useRef(null);

  if (showStartup)
    return (
      <Startup
        onClick={() => {
          setShowStartup(false);
        }}
      />
    );

  return (
    <div className="home">
      <Navbar show={inView}></Navbar>
      <div className="hero-space">
        <div className={`banner__${inView ? 'unfocused' : 'focused'}`}>
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
        <section ref={content}>
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
        </section>
      </div>
    </div>
  );
};

export default Home;
