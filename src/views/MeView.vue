<template>
	<div>
		<div class="content me-container">
			<div class="list-block list-first">
		    <ul class="signup-container">
		      <li class="item-content item-link">
		        <div class="item-media"><i class="icon icon-f7"></i></div>
		        <div class="item-inner">
		          <div class="item-title">登录账号</div>
		        </div>
		      </li>
		      <p><a href="#" class="button">Usual Button 1</a></p>
		    </ul>
		  </div>
		  <div class="list-block">
		    <ul>
		      <li class="item-content item-link" v-for="(item,index) in dataList">
		        <div class="item-media"><i class="icon icon-f7"></i></div>
		        <div class="item-inner">
		          <div class="item-title">{{item.name}}</div>
		        </div>
		      </li>
		    </ul>
		  </div>
		</div>
	</div>
</template>

<script>
const data = [
    { name : "天气主题"},
    { name : "最美应用"},
    { name : "历史天气"},
    { name : "大事件"},
    { name :"定时播报"},
    { name :"设置"},
]
export default {
    name : "me",
    data(){
	   	return {
	      dataList:data
	   	}
	  },
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../assets/reset.scss";

.me-container{
	background-color: $mebg;
	height: auto;
}
.signup-container{
	-moz-box-shadow:2px 2px 10px gray;
  -webkit-box-shadow:2px 2px 10px gray;
  box-shadow:2px 2px 10px gray;
}
.list-first{
	margin-bottom: size(10);
}
</style>
