import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WorldData = ({ data }) => {
  const [myData, setMyData] = useState(undefined);

  useEffect(() => {
    setMyData(data);
  }, [data]);

  if (!myData || myData.length === undefined) return <></>;
  return (
    <Container>
      <TotalCase>
        <div className="card">
          <div className="card-header">Total Cases</div>
          <div className="card-body">
            <h5 className="card-title">
              {myData[0].confirmed
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h5>
          </div>
        </div>
      </TotalCase>
      <TotalActive>
        <div className="card">
          <div className="card-header">Active Cases</div>
          <div className="card-body">
            <h5 className="card-title">
              {(myData[0].confirmed - (myData[0].deaths + myData[0].recovered))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h5>
          </div>
        </div>
      </TotalActive>
      <TotalDeath>
        <div className="card">
          <div className="card-header">Total Deaths</div>
          <div className="card-body">
            <h5 className="card-title">
              {myData[0].deaths
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h5>
          </div>
        </div>
      </TotalDeath>
      <TotalRecovered>
        <div className="card">
          <div className="card-header">Total Recovered</div>
          <div className="card-body">
            <h5 className="card-title">
              {myData[0].recovered
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h5>
          </div>
        </div>
      </TotalRecovered>
    </Container>
  );
};

export default WorldData;

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  margin-bottom: 3em;
`;
const TotalCase = styled.div`
  width: 34.25vw;
  ${"" /* margin-bottom: 0.3em; */}
  .card {
    text-align: center;
    border-color: rgb(3 3 3 / 30%);
    .card-header {
      font-weight: 500;
      font-size: 1.1em;
      background: rgb(3 3 3 / 10%);
      border: none;
    }
    .card-title {
      font-size: 2em;
      color: rgb(0 0 0 / 75%);
    }
  }
`;
const TotalActive = styled.div`
  width: 34.25vw;
  .card {
    text-align: center;
    border-color: rgb(0 0 255 / 40%);
    .card-header {
      border: none;
      font-size: 1.1em;
      font-weight: 500;
      color: rgb(0 0 100 / 100%);
      background: rgb(0 0 255 / 20%);
    }
    .card-title {
      font-size: 2em;
      color: rgb(0 0 255 / 80%);
    }
  }
`;
const TotalDeath = styled.div`
  width: 34.25vw;
  .card {
    text-align: center;
    border-color: rgb(255 0 0 / 40%);
    .card-header {
      border: none;
      font-size: 1.1em;
      font-weight: 500;
      color: rgb(120 0 0 / 100%);
      background: rgb(255 0 0 / 20%);
    }
    .card-title {
      font-size: 2em;
      color: rgb(255 0 0 / 80%);
    }
  }
`;
const TotalRecovered = styled.div`
  width: 34.25vw;
  .card {
    text-align: center;
    border-color: rgb(0 135 0 / 40%);
    .card-header {
      border: none;
      font-size: 1.1em;
      font-weight: 500;
      color: rgb(0 60 10 / 100%);
      background: rgb(0 220 0 / 20%);
    }
    .card-title {
      font-size: 2em;
      color: rgb(0 180 10 / 100%);
    }
  }
`;
