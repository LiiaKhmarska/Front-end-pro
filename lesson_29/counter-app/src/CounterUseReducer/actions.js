import { INCREMENT, DECREMENT } from "./boilerplate";

export function increment(payload = 1) {
  return {
    type: INCREMENT,
    payload,
  };
}

export function decrement(payload = 1) {
  return {
    type: DECREMENT,
    payload,
  };
}
