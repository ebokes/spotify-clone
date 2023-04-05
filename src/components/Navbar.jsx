import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ navBackground }) => {
  const [{ userInfo }] = useStateProvider();
  return (
    <Container navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch />
        <form>
          <input type="text" placeholder="Artists or songs" />
        </form>
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <img src={userInfo?.avatar} alt="avatar" />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0,0,0,0.7)" : "none"};
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: bold;

      img {
        height: 1.5rem;
        font-size: 1.3rem;
        padding: 0.2rem;
        border-radius: 50%;
      }
    }
  }
`;
