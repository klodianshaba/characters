import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {charactersReducer, CharactersState} from "./characters.reducer";

export interface State {
  characters: CharactersState
}

export const reducers: ActionReducerMap<State> = {
  characters: charactersReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
