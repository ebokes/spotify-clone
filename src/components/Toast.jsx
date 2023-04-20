import React, { useState } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { AiOutlineClose } from "react-icons/ai";
import { reducerCases } from "../utils/Constants";

const Toast = () => {
  const [{ toastMsg }, dispatch] = useStateProvider();

  const handleClose = () => {
    dispatch({ type: reducerCases.SET_TOAST, toastMsg: null });
  };
  return (
    <AlertStyle>
      <span>
        <AiOutlineClose onClick={handleClose} />
      </span>
      <p>{toastMsg.msg}</p>
      <a href={toastMsg.link} target="_blank">
        Open Spotify Web Player
      </a>
    </AlertStyle>
  );
};

export default Toast;

const AlertStyle = styled.div`
  position: fixed;
  width: 32rem;
  top: 7rem;
  right: 2rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1db954;
  color: #fff;
  border-radius: 0.5rem;
  animation: slideIn 2s ease-in;
  @media (max-width: 500px) {
    width: 30rem;
  }
  @media (max-width: 340px) {
    width: 95%;
    right: 0.5rem;
  }
  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }
  p {
    display: flex;
    align-items: center;
    font-size: clamp(1rem, 3vw, 1.1rem);
    padding: 0 0.5rem 0 0.5rem;
    gap: 1.3rem;
    @media (max-width: 500px) {
      padding: 0 0.5rem 0 0.5rem;
    }
    @media (max-width: 340px) {
      padding: 0 0.5rem 0 0.5rem;
    }
  }
  span {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem 0 0;
    svg {
      font-size: 20px;
      cursor: pointer;
    }
  }
  a {
    padding-bottom: 1rem;
    color: #fff;
  }
`;
