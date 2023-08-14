/*
 * @Author: gong wei
 * @Date: 2023-08-14 10:33:27
 * @LastEditors: gong wei
 * @LastEditTime: 2023-08-14 10:35:00
 * @FilePath: /hexo-gavin/source/js/title.js
 * @Description: 
 */
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});