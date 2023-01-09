import { useRef, useState } from 'react';
import './index.css';
import Startup from '../../components/Startup';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';

import BackgroundImage from '../../assets/images/voxel-world.png';
import DaxaImage from '../../assets/images/daxa.png';

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0
  });
  const work = useRef(null);

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
      <Navbar show={!inView}></Navbar>
      <div className="hero-space">
        <div
          ref={ref}
          className={`banner__${!inView ? 'unfocused' : 'focused'}`}
        >
          <img
            src={BackgroundImage}
            className="landscape"
            alt={'a beautiful voxel landscape'}
          ></img>
          <div className="text">
            <h1>Gabe Rundlett</h1>
            <h2>
              I am a young software engineer who loves <br /> making cool things
              with code in my free-time
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="work" ref={work}>
          <img src={DaxaImage}></img>
          <p>daxa is daxa</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
