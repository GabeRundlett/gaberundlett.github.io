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
    initialInView: true,
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
      <div className="hero-space" ref={ref}>
        <div className={`banner__${inView ? 'focused' : 'unfocused'}`}>
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
        <div className="work-info">
          <div className="title">
            <div className="line"></div>
            <h1>My Recent Works</h1>
          </div>
          <WorkCard
            image={
              windowWidth <= WIDTH_TO_CHANGE_IMAGE
                ? MobileDaxaImage
                : DesktopDaxaImage
            }
            title="Daxa"
          >
            Daxa is a GPU API based on Vulkan, designed by Patrick Ahrens and
            co-developed by me
          </WorkCard>
          <WorkCard image={BackgroundImage} title="Gvox Engine">
            Gvox Engine is a raytraced voxel engine built to utilize the GPU as
            much as possible, Gvox Engine is being developed along side the{' '}
            <b>Gvox Format</b> library, which can convert between many voxel
            file formats, standard and custom. both Gvox and the Gvox Engine are
            Open-source
          </WorkCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
