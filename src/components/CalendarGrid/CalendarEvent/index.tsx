import { CalendarEvent } from "../../../types/CalendarEvents";

interface CalendarEventProps {
  isExpanded: boolean;
  event: CalendarEvent;
}

const CalendarEvent = ({
  isExpanded,
  event: { title, summary, imageFilenameFull, learnMoreLink, purchaseLink },
}: CalendarEventProps) => {
  return (
    <div
      className="CalendarPreview"
      style={{
        maxHeight: isExpanded ? "500px" : "0",
        padding: isExpanded ? "100px 25px" : "0px 25px",
        marginTop: isExpanded ? "15px" : "0",
        backgroundImage:
          imageFilenameFull && `url(/assets/${imageFilenameFull}.webp)`,
      }}
    >
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      <a href={learnMoreLink} target="_blank" className="learn-more">
        Learn More
      </a>
      <a href={purchaseLink} target="_blank" className="pre-order">
        Pre Order Now
      </a>
    </div>
  );
};

export default CalendarEvent;
