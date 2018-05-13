const initialState = {
    isLoading: false,
    data: {}
}

const profilesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PROFILE_PENDING':
          return {...state, isLoading: true}
      case 'GET_PROFILE_FULFILLED':
          return {...state, data: action.payload.data, isLoading: false}
      default:
          return state
    }
}

export default profilesReducer
