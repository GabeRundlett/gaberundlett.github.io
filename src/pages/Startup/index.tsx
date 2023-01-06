import { useEffect, useState } from 'react';
import ImguiWindow from '../../components/ImguiWindow';
import Home from '../Home';
import './index.css';

const Startup = () => {
  return (
    <div className="startup">
      <ImguiWindow background={true}></ImguiWindow>
      <Home></Home>
    </div>
  );
};

export default Startup;
