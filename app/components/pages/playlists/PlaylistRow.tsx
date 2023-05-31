import Image from "next/image";
import LogoFull from "public/logo_full.svg";

const PlaylistRow = ({ song }: { song }) => {
  const name = song[0];
  const band = JSON.parse(song[1].replace(/'/g, '"'))[0];
  return (
    <div className="flex w-full align-center">
      <div className="border bg-white-600">
        <Image src={LogoFull} alt="Album cover" width={50} height={50} />
      </div>
      <div className="flex flex-col ml-3">
        <p className="text-md">{name}</p>
        <p className="text-sm">{band}</p>
      </div>
    </div>
  );
};

export default PlaylistRow;
