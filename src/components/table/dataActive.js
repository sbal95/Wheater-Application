import React from "react";

const DataActive = ({ wheatherData }) => {
  return (
    <div className="flex flex-col items-center w-screen h-full text-gray-300 bg-opacity-75 bg-slate-800 container mx-auto justify-center gap-y-3 px-5 py-3">
      <div className="text-xl font-bold  w-full text-center p-2 container mx-auto rounded-lg border-2 border-slate-500">
        City : {wheatherData.location.name}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6  container mx-auto">
        {wheatherData.forecast.forecastday.map((item, index) => (
          <div
            className="rounded-xl flex flex-col justify-start items-center"
            key={index}
          >
            <div className="text-lg rounded-t-xl  font-semibold border-t border-x border-slate-500  w-full text-center p-2 flex justify-center items-center gap-3">
              {item.date}
            </div>
            <div className="text-lg font-semibold border border-slate-500  w-full text-center p-2 flex gap-3 items-center justify-center">
              {item.day.condition.text}
              <img
                alt="Waiting"
                src={item.day.condition.icon}
                width="55px"
                height="55px"
              />
            </div>
            <div className="text-lg font-semibold border-x border-b border-slate-500  w-full text-center p-2 flex justify-center items-center gap-3">
              <div>Average Tempeture : </div>
              {item.day.avgtemp_c}
            </div>
            <div className="text-lg rounded-b-xl font-semibold border-b border-x border-slate-500  w-full text-center p-2 flex justify-center items-center gap-3">
              <div>Rain : </div>
              {item.day.daily_chance_of_rain}
            </div>
          </div>
        ))}
      </div>
      <div className="text-xl font-bold  w-full text-center p-2 container mx-auto rounded-lg border-2 border-slate-500 uppercase">
        hourly
      </div>
    </div>
  );
};

export default DataActive;
