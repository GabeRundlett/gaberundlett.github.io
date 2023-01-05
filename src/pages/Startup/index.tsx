import { useEffect, useState } from 'react';
import ImguiWindow from '../../components/ImguiWindow';
import Home from '../Home';
import './index.css';

const Startup = () => {
  const [imguiWindowVisible, setImguiWindowVisible] = useState(true);

  // useEffect(() => {
  //   return () => {
  //     setTimeout(() => {
  //       setImguiWindowVisible(false);
  //     }, 1500);
  //   };
  // });

  return (
    <div className="startup">
      {imguiWindowVisible ? (
        <ImguiWindow background={true}></ImguiWindow>
      ) : null}
      <Home></Home>
    </div>
  );
};

export default Startup;
