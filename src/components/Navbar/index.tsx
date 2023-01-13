import './index.css';
import ReactDOM from 'react-dom';
import { Briefcase, ThumbUp, Chat } from 'heroicons-react';

interface INavbar {
  show: boolean;
}

const Navbar = ({ show = false }: INavbar) => {
  return ReactDOM.createPortal(
    <div className={`navbar__${show ? 'show' : 'hide'}`}>
      <ul className="content">
        <li>
          <Briefcase></Briefcase>
          Work
        </li>
        <li>
          <ThumbUp></ThumbUp>
          Social
        </li>
        <li>
          <Chat />
          Contact
        </li>
      </ul>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('navbar-portal')!
  );
};

export default Navbar;
