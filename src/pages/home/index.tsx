import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { fetchArticles } from '../../actions/articles'
import TabBar from '../../components/tabbar';
import { parseTime } from '../../utils/time';

import './index.scss'

type PageStateProps = {
    articles: {
        articles: any[],
        isEnd: Boolean
    }
}

type PageDispatchProps = {
    fetchArticles: (page) => any
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
    fetchArticles(page) {
        return dispatch(fetchArticles(page))
    }
}))
class Home extends Component {

    state = {
        curPage: 1,
        isLoading: false,
        isEnd: false
    }

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-博客'
    }

    jumpDetailPage(id) {
        Taro.navigateTo({
            url: '/pages/article/index?id=' + id
        })
    }

    onScrollToLower() {
        if (this.props.articles.isEnd) {
            return;
        }
        this.setState({
            isLoading: true
        })
        if (this.state.isLoading) {
            return;
        }
        this.props.fetchArticles(this.state.curPage + 1).then(res => {
            this.setState({
                isLoading: false
            })
        })
        this.setState({
            curPage: this.state.curPage + 1
        })
    }

    componentWillMount() {
        this.props.fetchArticles(this.state.curPage)
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
                    onScrollToLower={this.onScrollToLower}
                >
                    {this.props.articles.articles.map((article: any) =>
                        <View className="article-item" key={article._id} onClick={() => this.jumpDetailPage(article._id)}>
                            <View className="article-item-brief">
                                <Text className="time">TIME· {parseTime(article.createdAt)}</Text>
                                <Text className="title">{article.title}</Text>
                                <Text className="meta" space="emsp" decode={true}>评论：{article.commentCount}&nbsp;&nbsp;阅读：{article.viewsCount}&nbsp;&nbsp;分类：{article.category && article.category.name}</Text>
                            </View>
                            <View className="article-item-thumb">
                                <Image className="article-item-thumb-img" src={'https://www.lizc.me' + article.screenshot}></Image>
                            </View>
                        </View>
                    )}
                    {
                        this.state.isLoading && <Text className="loading">正在加载中...</Text>
                    }
                </ScrollView>
                <TabBar name="article-item-thumb-img" router={this.$router} />
            </View>
        )
    }
}

export default Home as ComponentClass<PageOwnProps, PageState>
