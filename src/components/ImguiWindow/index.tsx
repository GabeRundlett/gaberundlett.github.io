import './index.css';

const ImguiWindow = () => {
  return (
    <div className="imgui-background">
      <div className="imgui-window">
        <div className="imgui-window__topbar">
          <div className="triangle"></div>
          <h1>Gabe Rundlett</h1>
        </div>
        <div className="imgui-window__content"></div>
      </div>
    </div>
  );
};

export default ImguiWindow;
