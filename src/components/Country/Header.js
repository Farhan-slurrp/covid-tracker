import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Header = ({ data }) => {
  return (
    <Container>
      <h1>
        Covid-19 Country Record{" "}
        <img src="https://www.torqaid.com/wp-content/uploads/2020/07/covid19_icon-002.png" />
      </h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  margin-top: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3em;
    display: flex;
    align-item: center;
    gap: 0.1em;
    img {
      margin-top: 0.1em;
      width: 1.05em;
      height: 1.05em;
    }
  }
`;
