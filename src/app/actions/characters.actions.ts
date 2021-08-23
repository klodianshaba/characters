import { createAction, props } from '@ngrx/store';
import {CharacterModel} from "../shared/models/character.model";

export const loadCharacters = createAction(
  '[Character] Load Characters',
  props<{characters:CharacterModel[]}>()
);

export const loadCharactersSuccess = createAction(
  '[Character] Load Characters Success',
  props<{ data: any }>()
);

export const loadCharactersFailure = createAction(
  '[Character] Load Characters Failure',
  props<{ error: any }>()
);
