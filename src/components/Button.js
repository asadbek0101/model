import React from "react";
import styled from "styled-components";
import "./button.css";

const ButtonStyle = styled.button`
  padding: 4px 10px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
  width: 200px;
`;

export default function Button({ title, onclick, width, bgColor }) {
  return (
    <div onClick={onclick}>
      <ButtonStyle style={{ width: width, backgroundColor: bgColor }}>
        {title}
      </ButtonStyle>
    </div>
  );
}
