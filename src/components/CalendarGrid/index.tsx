import { useEffect, useState } from "react";
import { CalendarCells } from "../../types/CalendarCells";
import { CalendarEvents } from "../../types/CalendarEvents";
import CalendarCell from "./CalendarCell";
import "./style.css";
import CalendarEvent from "./CalendarEvent";

interface CalendarGridProps {
  cells: CalendarCells;
  events: CalendarEvents;
}

const CalendarGrid = ({ cells, events }: CalendarGridProps) => {
  const isRowEmpty = (row: Array<string | null>) =>
    row.every((cell) => cell === null);

  const [expandedEvents, setExpandedEvents] = useState<{
    [key: string]: boolean;
  }>(
    cells.reduce((acc: { [key: string]: boolean }, row) => {
      row.forEach((cell) => {
        if (events[cell]) acc[cell] = false;
      });
      return acc;
    }, {})
  );

  useEffect(() => {
    setExpandedEvents(
      cells.reduce((acc: { [key: string]: boolean }, row) => {
        row.forEach((cell) => {
          if (events[cell]) acc[cell] = false;
        });
        return acc;
      }, {})
    );
  }, [cells]);

  const handleEventClick = (date: string) =>
    setExpandedEvents({
      ...Object.entries(expandedEvents).reduce(
        (acc, [key]) => ({
          ...acc,
          [key]: false,
        }),
        {}
      ),
      [date]: !expandedEvents[date],
    });

  return (
    <div className="CalendarGrid">
      {cells.map((row, rowIndex) => {
        const hasEvents = row.some((cell) => events[cell]);
        return isRowEmpty(row) ? null : (
          <div className="CalendarRow" key={`row-${rowIndex}`}>
            {row.map((date, cellIndex) => {
              const isHidden = date === null;
              const key = `cell-${rowIndex}-${cellIndex}`;
              return (
                <CalendarCell
                  key={key}
                  date={date}
                  event={events[date]}
                  isHidden={isHidden}
                  onClick={() => handleEventClick(date as string)}
                />
              );
            })}
            {hasEvents &&
              row.map((date) => {
                const key = `preview-${date}`;
                return events[date] ? (
                  <CalendarEvent
                    key={key}
                    event={events[date]}
                    isExpanded={expandedEvents[date]}
                  />
                ) : null;
              })}
          </div>
        );
      })}
    </div>
  );
};
export default CalendarGrid;
