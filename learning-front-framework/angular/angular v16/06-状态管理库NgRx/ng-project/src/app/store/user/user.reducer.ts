import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, addUser, removeUser } from './user.actions';
import { UserState } from '../../models/user.model';

export const initialState: UserState = {
  list: [],
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    list: users,
    loading: false
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(addUser, (state, { user }) => ({
    ...state,
    list: [...state.list, user]
  })),
  on(removeUser, (state, { id }) => ({
    ...state,
    list: state.list.filter(user => user.id !== id)
  }))
);
