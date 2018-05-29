/* eslint consistent-return: 0 */
const clientId = '4f009b14b2fe4e169a1da8d9dd00b930';
const redirectUri = 'http://localhost:3000/';
const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      console.log('Have token ##############');
      return accessToken;
    }
    const url = window.location.href;
    const urlAccessToken = url.match(/access_token=([^&]*)/);
    const urlExpiresIn = url.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      // console.log(urlAccessToken);
      const [, token] = urlAccessToken;
      accessToken = token;
      expiresIn = Number(urlExpiresIn[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      console.log('Ceate token ###########################################');
      return token;
    }
    window.location = spotifyUrl;
    console.log('Realod ###########################################');
    // this.GetAccessToken();
  },


  search(searchTerm) {
    const token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      { headers: { Authorization: `Bearer ${token}` } })
      .then(response => response.json())

      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(
          track => (
            {
              key: track.id, // KEY or ID????
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              URI: track.uri,
            }));
      });
  },

  savePlaylist(playlistName, uriArray) {
    if (!playlistName || !uriArray.length) {
      return; //  eslint-disable-line no-useless-return
    }
    const localToken = this.getAccessToken();
    let userID = '';
    let playlistID;

    return fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    }).then(response => response.json())
      .then((jsonResponse) => {
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ name: playlistName }),
        })
          .then(response => response.json())
          .then((jsonResponse2) => {
            playlistID = jsonResponse2.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
              {
                headers:
                {
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ uris: uriArray }),
              })
              .then(response => response.json())
              .then((jsonResponse3) => {
                playlistID = jsonResponse3.id;
              });
          });
      });
  },
};


export default Spotify;

