<template>
	<div>
		<div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page">
            <!-- 标题栏 -->
            <header class="bar bar-nav">                
                <h1 class="title" v-text="city"></h1>
                <a class="icon icon-settings pull-right open-panel"></a>
            </header>

            <!-- 工具栏 -->
            <nav class="bar bar-tab">
            		<router-link class="tab-item external link-outer" activeClass="active"
	                 v-for="(item,index) in list"
	                 v-bind:to="'/index/' + item.link "
	                 tag="a"
	                 @click="selected(index)">
	                <span :class=item.classname></span>
	                <span class="tab-label">{{item.name}}</span>
	            	</router-link>
            </nav>

            <!-- 这里是页面内容区 -->
            <div class="content content-bg">
                <div class="content-none"><router-view></router-view></div>
            </div>
        </div>

        <!-- 其他的单个page内联页（如果有） -->
        <div class="page">...</div>
    </div>

    <!-- popup, panel 等放在这里 -->
    <div class="panel-overlay"></div>
    <!-- right Panel with Reveal effect -->
    <div class="panel panel-right panel-reveal">
        <div class="content-block text-position">
            <p>这是一个侧栏</p>
            <p></p>
            <!-- Click on link with "close-panel" class will close panel -->
            <p><a href="#" class="close-panel">关闭</a></p>
        </div>
    </div>
	</div>
</template>

<script>

const data = [
    { name : "天气",link:"weather",classname:"icon icon-home"},
    { name : "实景",link:"real",classname:"icon icon-star"},
    { name : "周边",link:"periphery",classname:"icon icon-settings"},
    { name : "我",link:"me",classname:"icon icon-me"},
]

export default {
  beforeMount (){
    this.$store.dispatch('INIT_WEATHER');
  },
  data(){
	   return {
	       list : data,
	       activeIndex : 0,
	   }
   },
   computed:{
    city(){
      return this.$store.getters.getCurrentCity;
    }
   },
  methods:{
      selected(index){
          this.activeIndex = index;
      }
  }
}
</script>

<style lang="scss" scope>
@import "../variables.scss";
@import "../assets/reset.scss";

.content-bg{
  background: url(../assets/bg1.jpg) no-repeat top left fixed;  
  background-origin: content-box;
  background-position: center;
  background-size: cover;
}

.text-position{
  text-align: right; 
}

</style>