import { ReactNode } from 'react';

import './index.css';

interface InfoHeaderInterface {
  title: string;
  children?: ReactNode;
}

const InfoHeader = ({ title, children }: InfoHeaderInterface) => {
  return (
    <div className="info-header">
      <div className="title">
        <div className="line"></div>
        <h1>{title}</h1>
      </div>
      <h2>{children}</h2>
    </div>
  );
};

export default InfoHeader;
