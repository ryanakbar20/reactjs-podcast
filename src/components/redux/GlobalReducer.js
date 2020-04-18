import ActionType from './ActionType.js'

const globalState = {
    totalOrder : 12
}

//Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case ActionType.PLUS_ORDER : return {
            ...state,
            totalOrder : state.totalOrder + 1
        }
    }
    
    if (state.totalOrder > 0) {
        if (action.type == ActionType.MINUS_ORDER) {
            return {
                ...state,
                totalOrder : state.totalOrder - 1
            }
        }
    }
    return state;
}

export default rootReducer;