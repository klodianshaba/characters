import { createFeatureSelector, createSelector } from '@ngrx/store';

import {charactersFeatureKey, CharactersState} from "../reducers/characters.reducer";
import {CharacterInterface, CharacterModel} from "../shared/models/character.model";
import {State} from "../reducers";

export const selectCharacters = (state: State) => state.characters;

export const selectAllCharacters = createSelector(
  selectCharacters,
  (state: CharactersState) => state.characters
);
