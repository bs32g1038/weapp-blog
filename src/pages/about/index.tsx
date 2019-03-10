import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import TabBar from '../../components/tabbar';
import avatarPng from './avatar.png';

import './index.scss'

type PageStateProps = {
    guestbooks: {
        guestbooks: any[]
    }
}

type PageDispatchProps = {
    fetchGuestbooks: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Guestbooks {
    props: IProps;
}

class Guestbooks extends Component {

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-关于'
    }

    render() {
        return (
            <View className='home'>
                <ScrollView
                    className='scrollview'
                    scrollY
                    scrollWithAnimation
                    scrollTop={0}
                    lowerThreshold={20}
                    upperThreshold={20}
                >
                    <View className="about-wrap">
                        <View className="header">
                            <Image className="avatar" src={avatarPng}></Image>
                            <View className="base-info">
                                <Text className="nick-name">冷夜流星</Text>
                                <Text className="aim">求职目标：web前端工程师</Text>
                            </View>
                        </View>
                        <View className="info-item">
                            <Text>地点：</Text>
                            <Text>广东省广州市</Text>
                        </View>
                        <View className="info-item">
                            <Text>学历：</Text>
                            <Text>大学本科</Text>
                        </View>
                        <View className="info-item">
                            <Text>专业：</Text>
                            <Text>计算机科学与技术</Text>
                        </View>
                        <View className="info-item">
                            <Text>邮箱：</Text>
                            <Text>bs32g1038@163.com</Text>
                        </View>
                        <View className="info-item">
                            <Text>github：</Text>
                            <Text>https://github.com/bs32g1038</Text>
                        </View>
                    </View>
                </ScrollView>
                <TabBar className="bold" router={this.$router}></TabBar>
            </View>
        )
    }
}

export default Guestbooks as ComponentClass<PageOwnProps, PageState>