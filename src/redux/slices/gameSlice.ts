import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line
interface GameState {
  // `object`
}

const initialState: GameState = {
  // Your initial state
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerTurn: (
      // eslint-disable-next-line
      state: GameState, 
      // eslint-disable-next-line
      action) => {
      // `unknown`, `object`
    },
  },
});

export const { setPlayerTurn } = gameSlice.actions;
export default gameSlice.reducer;
