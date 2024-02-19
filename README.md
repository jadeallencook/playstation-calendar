# PlayStation Calendar

The PlayStation Calendar is a web application designed to track and display upcoming game releases and events for PlayStation platforms. Developed using React and TypeScript, it offers a dynamic and responsive user interface that provides users with a visual calendar, detailed game summaries, and direct links for further learning or purchasing games. This application is especially useful for gamers and enthusiasts looking to stay informed about the latest and upcoming releases on PlayStation platforms.

## Backend Response Format

The backend supplies event data in a comprehensive format, capturing all necessary details about each game release. This structured approach enables us to present users with rich information, including:

- A high-resolution image displayed in the event preview, offering a detailed visual representation of the game.
- A thumbnail image shown within the calendar cell, optimized for quick loading and calendar viewability.
- Direct links for further learning or purchasing, enhancing user engagement and accessibility.
- A summary and title for quick insights into the game's content, facilitating user understanding at a glance.

```ts
interface CalendarEvent {
  id: string;
  imageFilenameFull: string;
  imageFilenameThumb: string;
  launchDate: string;
  learnMoreLink: string;
  purchaseLink: string;
  summary: string;
  title: string;
}
```

## Data Structure Transformation

To improve performance and enhance the user experience with faster load times, we transform the backend data into a keyed structure by date. This approach allows for efficient event lookup, eliminating the need for iterating over an array to find events for a specific date.

```ts
interface CalendarEvents {
  [key: string]: CalendarEvent;
}

// example
const data = {
  "2023/3/7": { ...event },
  "2023/3/23": { ...event },
  "2023/9/3": { ...event },
};
```

## Calendar Rendering Logic

Our calendar rendering logic is designed to offer both flexibility and efficiency. By organizing dates and events into a matrix, we can easily map them to the visual calendar structure, facilitating intuitive navigation through months.

```js
const calendarCells = [
  [null, null, null, "2023/3/1", "2023/3/2", "2023/3/3", "2023/3/4"],
  [
    "2023/3/5",
    "2023/3/6",
    "2023/3/7",
    "2023/3/8",
    "2023/3/9",
    "2023/3/10",
    "2023/3/11",
  ],
  [
    "2023/3/12",
    "2023/3/13",
    "2023/3/14",
    "2023/3/15",
    "2023/3/16",
    "2023/3/17",
    "2023/3/18",
  ],
  [
    "2023/3/19",
    "2023/3/20",
    "2023/3/21",
    "2023/3/22",
    "2023/3/23",
    "2023/3/24",
    "2023/3/25",
  ],
  [
    "2023/3/26",
    "2023/3/27",
    "2023/3/28",
    "2023/3/29",
    "2023/3/30",
    "2023/3/31",
    null,
  ],
];
```

## Components Structure

Leveraging React and TypeScript, the component structure is designed to modularize functionality and enhance maintainability:

```html
<Calendar>
  <!-- Header with month and navigation controls. -->
  <CalendarHeader />
  <!-- Days of the week display. -->
  <CalendarDOW />
  <!-- Week rows in the calendar, with individual day cells. -->
  <CalendarRow>
    <!-- Day cell, showing thumbnail images for events. -->
    <CalendarCell />
    <CalendarCell />
    <CalendarCell />
    <CalendarCell />
    <CalendarCell />
    <CalendarCell />
    <CalendarCell />
    <!-- Event preview, displaying full-sized images and detailed information. -->
    <CalendarPreview />
  </CalendarRow>
</Calendar>
```

This structure not only facilitates the development and future enhancements but also ensures scalability and ease of updates, reflecting our commitment to delivering a high-quality, user-focused product.
