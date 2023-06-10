import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCity } from "../../actions";
import { cityData } from "./cityData";

const CitySelector = () => {
  const dispatch = useDispatch();

  const [filteredList, setFilteredList] = new useState(cityData);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...cityData];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <div className="container mx-auto flex-row gap-5 bg-opacity-75 bg-slate-800 text-white mt-3 rounded-t-xl">
      <input
        className="px-5 p-3 flex mx-auto w-full bg-slate-800 bg-opacity-75 text-white rounded-t-xl"
        type="text"
        name="name"
        onChange={filterBySearch}
        placeholder="Search City"
      />
      <div className="grid grid-cols-10 px-4 container mx-auto overflow-y-scroll justify-items-start items-start scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-900 h-52">
        {filteredList.map((city) => (
          <button
            className="p-4 hover:scale-125 transition-all duration-500  hover:text-[#00FFFF]"
            onClick={() => {
              dispatch(setCity(city));
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CitySelector;
