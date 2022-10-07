import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import { chartDays } from '../../../config/data';
import "./Chart.css"
import SelectButton from './SelectButton/SelectButton';
// import faker from 'Faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);




const Graphics = ({historicalData, detailsMD, days,setDays}) => {
  const data = historicalData.prices
  console.log(historicalData)  
  const graphic = data?.map(value => ({ x:value[0], y: value[1].toFixed(2) }))

  const options = {
    responsive: true
  }
  const info = {
      labels: graphic?.map(value => moment(value.x).format("MMM DD YY")),
      datasets:[
        {
          fill: true,
          label: detailsMD.name,
          data: graphic?.map(value => value.y),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
      ]
    }
  // console.log(days)
  return (
    <div>
    <div className="dayButton">
     {chartDays?.map((day) => 
      <SelectButton key={day.value} onClick={() => setDays(day.value)} selected={day.value === days}>
        {day.label}
      </SelectButton>
      )}
    </div>
      <Line options={options} data={info}/>
    </div>
  )
}

export default Graphics