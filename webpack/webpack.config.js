/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-03-11 21:55:28
 * @LastEditTime: 2020-03-12 09:47:07
 */
const path = require("path");
modules.export = {
    entry:{main:path.resolve(__dirname,'an/a.js')},
    // module:{
    //     rules:{
    //         {
                
    //         }
    //     }
    // },
    output:{
        publicPath:'',
        path:path.resolve(__dirname,'dist'),
        filename:'bundls.js'
    },
    plugins: [],
    //开发服务器
    devServer: {
        contentBase:'./dist',
        open:true,
        port:8888
    }
}