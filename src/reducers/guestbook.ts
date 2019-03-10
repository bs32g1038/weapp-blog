import { FETCH_GUESTBOOKS } from '../constants/app'

const INITIAL_STATE = {
    guestbooks: []
}

export default function guestbooks(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_GUESTBOOKS:
            return {
                ...state,
                guestbooks: action.guestbooks
            }
        default:
            return state
    }
}
