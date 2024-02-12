
import * as actionTypes from './action-type';

import homeScreen from '../screen/home-screen';


export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  payload: error,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});
export const loginUser = (credentials) => {
  return (dispatch) => {
    // Perform login logic here (e.g., API call to authenticate user)
    // If login is successful, dispatch setUser action with user information
    // If login fails, dispatch setError action with an error message
    // Example: Simulating a successful login after a delay (replace with actual API call)
    setTimeout(() => {
      
    }, 1000); // Simulating an asynchronous operation (replace with actual API call)
  };
};

