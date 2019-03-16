import { FETCH_ARTICLES } from '../constants/app'

const INITIAL_STATE = {
    articles: [],
    isEnd: false
}

export default function articles(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            let isEnd = false;
            if (action.articles.length <= 0) {
                isEnd = true;
            }
            return {
                ...state,
                articles:state.articles.concat(action.articles),
                isEnd
            }
        default:
            return state
    }
}
