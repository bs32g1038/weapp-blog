# 博客微信小程序

### 概述

撸了一个博客微信程序，体验了一把小程序开发，很强大。整个小程序由taro生成微信原生代码，由于个人类型无法使用webview，无法直接内嵌网页，所以去除了文章详情，后续再添加。

### 框架使用

使用的是Taro框架，他是一套遵循 React 语法规范的多端统一开发框架

文档地址：[https://taro.aotu.io/](https://taro.aotu.io/)

### 功能模块

由于该小程序只用作展示，所以并没有实现很复杂的功能，用时也就一天左右。主要模块有：首页， 留言，友链，关于这几个页面。由于在开发体验上，基本和react一致，所以非常快的能够上手。

### 注意事项记录

1、要想使用第三方字体图标库，必须把字体文件内容转为base64存放在css文件中。这样小程序才能正确识别出来。字体转base64的网站地址：[https://transfonter.org/](https://transfonter.org/)

2、在实现自定义底部导航栏tabbar时，如果使用Taro.navigateTo(object)来切换。会出现左滑的动画效果，会连带着底部导航栏一起往左动，体验上不是很好。可以利用taro.switchTab(object)来进行导航，这个不会产生切换效果。更像是tabbar。由于使用了switchTab，那么必须配置tabbar list。所以会产生原生的tabbar。我们可以通过小程序提供的api Taro.hideTabBar(object)函数来隐藏tabbar。

3、原生tabbar够用的时候，使用原生的就好了。要想实现更复杂的显示，才通过自定义实现。比如权限控制某个tab显示。

4、scrollView的高度是可以通过calc计算的。如：calc(100% - 100rpx)

5、尽量使用rpx单位进行开发，这个单位是可以自适应的。

6、个人类型和海外类型不支持webview。在开发过程中遇到，不必惊慌，就是这个样。

### 小程序体验码

![博客微信程序](https://www.lizc.me/static/upload/2019//18323072d792c88893cec724d9e59aaa.jpg)

### 首页展示：

![首页展示](https://www.lizc.me/static/upload/2019//e52045fcb75779edfd833214e09a8a78.jpg)
