import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFlowRate,
  setTemperature,
  setPressure,
  setFlowRateUnit,
  setTemperatureUnit,
  setPressureUnit,
} from '../redux/inputSlice';
import { calculateResults } from '../redux/resultSlice';
import { RootState } from '../redux/store';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const DPCalculator: React.FC = () => {
  const dispatch = useDispatch();
  const {
    flowRate,
    temperature,
    pressure,
    flowRateUnit,
    temperatureUnit,
    pressureUnit,
  } = useSelector((state: RootState) => state.input);
  const { requiredDP, ventConnectionSize, drainConnectionSize } = useSelector(
    (state: RootState) => state.result
  );

  const handleFlowRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFlowRate(Number(event.target.value)));
  };

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setTemperature(Number(event.target.value)));
  };

  const handlePressureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPressure(Number(event.target.value)));
  };

  const handleFlowRateUnitChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(setFlowRateUnit(event.target.value as string));
  };

  const handleTemperatureUnitChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(setTemperatureUnit(event.target.value as string));
  };

  const handlePressureUnitChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    dispatch(setPressureUnit(event.target.value as string));
  };

  const calculate = () => {
    dispatch(
      calculateResults({
        flowRate,
        temperature,
        pressure,
        flowRateUnit,
        temperatureUnit,
        pressureUnit,
      })
    );
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <div>
        <h2>DP Calculator</h2>
        <div>
          <TextField
            label={`Flow Rate (${flowRateUnit})`}
            type='number'
            value={flowRate}
            onChange={handleFlowRateChange}
          />
          <Select
            labelId='flow-rate-unit-select-label'
            id='flow-rate-unit-select'
            value={flowRateUnit}
            onChange={handleFlowRateUnitChange}
          >
            <MenuItem value='CFM'>CFM</MenuItem>
            <MenuItem value='GPM'>GPM</MenuItem>
            {/* Add more flow rate units as needed */}
          </Select>
        </div>
        <div>
          <TextField
            label={`Temperature (${
              temperatureUnit === 'F' ? 'Fahrenheit' : 'Celsius'
            })`}
            type='number'
            value={temperature}
            onChange={handleTemperatureChange}
          />
          <Select
            labelId='temperature-unit-select-label'
            id='temperature-unit-select'
            value={temperatureUnit}
            onChange={handleTemperatureUnitChange}
          >
            <MenuItem value='F'>Fahrenheit</MenuItem>
            <MenuItem value='C'>Celsius</MenuItem>
            {/* Add more temperature units as needed */}
          </Select>
        </div>
        <div>
          <TextField
            label={`Pressure (${pressureUnit})`}
            type='number'
            value={pressure}
            onChange={handlePressureChange}
          />
          <Select
            labelId='pressure-unit-select-label'
            id='pressure-unit-select'
            value={pressureUnit}
            onChange={handlePressureUnitChange}
          >
            <MenuItem value='PSID'>PSID</MenuItem>
            <MenuItem value='Bar'>Bar</MenuItem>
            {/* Add more pressure units as needed */}
          </Select>
        </div>
        <Button variant='contained' onClick={calculate}>
          Calculate
        </Button>
        {requiredDP > 0 && (
          <div>
            <p>Required dP: {requiredDP}</p>
            <p>Vent Connection Size: {ventConnectionSize}</p>
            <p>Drain Connection Size: {drainConnectionSize}</p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default DPCalculator;
