import React, { useEffect } from "react";
import styled from "styled-components";
import {
  fetchTotals,
  WorldInfo,
  Loading,
} from "../features/worldInfo/wordInfoSlicer";
import { useDispatch, useSelector } from "react-redux";
import WorldData from "./Home/WorldData";
import Header from "./Home/Header";
import Chart from "./Chart";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchTotals());
  }, []);

  //set data as WorldInfo state
  const data = useSelector(WorldInfo);
  const loading = useSelector(Loading);

  if (loading) return <LoadingDiv>Loading...</LoadingDiv>;
  return (
    <Container>
      <Header data={data} />
      <WorldData data={data} />
      <Chart data={data} />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingDiv = styled.div`
  font-weight: bold;
  font-size: 2em;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
