export const initialState = {user: '', pass: ''};

export function reducer(state, action) {
  switch (action.type) {
    case 'username':
      return {...state, user: action.payload};
    case 'password':
      return {...state, pass: action.payload};
    default:
      return {...state};
  }
}
