import Image from "next/image";
import LogoFull from "public/logo_full.svg";

export interface Song {
  name: string;
  band: string;
  yearReleased: string;
  albumCover: string;
}

const PlaylistRow = ({ song }: { song: Song }) => {
  const { name, band, yearReleased, albumCover } = song;
  return (
    <div className="flex w-full align-center">
      <div className="border bg-white-600">
        <Image src={LogoFull} alt="Album cover" width={50} height={50} />
      </div>
      <div className="flex flex-col ml-3">
        <p className="text-md">{name}</p>
        <p className="text-sm">
          {band}, {yearReleased}
        </p>
      </div>
    </div>
  );
};

export default PlaylistRow;
