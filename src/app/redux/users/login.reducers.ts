import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/core/model/user.interface';
import { initUser, loginUserFailure } from './login.action';

export interface UsersState {
    currentUser: User;
    errorMessage: string | null;
}

export const initialState: UsersState = {
    currentUser: JSON.parse(sessionStorage.getItem('utente'))as User,
    errorMessage: null
};

const usersReducerFun = createReducer(
    initialState,
    on(initUser, (state, { user }) => ({ ...state, currentUser: user })),
    on(loginUserFailure, (state, {error}) => ({...state, user: null, errorMessage: error}))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
    return usersReducerFun(state, action);
}