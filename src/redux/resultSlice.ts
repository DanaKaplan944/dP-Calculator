import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ResultState {
  requiredDP: number;
  ventConnectionSize: number;
  drainConnectionSize: number;
}

const initialState: ResultState = {
  requiredDP: 0,
  ventConnectionSize: 0,
  drainConnectionSize: 0,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    calculateResults: (state, action: PayloadAction<InputState>) => {
      // Placeholder calculations for demonstration purposes
      state.requiredDP =
        action.payload.flowRate * 0.5 +
        action.payload.temperature * 0.2 -
        action.payload.pressure * 0.1;
      state.ventConnectionSize = action.payload.flowRate * 0.2;
      state.drainConnectionSize = action.payload.pressure * 0.1;
    },
  },
});

export const { calculateResults } = resultSlice.actions;
export default resultSlice.reducer;
