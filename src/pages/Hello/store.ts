import { produce } from 'immer';
import { IActionTypes } from '../../store/actions';

export const HELLO = 'app/hello/hello';

export interface IState {
  hello: string;
}

const initialState: IState = {
  hello: '',
};

// Reducer
export function reducer(state: IState = initialState, action: IActionTypes) {
  switch (action.type) {
    case HELLO:
      return produce(state, (draft: IState) => {
        draft.hello = action.payload;
      });
    default:
      return state;
  }
}

export interface IHelloAction {
  type: typeof HELLO;
  payload: string;
}

export type IHelloActionTypes = IHelloAction;

// Action Creators
export function greet(name: string = ''): IHelloAction {
  return {
    type: HELLO,
    payload: name,
  };
}
