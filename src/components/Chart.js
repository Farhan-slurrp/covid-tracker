import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { Loading } from "../features/countryInfo/countryTotalInfoSlice";
import { useSelector } from "react-redux";

const Chart = ({ data }) => {
  const [myData, setMyData] = useState(undefined);
  const isLoading = useSelector(Loading);

  useEffect(() => {
    setMyData(data);
  }, [data]);

  if (!myData || myData.length === undefined || isLoading) return <></>;
  return (
    <Container>
      <Bar
        className="bar"
        data={{
          labels: ["Confirmed", "Active", "Death", "Recovered"],
          datasets: [
            {
              data: [
                myData[0].confirmed,
                myData[0].confirmed - (myData[0].deaths + myData[0].recovered),
                myData[0].deaths,
                myData[0].recovered,
              ],
              backgroundColor: [
                "rgba(100, 100, 100, 0.2)",
                "rgba(54, 135, 202, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 235, 102, 0.2)",
              ],
              borderColor: [
                "rgba(100, 100, 100, 1)",
                "rgba(54, 135, 202, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 235, 102, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  padding: 1.4em 0 4em 0;
  .bar {
    width: 70vw;
  }
`;
