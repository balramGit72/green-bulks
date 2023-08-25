// actions.js

// Define your action types as constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_TOKEN = 'SET_TOKEN';

// Define your action creators
export const increment = (data) => ({
  type: INCREMENT,
  data,
});

export const decrement = () => ({
  type: DECREMENT,
});


export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});