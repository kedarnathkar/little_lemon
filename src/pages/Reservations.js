import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Reservation() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tag, setTag] = useState(dayjs('YYYY/MM/DD'));
  const [preferences, setPreferences] = useState("");
  const [value, setValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const today = new Date();
console.log(today)
  return (
    <>
      <div className='app_booking'>
        <div className='app_booking-table'>
          <h3 className='booking-heading'>Book Here</h3>
          <form className='booking-form'>
            <div className='Reserved-Name'>
              <input className='input-grp'
                type="text"
                id='fname'
                placeholder="First-Name"
                name="firstName"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div className='Reserved-Name'>
              <input  className='input-grp'
                type="text"
                id='lname'
                placeholder="Last-Name"
                name="lastName"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className='Reserved-email'>
              <input  className='input-grp'
                type="email"
                id='email'
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='booking-date'>
              <label className='date'>Book here</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    className='date-box'
                    value={tag}
                    onChange={(newValue) => setTag(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className='app_booking-numbers'>
              <label className='app_numbers'>Number of people</label>
              <Box width={300}>
                <Slider
                  defaultValue={5}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={0}
                max={10}
                  value={value}
                  onChange={handleChange}
                />
              </Box>
              <Typography>{value}</Typography>
            </div>
            <div className='app_preferences'>
              <label htmlFor="preferences">Seating preferences</label>
              <br />
              <select
                id="preferences"
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
              >
                <option>None</option>
                <option>Indoors</option>
                <option>Outdoor (Patio)</option>
                <option>Outdoor (Sidewalk)</option>
              </select>
            </div>
            <Link className="action-button" to="/Confirmation">
              Book Table
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reservation;
