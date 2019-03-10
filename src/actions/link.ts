import {
    FETCH_LINKS
} from '../constants/app'
import Taro from '@tarojs/taro'

export const setLinks = (links) => {
    return {
        type: FETCH_LINKS,
        links
    }
}

// 异步的action
export function fetchLinks() {
    return dispatch => {
        return Taro.request({
            url: 'https://www.lizc.me/api/links',
            data: {
                foo: 'foo',
                bar: 10
            },
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return dispatch(setLinks(res.data))
        })
    }
}
