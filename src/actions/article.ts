import {
    FETCH_ARTICLE
} from '../constants/app'
import Taro from '@tarojs/taro'

export const setArticle = (article) => {
    return {
        type: FETCH_ARTICLE,
        article
    }
}

// 异步的action
export function fetchArticle(id) {
    return dispatch => {
        return Taro.request({
            url: 'https://www.lizc.me/api/articles/' + id + '?fields=-summary&category.name&md=true',
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return dispatch(setArticle(res.data))
        })
    }
}
