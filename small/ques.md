## 脱坑指南
1. 引入axios,需要解决axios在小程序中错误问题,详情参考
https://blog.csdn.net/sinat_33255495/article/details/106856039
2. 使用ivew-weapp ui组件库,底部导航设置ui带的,不用原生的,跳转通过判断chang事件,不需要传参,通过e.target.key判断
3. 搭建轮播图时使用微信原生组件swiper组件,点击轮播图跳转,@click事件绑定到图片元素上
4. mpvue 可以使用vue-router,但需要引入插件做配置,整合path资源,我使用小程序自带路由跳转
5. 使用vuex 获取用户状态,注意vue与vuex的版本问题 
        vue3 vuex4  vue2.x vuex3.x
6. mpvue 如何修改iview组件的默认样式
 	https://blog.csdn.net/piaojiancong/article/details/104836503/
7. [渲染层网络层错误] pages/card/card.wxss 中的本地资源图片无法通过 WXSS 获取-解决办法
https://blog.csdn.net/qq_45829293/article/details/117259768
8. 小程序实现数据缓存
  ○ 小程序原生（存储时间长）
  ○ vuex
9. 小程序接入云开发
10. mpvue实现下拉刷新
https://www.cnblogs.com/tanyiqu/p/14574813.html
11. 实现跳转到其他小程序
12. mpvue 如何关注公众号
利用客服消息,通关键词回复或运营人员人工发送图片消息，向用户推送公众号的二维码。用户就可以      在客服消息中，通过识别图片二维码，跳转到关注公众号页面。从而，完成小程序内关注公众号
13. mpvue如何调取订阅号的文章
14. 业务域名与服务器域名的区别
15. 小程序的token的作用是什么？
16. 页面跳转
      微信小程序navigateTo:fail webviewcount limitexceed问题解决
17. 小程序报错:Unexpected end of JSON input 问题
https://blog.csdn.net/QQ_Empire/article/details/104767605/
18. 订阅号文章列表显示问题（Towxml 3.0来了，让小程序完美支持Markdown）
https://blog.csdn.net/haitaoxiaodian/article/details/91049730
https://blog.csdn.net/weixin_46034375/article/details/109175673
19. 微信小程序 https://api.weixin.qq.com 不在以下 request 合法域名列表中
https://blog.csdn.net/qq_29384639/article/details/96965671
20. 微信小程序之扫普通链接二维码打开小程序实现动态传递参数及踩坑总结
https://blog.csdn.net/XH_jing/article/details/112608844?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1.pc_relevant_baidujshouduan&spm=1001.2101.3001.4242
21. 小程序场景值的运用
22. 关于小程序获取手机号第一次失败，第二次成功的解决方案
https://blog.csdn.net/hl18730262380/article/details/89671346
23. 小程序怎么自动关注公众号？
24. 长按识别二维码
微信小程序里长按识别二维码的实现过程：https://www.jb51.net/article/207500.htm

25. 微信小程序wx.request POST请求，请求参数需要form-data形式
https://blog.csdn.net/weixin_44777433/article/details/103277495
26. 小程序引入md5
https://blog.csdn.net/XU441520/article/details/109674334
27. 小程序加载大量照片
28. 小程序骨架屏
29. 小程序打开另一个小程序
30. 小程序打开页面空白的原因呢
可能是你的代码报错没有解决就上传了。虽然开发版没问题 但是上线以后是空白
31. 自定义导航栏
mpvue微信小程序自定义导航栏NavBar组件封装
https://blog.csdn.net/cwin8951/article/details/114373512
32. 重启redis
https://blog.csdn.net/qq_30347133/article/details/114768790
33. 自定义导航栏
  "navigationStyle": "custom",
34. 引入位置微信小程序定位问题
https://blog.csdn.net/qq_42817227/article/details/100537912

35. Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
https://blog.csdn.net/wron_path/article/details/104111423