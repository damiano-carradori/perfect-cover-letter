import { FunctionComponent } from "react";

type ChipProps = {
  value: string;
  onDelete?: Function;
};

const Chip: FunctionComponent<ChipProps> = ({ value, onDelete }) => {
  return (
    <div className="inline-flex rounded-full bg-green-400 text-black items-baseline tag">
      <div className="pl-4 pr-2">{value}</div>
      <div
        className="rounded-full cursor-pointer hover:bg-black/10 text-center leading-9 text-xl w-9 h-9"
        onClick={() => onDelete!()}
      >
        &times;
      </div>
    </div>
  );
};

export default Chip;
