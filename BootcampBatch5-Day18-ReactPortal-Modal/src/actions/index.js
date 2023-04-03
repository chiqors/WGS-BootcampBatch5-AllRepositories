export const getUser = () => {
    return dispatch => {
      // Your API call or any other logic to get user data goes here
      const user = { firstName: 'John', lastName: 'Doe' };
      dispatch(setUser(user));
    };
  };
  
  export const setUser = user => {
    return {
      type: 'SET_USER',
      payload: user
    };
  };