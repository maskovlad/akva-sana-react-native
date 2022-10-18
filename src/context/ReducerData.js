const ReducerData = (state, action) => {
  switch (action.type) {
    case 'GET_REGIONS':
      // console.log('-----------reducer--------')
      // console.log(action)
      // console.log('-----------reducer--------')
      return {
        ...state,
        regionList: action.payload
      }

    case 'GET_BOTTLE':
      return {
        ...state,
        bottleCost: action.payload
      }
    case 'GET_POMP':
      return {
        ...state,
        pompCost: action.payload
      }

    case 'GET_DELIVERY':
      return {
        ...state,
        delivery: action.payload
      }

    case 'GET_CONTACTS':
      return {
        ...state,
        contacts: action.payload
      }

    default:
      return state
  }
}

export default ReducerData