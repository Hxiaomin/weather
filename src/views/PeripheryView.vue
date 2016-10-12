<template>
<div class="periphery-container">
  <div class="card demo-card-header-pic list-container" v-for="(item,index) in list">
  	<div class="card-header header-color">
      <a v-bind:href="item.url" class="link">{{item.title}}</a>
      <a v-bind:href="item.url" class="link">更多 ></a>
    </div>
    <div valign="bottom" class="card-header color-white no-border no-padding">
      <img class='card-cover' v-bind:src="item.bgurl" alt="">
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <p class="color-gray">{{item.time}}</p>
        <p>{{item.content}}</p>
      </div>
    </div>
	</div>
</div>
</template>

<script>

const data=[
	{title:"周末游记",time:"发表于 2015/01/15",content:"此处是内容1",url:"#",bgurl:"//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"},
	{title:"精选游记",time:"发表于 2015/01/15",content:"此处是内容2",url:"#",bgurl:"//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"},
	{title:"本地攻略",time:"发表于 2015/01/15",content:"此处是内容3",url:"#",bgurl:"//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"},
	{title:"周末游记",time:"发表于 2015/01/15",content:"此处是内容4",url:"#",bgurl:"//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg"}
]

export default {
    name : "periphery",
    data(){
    	return {
    		list:data
    	}
    }
}
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../assets/reset.scss";

.periphery-container{
	padding: size(5);
	margin-bottom: size(5);
}
.list-container{
	padding: size(5);
	padding-top: 0;
	margin-bottom: size(5);
}
.header-color{
	a{
		color:black;
	}
	
}

</style>