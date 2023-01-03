# React Board Game Reviews Site

This repo contains a frontend solo project completed during the Northcoders software development bootcamp. The project is a board game reviews website built with React, Axios, HTML and CSS. Users can view reviews, comments, votes and more. The React app makes use of an API I built using Express, Node.js and PSQL in the backend section of the course.

This project is currently a work in progress! After testing a React Bootstrap framework, I decided to style using HTML and CSS. My goal is to create a responsive and accessible site but there's still some work to be done! I also hope to add some additional features such as posting comments and voting.

## Quick Links

- [Hosted React Website](https://nc-board-game-reviews.netlify.app/)
- [Hosted API](https://nc-games-reviews.onrender.com/)
- [Backend Repo](https://github.com/teyahbd/nc-games-reviews-api)

## Built With

Key frameworks and packages used in the development of this site include:

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)

## Getting Started

### Prerequisites

- React (min. v18.2.0)
- An appropriate API and database

This repo currently uses my own hosted version of my backend API to access, create and update information for the site in the PSQL database. If you wish to create your own version of the API and database to interact with, see the Getting Started section of my [backend repo](https://github.com/teyahbd/nc-games-reviews-api) and update the `baseURL` on line 4 of `api.js` in this repo to where your new API is hosted.

### 1. Clone this repo

You can clone this repo locally using the command:

```
git clone https://github.com/teyahbd/nc-games-reviews.git
```

### 2. Install dependences

Navigate into the main folder of this repo and install the necessary dependencies using the command:

```
npm install
```

### 3. Run the React app locally

To run the React app locally, simply use the command:

```
npm start
```

The default port for a React app is `3000` so you can now access your app at http://localhost:3000/.
