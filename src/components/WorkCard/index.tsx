import { ReactNode } from 'react';
import './index.css';

interface IWorkCard {
  image: string;
  title: string;
  children: ReactNode;
}

const WorkCard = ({ image, title, children }: IWorkCard) => {
  return (
    <div className="workcard">
      <div className="items">
        <img className="thumbnail" src={image}></img>
        <div className="info">
          <h1>{title}</h1>
          <h3>{children}</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
