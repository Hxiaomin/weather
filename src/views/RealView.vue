<template>
    <div class="real-container">
    	<div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
      	<div class="list-block">
          <ul class="list-container">
          </ul>
        </div>
        <!-- 加载提示符 -->
        <div class="infinite-scroll-preloader">
          <div class="preloader"></div>
        </div>
	    </div>
    </div>
</template>

<script>
export default {
    name : "real",
    mounted(){
    	var loading = false;
      // 最多可加载的条目
      var maxItems = 100;

      // 每次加载添加多少条目
      var itemsPerLoad = 20;
      console.log("111");

      function addItems(number, lastIndex) {
              // 生成新条目的HTML
              var html = '';
              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                  html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item ' + i + '</div></div></li>';
              }
              // 添加新条目
              $('.infinite-scroll-bottom .list-container').append(html);

          }
          //预先加载20条
      addItems(itemsPerLoad, 0);

      // 上次加载的序号

      var lastIndex = 20;

      // 注册'infinite'事件处理函数
      $(document).on('infinite', '.infinite-scroll-bottom',function() {

          // 如果正在加载，则退出
          if (loading) return;

          // 设置flag
          loading = true;

          // 模拟1s的加载过程
          setTimeout(function() {
              // 重置加载flag
              loading = false;

              if (lastIndex >= maxItems) {
                  // 加载完毕，则注销无限加载事件，以防不必要的加载
                  $.detachInfiniteScroll($('.infinite-scroll'));
                  // 删除加载提示符
                  $('.infinite-scroll-preloader').remove();
                  return;
              }

              // 添加新条目
              addItems(itemsPerLoad, lastIndex);
              // 更新最后加载的序号
              lastIndex = $('.list-container li').length;
              //容器发生改变,如果是js滚动，需要刷新滚动
              $.refreshScroller();
          }, 1000);
      });
    }
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../assets/reset.scss";

.real-container{
	background-color: $mebg;
	height: auto;
}
</style>

server {
	    listen 4321;
	    server_name localhost;

	    location / {
            root D:\\web\\eoapi; 
        	index index.html index.htm;
        }
	}
server {
        listen       8081;      
        server_name  localhost;  
        root     /root/web/test;   
        client_max_body_size 2M;
        index   index.html ;                        
        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
        expires 15d;
        }
        location ~ .*\.(js|css)?$
        {
        expires 20m;
        }

}