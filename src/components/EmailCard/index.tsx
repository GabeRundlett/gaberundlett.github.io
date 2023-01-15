import { useState } from 'react';
import './index.css';

import { Mail } from 'heroicons-react';

const EmailCard = () => {
  const [textState, setTextState] = useState<'Copy to Clipboard' | 'Copied!'>(
    'Copy to Clipboard'
  );

  const copyToClipBoard = () => {
    if (textState == 'Copy to Clipboard') setTextState('Copied!');

    navigator.clipboard.writeText('gabe@rundlett.com');
  };

  return (
    <div className="email">
      <div className="email-topbar">
        <h1>
          <Mail />
          Email
        </h1>
        <p>gabe@rundlett.com</p>
      </div>
      <div className="email-bottom">
        <a
          onClick={() => {
            copyToClipBoard();
          }}
        >
          {textState}
        </a>
      </div>
    </div>
  );
};

export default EmailCard;
