
const initialUserState = {
    user: {},
    error: "",
  }
  
  const userReducer = (state = initialUserState, action) =>{
    switch (action.type) {
        case  "login":
            return {...state, user:{...action.payload}}

        case 'logout':
            return {...state, user:{}}

        case 'error':
            return {...state, error: action.payload}
    
        default:
        return state
    }
  }
  
  export default userReducer;