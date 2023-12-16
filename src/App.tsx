import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@mui/material';
import store from './redux/store';
import DPCalculator from './components/DPCalculator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container component='div' maxWidth='sm'>
        <DPCalculator />
      </Container>
    </Provider>
  );
};

export default App;
