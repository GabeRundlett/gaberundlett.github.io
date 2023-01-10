import { useRef, useState } from 'react';
import './index.css';
import Startup from '../../components/Startup';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';

import BackgroundImage from '../../assets/images/voxel-world.png';
import DesktopDaxaImage from '../../assets/images/desktop/daxa-logo.png';
import MobileDaxaImage from '../../assets/images/mobile/daxa-logo.png';
import WorkCard from '../../components/WorkCard';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const Home = () => {
  const [showStartup, setShowStartup] = useState(true);

  const windowWidth = useWindowWidth();
  const MINIMUM_WIDTH_TO_SHOW_STARTUP = 640;
  const WIDTH_TO_CHANGE_IMAGE = 800;

  const { ref, inView } = useInView({
    threshold: 0
  });
  const work = useRef(null);

  if (showStartup && windowWidth > MINIMUM_WIDTH_TO_SHOW_STARTUP)
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
        <div className="title">
          <div className="line"></div>
          <h1>My Recent Works</h1>
        </div>
        <WorkCard
          image={windowWidth <= 800 ? DesktopDaxaImage : MobileDaxaImage}
          title="Daxa"
        >
          Daxa is a GPU API based on Vulkan, designed by Patrick Ahrens and
          co-developed by me
        </WorkCard>
        <WorkCard image={BackgroundImage} title="Voxel Engine">
          made with c++ :(
        </WorkCard>
      </div>
    </div>
  );
};

export default Home;
