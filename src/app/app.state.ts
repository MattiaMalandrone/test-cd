import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store"

export const loading = createAction(
    '[APP] loading',
    props<{ isLoading: boolean}>()
)

export interface AppState {
    isLoading: boolean
}

export const initialState: AppState = {
    isLoading: false
}

export const appReducer = createReducer(
    initialState,
    on(loading, (state, action) => ({
        ...state,
        isLoading: action.isLoading
    }))
)

export const appSelector = createFeatureSelector<AppState>("APP")