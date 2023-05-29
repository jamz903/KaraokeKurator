import PlaylistRow, { Song } from "./PlaylistRow";

interface P {
  songs: Song[];
}

const PlaylistCarousel = ({ songs }: { songs: Song[] }) => {
  return (
    <div className="h-full overflow-scroll flex flex-col gap-3">
      {songs.map((s) => (
        <PlaylistRow song={s} />
      ))}
    </div>
  );
};

export default PlaylistCarousel;
