export interface CalendarEvent {
  id: string;
  imageFilenameFull: string;
  imageFilenameThumb: string;
  launchDate: string;
  learnMoreLink: string;
  purchaseLink: string;
  summary: string;
  title: string;
}

export interface CalendarEvents {
  [key: string]: CalendarEvent;
}
