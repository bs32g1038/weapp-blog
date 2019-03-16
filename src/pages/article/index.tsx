import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, RichText, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { fetchArticle } from '../../actions/article'
import { parseTime } from '../../utils/time';
import parseNodes from '../../utils/html-nodes';

import './index.scss'

type PageStateProps = {
    article: {
        article: {}
    }
}

type PageDispatchProps = {
    fetchArticle: (id) => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Article {
    props: IProps;
}

@connect(({ article }) => ({
    article
}), (dispatch) => ({
    fetchArticle(id) {
        dispatch(fetchArticle(id))
    }
}))
class Article extends Component {

    config: Config = {
        navigationBarTitleText: '李志成的个人网站-文章'
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    componentDidMount() {
        this.props.fetchArticle(this.$router.params.id)
    }

    render() {
        const article: any = this.props.article.article;
        return (
            <View className='article'>
                <Text className="title">{article.title}</Text>
                <View className='meta'>
                    <Text className="meta-item">时间：{parseTime(article.createdAt)}</Text>
                    <Text className="meta-item">浏览：{article.viewsCount}</Text>
                    <Text className="meta-item">分类：{article.category.name}</Text>
                    <Text className="meta-item">评论：{article.commentCount}</Text>
                </View>
                <View className='content-wrap'>
                    <RichText className="content" nodes={parseNodes(article.content || '')}></RichText>
                </View>
                <Text className="end">-----本文完-----</Text>
            </View>
        )
    }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Article as ComponentClass<PageOwnProps, PageState>
