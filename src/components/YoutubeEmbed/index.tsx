import './index.css';

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed?listType=playlist&list=UUTceODz7ynphUfT8QnFduZQ" //gabe url
      title="Gabe Rundlett Channel"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
);

export default YoutubeEmbed;
