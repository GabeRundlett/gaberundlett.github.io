import Draggable from 'react-draggable';
import './index.css';
import { CSSProperties, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';

const ImguiWindow = () => {
  const openTime = 500;
  const [isDragging, setIsDragging] = useState(false);
  const [removeWindow, setRemoveWindow] = useState(false);
  const [windowMode, setWindowMode] = useState<'windowed' | 'fullscreen'>(
    'windowed'
  );
  const nodeRef = useRef(null);

  const changeWindow = () => {
    switch (windowMode) {
      case 'windowed':
        setWindowMode('fullscreen');
        setTimeout(() => {
          setWindowMode('windowed');
          setRemoveWindow(true);
        }, openTime);
        break;

      case 'fullscreen':
        setWindowMode('windowed');
        break;
    }
  };

  if (removeWindow) {
    return <Home></Home>;
  } else
    return ReactDOM.createPortal(
      <div
        className="imgui-canvas"
        style={
          {
            '--openTime': `${openTime / 1000}s`
          } as CSSProperties
        }
      >
        <Draggable
          disabled={windowMode === 'windowed' ? false : true}
          nodeRef={nodeRef}
          onDrag={() => {
            onDrag();
          }}
          onStop={() => {
            onStop();
          }}
          position={windowMode === 'fullscreen' ? { x: 0, y: 0 } : undefined}
        >
          <div ref={nodeRef} className={`imgui-window__${windowMode}`}>
            <div className={`imgui-window__topbar__${windowMode}`}>
              <div className="triangle"></div>
              <h1>Gabe Rundlett</h1>
            </div>
            <div className={`imgui-window__content__${windowMode}`}>
              <h2 className="text">
                I am a young software engineer who loves <br /> making cool
                things with code in my free-time
              </h2>
              <button
                onClick={() => {
                  if (!isDragging) changeWindow();
                }}
              >
                More about me
              </button>
            </div>
          </div>
        </Draggable>
      </div>,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById('imgui-portal')!
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

export default ImguiWindow;
