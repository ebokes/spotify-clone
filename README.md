# Spotify-clone

## Introduction
This application is a simplified version of the Spotify Music Player that fetches data from the Spotify API to display the user's profile and playlists. However, it currently functions only as a remote control for the Spotify player, requiring the original Spotify app to be open and playing before music can be played or controlled using this clone.

## Tools used in achieving this application
- Vite
- React
- Styled-Components
- Axios

## How I achieved this
- Logged into my Spotify account
- Navigated to the Spotify for Developers dashboard and created an app. The app provided me with a client ID and a client secret
- Created a function that constructs a URL for Spotify to identify the app and redirect the user back to the app after authorization
- Customized the URL parameters with my own client ID, redirect URI, API URI, and a list of scopes that define the types of data and actions the app can access on behalf of a user
- Created a login page where I added a button to the app with an onClick handler that calls the function to redirect the user to the cloned music player page
- Styled the app with CSS to personalize the appearance and layout

## How the app works
- The webpage is loaded and the user is presented with the welcome page where they click on the "Connect to Spotify" button
- The user is redirected to the Spotify authorization page where they will be prompted to log in to their Spotify account and grant the app access to the requested scopes
- Once the user grants access, Spotify will redirect them back to the app with an access token that can be used to make requests to the Spotify API on behalf of the user.
- The app uses the access token to make API calls and fetch data about the user such as profile information, playlists, and songs in the playlist.
- The fetched data is displayed on the app, allowing the user to view their Spotify data on the app.

## Why I built the project this way
- I used context API for state management, rather than redux because it is not an extensive application
- Styled-components is an excellent library for styling. It includes an auto-prefixer, uses scoped classes, and allows seamless integration with JS.
- I am more focused on building frontend, for this reason I decided to use an existing API rather to create a custom server.

## If I had more time I would change this
- Implement a feature to allow the user to play music directly on the app instead of just acting as a remote control for the Spotify player.
- Add functionality to search for music by artist, album, or song title
- Implement a testing framework like Jest to ensure code reliability and prevent bugs before they occur.
