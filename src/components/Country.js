import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Country/Header";
import {
  fetchCountryTotals,
  CountryTotal,
} from "../features/countryInfo/countryTotalInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CountryData from "./Country/CountryData";

const Country = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const dataTotal = useSelector(CountryTotal);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCountryTotals(country));

    e.target.disabled = true;
    setTimeout(function () {
      e.target.disabled = false;
    }, 1000);
  };

  return (
    <Container>
      <Header />
      <Search className="form-group mb-3">
        <input
          type="text"
          className="form-control outln"
          placeholder="Enter Country Name..."
          aria-label="Enter Country Name..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-dark outln"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </Search>
      <CountryData total={dataTotal} />
    </Container>
  );
};

export default Country;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.form`
  width: 50vmax;
  margin: 2.3em 0;
  display: flex;
  justify-content: center;
  input {
    color: #222 !important;
    :focus {
      border-color: #444 !important;
    }
  }
  .outln {
    border-radius: 0;
  }
  .outln:focus {
    outline: none;
    box-shadow: none;
  }
  .btn:pressed {
    outline: none;
    box-shadow: none;
  }
  @media only screen and (max-width: 415px) {
    width: 70vmin;
  }
`;
