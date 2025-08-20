export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AppState {
  counter: CounterState;
  users: UserState;
}

export interface CounterState {
  count: number;
  loading: boolean;
}

export interface UserState {
  list: User[];
  loading: boolean;
  error: string | null;
}
