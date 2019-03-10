import {
    FETCH_GUESTBOOKS
} from '../constants/app'
import Taro from '@tarojs/taro'

export const setGuestbooks = (guestbooks) => {
    return {
        type: FETCH_GUESTBOOKS,
        guestbooks
    }
}

// 异步的action
export function fetchGuestbooks() {
    return dispatch => {
        return Taro.request({
            url: 'https://www.lizc.me/api/guestbooks',
            data: {
                foo: 'foo',
                bar: 10
            },
            header: {
                'content-type': 'application/json'
            }
        }).then(res => {
            return dispatch(setGuestbooks(res.data))
        })
    }
}
