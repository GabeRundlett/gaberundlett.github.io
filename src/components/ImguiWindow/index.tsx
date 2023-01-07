import Draggable from 'react-draggable';
import { CSSProperties, ReactNode, useRef } from 'react';

import './index.css';

export type WindowType = 'windowed' | 'fullscreen';

interface ImguiWindowProps {
  title: string;
  windowType: WindowType;
  windowDelay: number;
  onDrag?: () => void;
  onStop?: () => void;
  children?: ReactNode;
}

const ImguiWindow = (window: ImguiWindowProps) => {
  const animationDelay = { '--openTime': `${window.windowDelay / 1000}s` };
  const nodeRef = useRef(null);

  return (
    <Draggable
      disabled={window.windowType === 'windowed' ? false : true}
      nodeRef={nodeRef}
      position={window.windowType === 'fullscreen' ? { x: 0, y: 0 } : undefined}
      onDrag={window.onDrag}
      onStop={window.onStop}
    >
      <div
        className={`imgui-window__${window.windowType}`}
        ref={nodeRef}
        style={animationDelay as CSSProperties}
      >
        <div className={`imgui-window__topbar__${window.windowType}`}>
          <div className="triangle"></div>
          <h1>{window.title}</h1>
        </div>
        {window.children}
      </div>
    </Draggable>
  );
};

export default ImguiWindow;
