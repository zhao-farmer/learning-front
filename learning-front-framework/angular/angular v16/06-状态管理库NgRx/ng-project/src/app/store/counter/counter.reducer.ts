import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, add, setLoading } from './counter.actions';
import { CounterState } from '../../models/user.model';

export const initialState: CounterState = {
  count: 0,
  loading: false
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count - 1
  })),
  on(reset, (state) => ({
    ...state,
    count: 0
  })),
  on(add, (state, { value }) => ({
    ...state,
    count: state.count + value
  })),
  on(setLoading, (state, { loading }) => ({
    ...state,
    loading
  }))
);
