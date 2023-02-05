import React from 'react';
import './chart.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const data = [
  { name: 'Jun', Total: 200 },
  { name: 'Jul', Total: 500 },
  { name: 'Aug', Total: 1000 },
  { name: 'Sep', Total: 2000 },
  { name: 'Oct', Total: 1200 },
  { name: 'Nov', Total: 1800 },
];

const Chart = () => {
  const [time, setTime] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="Chart">
      <div className="HeadingSelect">
        <div className="HeadingPortion">
          <span className="SalesHeading">Revenue Report</span>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 158, backgroundColor: 'black' }}>
            <InputLabel
              id="demo-controlled-open-select-label"
              sx={{
                color: 'white',
                fontFamily: 'garamond',
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '25px',
              }}
            >
              Select Time
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={time}
              label="Time"
              onChange={handleChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Week'}>Week</MenuItem>
              <MenuItem value={'Month'}>Month</MenuItem>
              <MenuItem value={'Year'}>Year</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EFECCE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FCFCFC" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              stroke="#BBBBBB"
              style={{
                fontFamily: 'garamond',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '27px',
              }}
              
            />
            <YAxis
              // ticks={[200, 500, 1000, 2000]} 
              domain={[200, 2000]}
              axisLine={false}
              stroke="#BBBBBB"
              dx={-8}
              // dy={-8}
              style={{
                fontFamily: 'garamond',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '27px',
                color: '#BBBBBB',
              }}
            />
            <CartesianGrid vertical={false} className="chartGrid" />
            <Tooltip />
            <Area
              dataKey="Total"
              stroke="#EFECCE"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
