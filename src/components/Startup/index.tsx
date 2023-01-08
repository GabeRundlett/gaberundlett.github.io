import './index.css';
import { useState } from 'react';
import ImguiWindow, { WindowType } from '../ImguiWindow';

interface IStartup {
  onClick(): void;
}

const Startup = ({ onClick }: IStartup) => {
  const windowDelay = 500;
  const [isDragging, setIsDragging] = useState(false);
  const [windowType, setWindowType] = useState<WindowType>('windowed');

  const changeWindow = () => {
    setWindowType('fullscreen');
    setTimeout(() => {
      onClick();
    }, windowDelay);
  };

  return (
    <div className="imgui-canvas">
      <ImguiWindow
        title="Gabe Rundlett"
        windowType={windowType}
        windowDelay={windowDelay}
        onDrag={onDrag}
        onStop={onStop}
      >
        <div className={`imgui-window__content__${windowType}`}>
          <h2 className="text">
            I am a young software engineer who loves <br /> making cool things
            with code in my free-time
          </h2>
          <button
            onClick={() => {
              if (!isDragging) changeWindow();
            }}
          >
            More about me
          </button>
        </div>
      </ImguiWindow>
    </div>
  );

  function onDrag() {
    setIsDragging(true);
  }

  function onStop() {
    setTimeout(() => {
      setIsDragging(false);
    }, 0);
  }
};

export default Startup;
