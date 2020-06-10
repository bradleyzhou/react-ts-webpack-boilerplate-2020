import { IHelloActionTypes } from '../pages/Hello/store';

interface IEmptyAction {
  type?: string;
  payload?: any;
  meta?: any;
  error?: any;
}

export type IActionTypes = IHelloActionTypes;
