import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { parseTime } from '../../utils/time';
import { fetchGuestbooks } from '../../actions/guestbook'
import TabBar from '../../components/tabbar';

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

@connect(({ guestbooks }) => ({
    guestbooks
}), (dispatch) => ({
    fetchGuestbooks() {
        dispatch(fetchGuestbooks())
    }
}))
class Guestbooks extends Component {

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-留言版'
    }

    componentDidMount() {
        this.props.fetchGuestbooks()
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
                    {this.props.guestbooks.guestbooks.map((guestbook: any) =>
                        <View className="guestbook-item" key={guestbook._id}>
                            <View className="header">
                                <View className="header-left">
                                    <Image className="avatar" src={'https://www.lizc.me' + guestbook.avatar}></Image>
                                    <Text className="nickName">{guestbook.nickName}</Text>
                                </View>
                                <View className="header-right">
                                    <Text className="location">{guestbook.location}</Text>
                                    <Text className="time">{parseTime(guestbook.createdAt)}</Text>
                                </View>
                            </View>
                            <Text className="content">{guestbook.content}</Text>
                            <View className="reply">
                                <Text className="bold">回复：</Text><Text className="reply-content">{guestbook.replyContent || '暂无回复。。。'}</Text>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <TabBar className="bold" router={this.$router}></TabBar>
            </View>
        )
    }
}

export default Guestbooks as ComponentClass<PageOwnProps, PageState>