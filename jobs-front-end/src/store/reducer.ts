import moment from "moment";
import { ActionType } from "./actionTypes";
import {Reducer} from 'redux'

const initialState = {
  chart: {
    caption: "Cumulative job views vs. predication",
    yaxisname: "Jobs views",
    syaxisname: "Jobs",
    labeldisplay: "rotate",
    scrollheight: "8",
    drawcrossline: "1",
    theme: "fusion",
    usePlotGradientColor: 0,
  },
  categories: [],
  dataset: [
    {
      color: '#d6d3d3',
      seriesname: "Active Jobs",
      showvalues: "0",
      plottooltext: "Active Jobs: $dataValue",
    },
    {
      color: '#66CC33',
      pointSize: 8,
      lineWidth: 2,
      seriesname: "Cumulative job views",
      renderas: "line",
      showanchors: "1",
      showvalues: "0",
      plottooltext: "Job views: $dataValue",
      anchorBgColor: '#66CC33',
    },
    {
      color: '#00dcff',
      pointSize: 5,
      lineWidth: 3,
      seriesname: "Cumulative predicated job views",
      parentyaxis: "S",
      renderas: "line",
      plottooltext: "Predicated job views $dataValue",
      showvalues: "0",
      dashed: 1,
      divlineisdashed: "1",

    }
  ],
  vtrendlines: [
    {
      line: [
        {
          startvalue: '22 Aug',
          color: '#5D62B5',
          showontop: "0"
        },
        {
          startvalue: '2 Jul',
          color: "#ff0000fa",
          showontop: "0"
        }
      ]
    }
  ],
  loading:false,
};

const getDays = () => {
  const days = [];
  const dateStart = moment();
  const dateEnd = moment().add(30, 'days');

  while (dateEnd.diff(dateStart, 'days') >= 0) {
    days.push({ label: dateStart.format('D MMM') });
    dateStart.add(1, 'days');
  }

  return days;
};

const reducer:Reducer  = (state=initialState, action)=>{
  switch (action.type) {
    case ActionType.loadData:
      return {
        ...state,
        categories: [{ category: getDays() }],
        loading:action.loading
      }
    case ActionType.dataLoaded:
      return {
        ...state,
        dataset: state.dataset.map((dataset:any[], index:number) => ({ ...dataset, data: action.data[index] })),
        loading:action.loading
      }
    case ActionType.failedToLoad:
      return {
        ...state,
        error:action.data
      }

    default:
      return state
      }
}

 export default reducer;