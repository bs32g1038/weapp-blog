import { FETCH_LINKS } from '../constants/app'

const INITIAL_STATE = {
    links: []
}

export default function links(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LINKS:
            return {
                ...state,
                links: action.links
            }
        default:
            return state
    }
}
