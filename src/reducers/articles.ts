import { FETCH_ARTICLES } from '../constants/app'

const INITIAL_STATE = {
    articles: []
}

export default function articles(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.articles
            }
        default:
            return state
    }
}
