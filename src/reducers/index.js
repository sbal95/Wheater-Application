import * as actionTypes from "../actions/ActionTypes";

const initialState = {
  data: {
    location: {
      name: "location",
    },
    forecast: {
      forecastday: [
        {
          date: "",
          day: {
            condition: {
              icon: "",
            },
            avgtemp_c: "",
            maxwind_kph: "",
            daily_chance_of_rain: "",
          },
        },
      ],
    },
  },
  selectedCity: `istanbul`,
  hourData: [14.1, 14.2, 13.2, 13.5],
  isDataActive: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      const forData = state;
      forData.data = action.payload;
      return forData;
    case actionTypes.SET_CITY:
      const forCityChange = state;
      forCityChange.selectedCity = action.payload;
      console.log(action.payload);
      return forCityChange;
    case actionTypes.SET_HOUR_DATA:
      const forHourData = state;
      forHourData.hourData = action.payload;
      return forHourData;
    default:
      return state;
  }
};
