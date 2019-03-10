import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class TabBar extends Component<any, any> {
    constructor(props) {
        super(props)
    }

    render() {
        const router = this.props.router || { path: '/pages/home/index' };
        let curId = 0;
        if (router.path === '/pages/home/index') {
            curId = 0;
        } else if (router.path === '/pages/guestbook/index') {
            curId = 1;
        } else if (router.path === '/pages/link/index') {
            curId = 2;
        } else if (router.path === '/pages/about/index') {
            curId = 3;
        }
        return (
            <View className="tabs">
                <View className={"tab-item" + (curId === 0 ? ' active' : '')}
                    onClick={() => {
                        Taro.switchTab({
                            url: '/pages/home/index'
                        })
                    }}>
                    <View className="iconfont icon icon-home"></View>
                    <Text>首页</Text>
                </View>
                <View className={"tab-item" + (curId === 1 ? ' active' : '')}
                    onClick={() => {
                        Taro.switchTab({
                            url: '/pages/guestbook/index'
                        })
                    }}>
                    <View className="iconfont icon icon-edit"></View>
                    <Text>留言</Text>
                </View>
                <View className={"tab-item" + (curId === 2 ? ' active' : '')}
                    onClick={() => {
                        Taro.switchTab({
                            url: '/pages/link/index'
                        })
                    }}>
                    <View className="iconfont icon icon-linkedin"></View>
                    <Text>友链</Text>
                </View>
                <View className={"tab-item" + (curId === 3 ? ' active' : '')}
                    onClick={() => {
                        Taro.switchTab({
                            url: '/pages/about/index'
                        })
                    }}>
                    <View className="iconfont icon icon-user"></View>
                    <Text>关于</Text>
                </View>
            </View>
        )
    }
}

export default TabBar;
