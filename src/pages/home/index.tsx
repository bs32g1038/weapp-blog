import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { fetchArticles } from '../../actions/articles'
import TabBar from '../../components/tabbar';

import './index.scss'

type PageStateProps = {
    articles: {
        articles: any[]
    }
}

type PageDispatchProps = {
    fetchArticles: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Home {
    props: IProps;
}

@connect(({ articles }) => ({
    articles
}), (dispatch) => ({
    fetchArticles() {
        dispatch(fetchArticles())
    }
}))
class Home extends Component {

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-博客'
    }

    jumpDetailPage() {
        Taro.navigateTo({
            url: '/pages/guestbook/index'
        })
    }

    componentWillMount() {
        console.log(this.props)
        this.props.fetchArticles()
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
                    {this.props.articles.articles.map((article: any) =>
                        <View className="article-item" key={article._id} onClick={this.jumpDetailPage}>
                            <View className="article-item-brief">
                                <Text className="time">TIME· {article.createdAt}</Text>
                                <Text className="title">{article.title}</Text>
                                <Text className="meta" space="emsp" decode={true}>评论：{article.commentCount}&nbsp;&nbsp;阅读：{article.viewsCount}&nbsp;&nbsp;分类：{article.category && article.category.name}</Text>
                            </View>
                            <View className="article-item-thumb">
                                <Image className="article-item-thumb-img" src={'https://www.lizc.me' + article.screenshot}></Image>
                            </View>
                        </View>
                    )}
                </ScrollView>
                <TabBar name="article-item-thumb-img" router={this.$router} />
            </View>
        )
    }
}

export default Home as ComponentClass<PageOwnProps, PageState>
