import { createFeatureSelector, createSelector } from '@ngrx/store';
import {charactersFeatureKey, CharactersState} from "../reducers/characters.reducer";
import {State} from "../reducers";

export const selectCharacters = (state: State) => state.characters;

export const selectAllCharacters = createSelector(
  selectCharacters,
  (state: CharactersState) => state.characters
);

export const selectCharacterById = (characterId: number ) => createSelector(
  selectCharacters,
  (state: CharactersState) => state.characters.find(character => character.id === characterId)
);
