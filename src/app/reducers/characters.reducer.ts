import { Action, createReducer, on } from '@ngrx/store';
import {CharacterModel} from "../shared/models/character.model";
import {loadCharacters} from "../actions/characters.actions";

export const charactersFeatureKey = 'characters';

export interface CharactersState {
  characters: CharacterModel[]
}

export const initialState: CharactersState = {
  characters: []
};

export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, (state, {characters}) => ( {characters: characters}))
);

