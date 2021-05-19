import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { tz } from "moment-timezone";

const Header = ({ data }) => {
  const [myData, setMyData] = useState(undefined);

  useEffect(() => {
    setMyData(data);
  }, [data]);

  if (!myData || myData.length === undefined) return <></>;
  return (
    <Container>
      <h1>
        Covid-19 World Record{" "}
        <img src="https://www.torqaid.com/wp-content/uploads/2020/07/covid19_icon-002.png" />
      </h1>
      <p>
        Last Change:{" "}
        {moment(myData[0].lastChange).tz("Asia/Kuala_Lumpur").format("LLLL")}{" "}
        <br /> Last Update:{" "}
        {moment(myData[0].lastUpdate).tz("Asia/Kuala_Lumpur").format("LLLL")}
      </p>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  margin-bottom: 1em;
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
  p {
    margin-top: 0.5em;
    font-size: 1.05em;
    font-style: italic;
    font-weight: 500;
    color: rgb(0 0 155 / 80%);
  }
`;
