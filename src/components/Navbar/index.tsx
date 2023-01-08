import './index.css';
import ReactDOM from 'react-dom';

interface INavbar {
  show: boolean;
}

const Navbar = ({ show }: INavbar) => {
  return ReactDOM.createPortal(
    <div className={`navbar__${show ? 'show' : 'hide'}`}>
      <ul className="content">
        <li>Work</li>
        <li>Social</li>
        <li>Contact</li>
      </ul>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('navbar-portal')!
  );
};

export default Navbar;
