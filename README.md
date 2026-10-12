# React Movies

A movie archive with a design inspired by modern video streaming apps, built with React and Material UI.
It uses the [TMDB](https://www.themoviedb.org/) API to browse movies by category and genre, search titles and show movie and actor details.

**Live demo:** <https://react-movies.davidebalice.dev/>

![Screenshot](https://www.aroundweb.it/screenshot/movies.jpg)

## Features

- Browse movies by category (Popular, Top Rated, Upcoming) and by genre
- Featured movies and category carousels on the home page
- Search movies by title
- Movie detail page with rating, genres, cast, trailer and links to the website and IMDb
- Actor detail page with biography and filmography
- Trailers carousel
- Login with a TMDB account and profile page with favorite and watchlist movies
- Pagination
- Light and dark theme

## Tech stack

- [React 18](https://react.dev/)
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
- [Material UI 5](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) and RTK Query
- [React Router 6](https://reactrouter.com/)
- [Swiper](https://swiperjs.com/)
- [Axios](https://axios-http.com/)
- [TMDB API](https://developer.themoviedb.org/)

## Getting started

### Requirements

- Node.js 18 or later
- npm
- A TMDB API key (free, from <https://www.themoviedb.org/settings/api>)

### Installation

```bash
git clone https://github.com/davidebalice/react-movies.git
cd react-movies
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
REACT_APP_TMDB_KEY=your_tmdb_api_key
```

### Available scripts

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm start`     | Start the development server on port 3000     |
| `npm run build` | Create a production build in `build/`         |
| `npm test`      | Run the test runner                           |

## Project structure

```
src/
├── components/     # Movies, MovieInformation, Actors, Profile, NavBar, Sidebar, Search...
├── services/       # TMDB API (RTK Query)
├── features/       # Redux slices (auth, current genre/category)
├── app/            # Redux store
├── utils/          # TMDB authentication helpers and color mode toggle
└── App.jsx         # Routes
```

## Author

**Davide Balice** – [davidebalice.dev](https://www.davidebalice.dev)
