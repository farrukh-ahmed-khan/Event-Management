import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
} from 'recharts';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react';
import '../BarChart/barchart.css';

const data = [
  { name: 'Jun', Total: 200 },
  { name: 'Jul', Total: 500 },
  { name: 'Aug', Total: 1000 },
  { name: 'Sep', Total: 2000 },
  { name: 'Oct', Total: 1200 },
  { name: 'Nov', Total: 1800 },
];
const Barchart = () => {
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
    <div className="BarChart">
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
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              // strokeDasharray="3 3"
              className="chartGrid"
              vertical={false}
            />
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
              axisLine={false}
              stroke="#BBBBBB"
              style={{
                fontFamily: 'garamond',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '27px',
                color: '#BBBBBB',
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total" fill="#EFECCE" barSize={55} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
