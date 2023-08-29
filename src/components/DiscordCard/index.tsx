import './index.css';
import DiscordLogo from '../../assets/images/discord-logo-white.svg';

const DiscordCard = () => (
  <div className="discord-card">
    <div className="discord-container">
      <div className="discord-topbar">
        <img src={DiscordLogo}></img>
        <iframe
          className="members"
          width={119}
          height={20}
          src="https://discordapp.com/api/guilds/985017702433316924/widget.png?style=shield"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </div>
      <div className="space"></div>
      <a href="https://discord.com/invite/FPVNeej5sr">Join Server</a>
    </div>
  </div>
);

export default DiscordCard;
