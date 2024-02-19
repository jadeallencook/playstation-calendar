import { useState, useEffect, useCallback } from "react";
import { CalendarEvent, CalendarEvents } from "../types/CalendarEvents";

interface UseCalendarEvents {
  events: CalendarEvents | null;
  isLoading: boolean;
  error: Error | null;
}

function useCalendarEvents(): UseCalendarEvents {
  const [events, setEvents] = useState<CalendarEvents | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCalendarData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://amock.io/api/jadeallenco/playstation"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch calendar data");
      }
      let data: CalendarEvent[] = await response.json();
      let reformattedData: CalendarEvents = data.reduce((acc, item) => {
        const date = new Date(item.launchDate);
        const key = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        return {
          ...acc,
          [key]: item,
        };
      }, {});
      setEvents(reformattedData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCalendarData();
  }, [fetchCalendarData]);

  return { events, isLoading, error };
}

export default useCalendarEvents;
