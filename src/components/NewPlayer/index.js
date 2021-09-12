import React, { useState, useEffect } from 'react';
import { transferUserPlayback } from 'services/spotifyApi/endpoints';
import TrackInfo from './TrackInfo';
import MainControls from './MainControls';
import RangeInput from './RangeInput';

import * as S from './style';

const NewPlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [track, setTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0)


  useEffect(() => {
    console.log("useEffect Called.");
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "New Nico Music",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        console.log(device_id);
        transferUserPlayback(token, device_id);
        setDeviceId(device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log(`Device ID has gone offLine ${device_id}`);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) return;
        setPosition(state.position);
        setTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      });

      player.connect();
    };
  }, [token]);

  return (
    <S.StyledPlayer>
      <TrackInfo track={track} />

      <MainControls 
        token={token}
        player={player}
        deviceId={deviceId}
        track={track}
        isPaused={isPaused}
        position={position}
        setPosition={setPosition}
      />

      <S.VolumeWrapper>
        <RangeInput min="0" max="100" value={count} onChange={e => setCount(e.target.value)}/>
      </S.VolumeWrapper>
    </S.StyledPlayer>
  );
};

export default NewPlayer;
