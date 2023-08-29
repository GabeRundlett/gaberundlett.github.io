import './index.css';
import GabeProfilePic from '../../assets/images/gabe.png';

import { HeartIcon } from '@heroicons/react/24/solid'

const TwitterCard = () => (
  <div className="social-card">
    <div className="hello">
      <img alt="a pufferfish profile picture" src={GabeProfilePic} />
      <div className="message">
        <p>Follow me on Twitter!</p>
      </div>
      <div className="fact">
        <h1>
          I love <b>Vulkan</b>
        </h1>
        <HeartIcon className="heart"></HeartIcon>
      </div>
    </div>
    <div className="follow">
      <a href="https://twitter.com/RundlettGabe" className="embed">
        Check my Twitter
      </a>
    </div>
  </div>
);

export default TwitterCard;
