import {ADD_NUMBER, REDUCE_NUMBER, RESET} from "./actionsType";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}

export function reduceNumber(number) {
  return {
    type: REDUCE_NUMBER,
    number,
  };
}

export function resetNumber() {
  return {
    type: RESET,
  };
}

// export default {addNumber, reduceNumber};
