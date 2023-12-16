import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InputState {
  flowRate: number;
  temperature: number;
  pressure: number;
  flowRateUnit: string;
  temperatureUnit: string;
  pressureUnit: string;
}

const initialState: InputState = {
  flowRate: 0,
  temperature: 0,
  pressure: 0,
  flowRateUnit: 'CFM', // Default units
  temperatureUnit: 'F',
  pressureUnit: 'PSID',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setFlowRate: (state, action: PayloadAction<number>) => {
      state.flowRate = action.payload;
    },
    setTemperature: (state, action: PayloadAction<number>) => {
      state.temperature = action.payload;
    },
    setPressure: (state, action: PayloadAction<number>) => {
      state.pressure = action.payload;
    },
    setFlowRateUnit: (state, action: PayloadAction<string>) => {
      state.flowRateUnit = action.payload;
    },
    setTemperatureUnit: (state, action: PayloadAction<string>) => {
      state.temperatureUnit = action.payload;
    },
    setPressureUnit: (state, action: PayloadAction<string>) => {
      state.pressureUnit = action.payload;
    },
  },
});

export const {
  setFlowRate,
  setTemperature,
  setPressure,
  setFlowRateUnit,
  setTemperatureUnit,
  setPressureUnit,
} = inputSlice.actions;
export default inputSlice.reducer;
