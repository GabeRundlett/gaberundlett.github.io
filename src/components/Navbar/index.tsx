import './index.css';
import ReactDOM from 'react-dom';
// import { Briefcase, ThumbUp, Chat } from 'heroicons-react';
import { BriefcaseIcon, HandThumbUpIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'
import { MutableRefObject } from 'react';

interface INavbar {
  show: boolean;
  workLocation: MutableRefObject<null | HTMLDivElement>;
  socialLocation: MutableRefObject<null | HTMLDivElement>;
  contactLocation: MutableRefObject<null | HTMLDivElement>;
}

const Navbar = ({
  show,
  workLocation,
  socialLocation,
  contactLocation
}: INavbar) => {
  return ReactDOM.createPortal(
    <div className={`navbar__${show ? 'show' : 'hide'}`}>
      <ul className="content">
        <li
          onClick={() => {
            workLocation.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <BriefcaseIcon />
          Work
        </li>
        <li
          onClick={() => {
            socialLocation.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <HandThumbUpIcon />
          Social
        </li>
        <li
          onClick={() => {
            contactLocation.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChatBubbleLeftIcon />
          Contact
        </li>
      </ul>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('navbar-portal')!
  );
};

export default Navbar;
