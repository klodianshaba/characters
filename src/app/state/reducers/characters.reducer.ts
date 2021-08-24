import { Action, createReducer, on } from '@ngrx/store';
import {CharacterModel} from "../../shared/models/character.model";
import {deleteCharacter, editCharacter, loadCharacters} from "../actions/characters.actions";

export const charactersFeatureKey = 'characters';

export interface CharactersState {
  characters: CharacterModel[]
}

export const initialState: CharactersState = {
  characters: []
};

export const charactersReducer = createReducer(
  initialState,
  on(loadCharacters, (state, {characters}) => ( {characters: characters})),
  on(deleteCharacter, (state, {id} ) => ({characters: state.characters.filter(character => character.id != id)})),
  on(editCharacter, (state, {character} ) => ({characters: state.characters.map( item => {
    if(item.id == character.id){ return {...item, ...character}}
    return item;
  })})),
);

