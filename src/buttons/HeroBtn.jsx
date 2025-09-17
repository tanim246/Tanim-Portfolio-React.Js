import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <span className="text">View Projects ...</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    align-items: center;
   
    border: 0;
    border-radius: 4px;
    box-shadow: ;
    box-sizing: border-box;
    color: white;
    display: flex;
    font-size: 18px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:active,
  button:hover {
    outline:0;
  }

  button span {
    background-color: ;
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    border:2px solid #06b6c9;
    transition: 300ms;
  }

  button:hover span {
    background:#06b6c9;
  }

  button:active {
    transform: scale(0.9);
  }
`;

export default Button;
