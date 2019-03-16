import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { fetchLinks } from '../../actions/link'
import TabBar from '../../components/tabbar';

import './index.scss'

type PageStateProps = {
    links: {
        links: any[]
    }
}

type PageDispatchProps = {
    fetchLinks: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Links {
    props: IProps;
}

@connect(({ links }) => ({
    links
}), (dispatch) => ({
    fetchLinks() {
        dispatch(fetchLinks())
    }
}))
class Links extends Component {

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-友链'
    }

    componentDidMount() {
        this.props.fetchLinks()
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
                    {this.props.links.links.map((link: any) =>
                        <View className="link-item" key={link._id}>
                            <View className="header">
                                <Image className="logo" src={link.logo}></Image>
                                <Text className="name">{link.name}</Text>
                            </View>
                            <Text className="description">{link.description}</Text>
                            <Text className="url">地址：{link.url}</Text>
                        </View>
                    )}
                </ScrollView>
                <TabBar className="bold" router={this.$router}></TabBar>
            </View>
        )
    }
}

export default Links as ComponentClass<PageOwnProps, PageState>