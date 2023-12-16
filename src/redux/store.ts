import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './inputSlice';
import resultReducer from './resultSlice';

const store = configureStore({
  reducer: {
    input: inputReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
