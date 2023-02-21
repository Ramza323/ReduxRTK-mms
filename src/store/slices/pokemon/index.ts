import { createSlice } from '@reduxjs/toolkit';

export interface SelectedPokemon {
  pokemon: any;
}

const initialState = {
    pokemon: 'Ditto',
} as SelectedPokemon;

const pokemonSlice = createSlice({
  name: 'SelectedPokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state: SelectedPokemon, newState) =>
      (state = newState.payload as SelectedPokemon),
  },
});

export const { setSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
