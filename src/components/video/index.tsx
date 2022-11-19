type VideoProps = {
  videoUrl: string;
};

const Video = ({ videoUrl }: VideoProps) => {
  return (
    <iframe
      width="320"
      height="180"
      src={videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
