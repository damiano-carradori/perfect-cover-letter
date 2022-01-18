import { FunctionComponent } from "react";

type ChipProps = {
  value: string;
  onDelete?: Function;
};

const Chip: FunctionComponent<ChipProps> = ({ value, onDelete }) => {
  return (
    <div className="tag">
      <div className="value">{value}</div>
      <div className="close" onClick={() => onDelete!()}>
        &times;
      </div>
    </div>
  );
};

export default Chip;
