import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Counter } from './Counter';
import counterReducer from '@/store/slices/counterSlice';

// Helper to create a fresh store for each test
const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('Counter Component', () => {
  it('renders with initial value of 0', () => {
    const store = createTestStore();
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    expect(getByText('0')).toBeInTheDocument();
  });

  it('increments counter when plus button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    const buttons = getAllByRole('button');
    const incrementButton = buttons[1]; // Plus button
    await user.click(incrementButton);
    
    expect(getByText('1')).toBeInTheDocument();
  });

  it('decrements counter when minus button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    const buttons = getAllByRole('button');
    const decrementButton = buttons[0]; // Minus button
    await user.click(decrementButton);
    
    expect(getByText('-1')).toBeInTheDocument();
  });

  it('resets counter when reset button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    // Increment first
    const buttons = getAllByRole('button');
    const incrementButton = buttons[1];
    await user.click(incrementButton);
    await user.click(incrementButton);
    
    // Then reset
    const resetButton = getByText('Reset');
    await user.click(resetButton);
    
    expect(getByText('0')).toBeInTheDocument();
  });
});
