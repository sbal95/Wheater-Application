import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataActive from "./dataActive";
import HourlyChart from "./hourlyChart";
import {
  fetchDataSuccess,
  setCity,
  changeHourData,
} from "../../actions/index.js";
import Loading from "./loading";

const Table = () => {
  const [data, setData] = useState();

  const city = useSelector((state) => state.selectedCity);
  const [isDataActive, setIsDataActive] = useState(false);
  const [whaeterStatus, setWhaeterStatus] = useState("Sunny");
  const [backgroundImage, setBackgroundImage] = useState("bg-sunny");

  const dispatch = useDispatch();

  const apiOptions = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: city,
      days: "3",
    },
    headers: {
      "X-RapidAPI-Key": "935b5d9fd1msh041cac1c950e80bp141065jsndbee54215259",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(apiOptions);
      const data = response.data;
      const forHourData = response.data.forecast.forecastday[0].hour;
      dispatch(fetchDataSuccess(response.data));
      dispatch(changeHourData(forHourData.map((hour, i) => hour.temp_c)));
      setData(data);
      setIsDataActive(true);
      setWhaeterStatus(data.forecast.forecastday[0].day.condition.text);
    } catch (error) {
      dispatch(setCity("istanbul"));
    }
  };

  const getWhateverStatus = () => {
    if (whaeterStatus === "Partly cloudy" || whaeterStatus === "Sunny") {
      setBackgroundImage("bg-sunny");
    }
    if (
      whaeterStatus === "Moderate rain" ||
      whaeterStatus === "rain" ||
      whaeterStatus === "Heavy rain" ||
      whaeterStatus === "Light rain shower" ||
      whaeterStatus === "Light rain"
    ) {
      setBackgroundImage("bg-rain");
    }
    if (
      whaeterStatus === "Overcast" ||
      whaeterStatus === "Patchy rain possible"
    ) {
      setBackgroundImage("bg-cloudy");
    }
  };

  useEffect(() => {
    getWhateverStatus();
    getData();
  }, [data]);

  return (
    <div>
      <div
        className={`${backgroundImage} fixed top-0 left-0 w-screen h-screen -z-50 bg-cover transition-all duration-[1000ms]`}
      ></div>
      <div>
        {isDataActive !== false ? (
          <div className="flex flex-col">
            <DataActive wheatherData={data} />
            <HourlyChart />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Table;
