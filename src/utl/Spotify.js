import { access } from 'fs';

const clientId = '4f009b14b2fe4e169a1da8d9dd00b930';
const redirectUri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
let accessToken;
let expiresIn;

const Spotify = {

  GetAccessToken() {
    if (accessToken) {
      console.log('Have token ##############');
      return accessToken;
    }
    const url = window.location.href;
    const urlAccessToken = url.match(/access_token=([^&]*)/);
    const urlExpiresIn = url.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      console.log('Ceate token ###########################################');
    } else {
      window.location = spotifyUrl;
      console.log('Realod ###########################################');
      // Spotify.GetAccessToken();
    }
  },


  async Search(searchTerm) {
    const token = await Spotify.GetAccessToken();
    console.log(`Token in SEARCH(): ${token}`);
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await response.json();
    console.log(`DATA in SEARCH(): ${data}`);
    const trackArray = data.tracks.items.map(
      track => (
        {
          key: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          URI: track.uri,
        }
      ),
    );
    console.log(trackArray);
    return trackArray;
  },

};

export default Spotify;

