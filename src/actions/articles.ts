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
export function fetchArticles() {
    return dispatch => {
        return Taro.request({
            url: 'https://www.lizc.me/api/articles',
            data: {
                foo: 'foo',
                bar: 10
            },
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return dispatch(setArticles(res.data))
        })
    }
}
