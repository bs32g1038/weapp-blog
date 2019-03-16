import { FETCH_ARTICLE } from '../constants/app'

const INITIAL_STATE = {
    article: {}
}

export default function article(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.article
            }
        default:
            return state
    }
}
