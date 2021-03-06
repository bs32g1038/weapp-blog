import {
    FETCH_ARTICLES
} from '../constants/app'
import Taro from '@tarojs/taro'

export const setArticles = (articles) => {
    return {
        type: FETCH_ARTICLES,
        articles
    }
}

// 异步的action
export function fetchArticles(page = 1) {
    return dispatch => {
        return Taro.request({
            url: 'https://www.lizc.me/api/articles?page=' + page,
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return dispatch(setArticles(res.data))
        })
    }
}
