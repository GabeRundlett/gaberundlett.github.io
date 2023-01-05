import Draggable from 'react-draggable';
import './index.css';

interface ImguiWindow {
  background?: boolean;
}

const ImguiWindow = ({ background = false }: ImguiWindow) => {
  return (
    <div className="imgui-canvas">
      {background ? <div className="imgui-background"></div> : null}
      <Draggable>
        <div className="imgui-window">
          <div className="imgui-window__topbar">
            <div className="triangle"></div>
            <h1>Hello World!</h1>
          </div>
          <div className="imgui-window__content">
            <h1 className="text">
              I am a young software engineer who <br /> loves making cool things
              with code in my free-time
            </h1>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default ImguiWindow;
