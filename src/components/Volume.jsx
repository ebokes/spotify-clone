import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { SlVolume1 } from "react-icons/sl";

export default function Volume() {
  const [{ token }] = useStateProvider();
  const setVolume = async (e) => {
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume",
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  };
  return (
    <Container>
      <SlVolume1 />
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  gap: 1rem;

  input {
    width: 9rem;
    border-radius: 2rem;
    accent-color: #1db954;
    cursor: pointer;
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 50%;
  }
  input[type="range"]:focus {
    /* outline: none; */
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: 3px;
    cursor: pointer;
    animate: 0.2s;
  }

  input[type="range"]::-webkit-slider-thumb {
    border: 1px solid #1db954;
    height: 20px;
    width: 20px;
    border-radius: 18px;
    background: #1db954;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -9px;
  }

  svg {
    color: #fff;
  }
`;
