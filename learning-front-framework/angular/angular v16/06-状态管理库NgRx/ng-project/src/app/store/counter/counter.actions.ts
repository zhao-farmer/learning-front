import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const add = createAction(
    '[Counter] Add',
    props<{ value: number }>()
);
export const setLoading = createAction(
    '[Counter] Set Loading',
    props<{ loading: boolean }>()
);
