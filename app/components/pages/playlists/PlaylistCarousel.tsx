import PlaylistRow from "./PlaylistRow";

const PlaylistCarousel = ({ songs }: { songs }) => {
  console.log(songs);
  return (
    <div className="h-full overflow-scroll flex flex-col gap-3">
      {songs.map((s, idx) => (
        <PlaylistRow song={s} key={idx} />
      ))}
    </div>
  );
};

export default PlaylistCarousel;
