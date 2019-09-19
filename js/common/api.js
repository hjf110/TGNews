
// 正式环境
// var baseURL = "http://47.99.174.52:8083/kjcy/";


// //测试环境
var baseURL = "http://dd.ubertech.cn:8080/";
// var baseURL_file = "http://dd.ubertech.cn:8082/";


//接口地址和全局变量和log管理
var Api = {
    corpId:"dingdbea061182c4f66c35c2f4657eb6378f",// 企业id
    Log:true,//全局console的开启和关闭
    Login:{
        ing:baseURL +"login/ding"//登录接口
    },
    Article:{
        list:baseURL+"showBlog/getArticleDirective",//文章列表
        info:baseURL+"showBlog/getArticleContent",//获取文章详情
        CommentList:baseURL+"showBlog/articleCommentList",//获取评论列表
        saveComment:baseURL+"showBlog/addComment",//保存评论
        like:baseURL+"showBlog/articleIns",//点赞和取消
        likeList:baseURL+"showBlog/getLikeList",//获取点赞列表用于判断用户是否点赞了
    }
};


window.Api = Api;

//全局console管理
console.log = (function (oriLogFunc) {
    return function () {
        //判断配置文件是否开启日志调试
        if (Api.Log) {
            try{
                oriLogFunc.call(console, ...arguments);
            }catch(e){
                console.error('console.log error', e);
            }
        }
    }
})(console.log);


// layui.config({
//     base: '../js/layuiadmin/' //静态资源所在路径
// }).extend({
//     notice: 'notice'//第三方通知插件
// });
