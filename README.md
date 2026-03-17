# WEB103 Project 3 - UnityGrid Plaza

Submitted by: **Louis Miguel Sabaricos**

About this web app: **UnityGrid Plaza is a futuristic virtual community space web app where users can explore different city locations and view events happening at each one. The app uses React on the frontend, an Express API on the backend, and PostgreSQL on Render to store and retrieve location and event data.**

Time spent: **8 hours**

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README includes a view of the Render dashboard demonstrating that the Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README includes a demonstration of the table contents using the psql command `SELECT * FROM events;`**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [ ] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Futuristic themed UI design
- [x] Styled navigation buttons for Home and Events pages
- [x] Glassmorphism-inspired event cards
- [x] Separate location and events API service files for cleaner frontend structure
- [x] Responsive full-page background visual design

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="./walkthrough-virtual-community-space.gif" title="Video Walkthrough" width="600" alt="Video Walkthrough" />

GIF created with **ScreenToGif**

## Notes

One challenge during development was connecting the React frontend to the Express backend while also making sure the PostgreSQL database on Render was properly configured and seeded. Another challenge was debugging import/export mismatches between frontend service files and React pages, along with making sure route file names and controller file names matched exactly. Once the API routes and database tables were working, the final step was wiring the frontend pages to display live data correctly.

## License

Copyright **2026** **Louis Miguel Sabaricos**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.