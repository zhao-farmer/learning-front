import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from '../../models/user.model';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);

export const selectCounterLoading = createSelector(
  selectCounterState,
  (state: CounterState) => state.loading
);

export const selectDoubleCount = createSelector(
  selectCount,
  (count) => count * 2
);
