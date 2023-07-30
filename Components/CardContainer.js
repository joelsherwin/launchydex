import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";
import ShimmerCard from "./ShimmerCard";
import Searchbar from "./SearchBar";

import "./CardContainer.css";
import { STALE_DATA } from "./../utils/staledata.js";

const CardContainer = () => {
  const [launchData, setLaunchdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const fetchLaunchData = async () => {
    const data = await fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/upcoming"
    );
    const JSONdata = await data.json();
    setLaunchdata(JSONdata);
  };

  const searchInputHandler = (searchKey) => {
    setSearchTerm(searchKey);
  };

  useEffect(() => {
    fetchLaunchData();
  }, []);

  return launchData.length === 0 ? (
    <div className="card-container">
      <Searchbar keyDownHandler={searchInputHandler} />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  ) : (
    <div className="card-container">
      <Searchbar keyDownHandler={searchInputHandler} />
      {launchData.results
        ?.filter((result) => {
          if (searchTerm === "") {
            return result;
          } else if (
            result.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1 ||
            result.pad.location.name
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) != -1
          ) {
            return result;
          }
        })
        .map((launch) => {
          return <LaunchCard data={launch} />;
        })}
    </div>
  );
};

export default CardContainer;
