import "./style.css";

interface CalendarCellProps {
  date: string;
  isHidden: boolean;
  event: any;
  onClick?: () => void;
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  date,
  isHidden,
  event,
  onClick,
}) => {
  const imageFilenameThumb = event?.imageFilenameThumb;
  const backgroundImage =
    imageFilenameThumb && `url(/assets/${imageFilenameThumb}.webp)`;
  const day = date ? date.split("-").at(-1) : "";
  return (
    <div
      onClick={onClick}
      className={`CalendarCell ${isHidden ? "hidden" : ""} ${
        event ? "event" : ""
      }`}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div>{day}</div>
    </div>
  );
};

export default CalendarCell;
