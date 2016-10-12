<template>
<article>
  <section class="box1">
		<div class="header-container">
			<div>
			<span class="text-temperature"><span v-text="dayWeather.temperature"></span><sup>o</sup><sub v-text="dayWeather.dWeather"></sub></span>
			<img v-bind:src="WeatherDate.dayPictureUrl">
			</div>
			<span v-text="dayWeather.wind"></span>
			PM2.5~<span v-text="dayWeather.pm25"></span>
		</div>
  </section>
  <section>
  	<h1>生活指数</h1>
  	<ul class="index-container">
  		<router-link
         v-for="(item,index) in indexs"
         :to="'/detailIndex/:'+index"
         tag="a"
         @click="selected(index)">
        <span class="icon icon-home"></span>
  			<span v-text="item.title+item.zs"></span>
    	</router-link>
  	</ul>
  </section>
  <section>
  	<h1>未来四天气温变化</h1>
  	<outlook></outlook>
  </section>
</article>
</template>

<script>
import outlook from "../components/Outlook"

export default {
  name : "weather",
  components:{
  	outlook
  },
  data(){
   	return {
      activeIndex : 0
   	}
  },
  methods:{
      selected(index){
          this.activeIndex = index
      }
  },
  computed:{
  	dayWeather(){
  		return this.$store.getters.getdayWeather;
  	},
  	indexs(){
  		return this.$store.getters.getIndex;
  	},
  	WeatherDate(){
  		return this.$store.getters.getWeatherDate[0];
  	}
  }

}
</script>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../assets/reset.scss";
article{
	padding:size(5);
}
section{
	color:$fcolor;
}
.header-container{
	margin-top: size(100);
	width: 100%;
	overflow: hidden; 
	img{
		opacity: 0.5;
		background-color: $gray;
	}
}
.text-temperature{
	@include font-size(60px);
	display: inline-block;
	height: 100%;
	sup{
		@include font-size(20px);
		top: size(-11);
	}
	sub{
		@include font-size(5px);
		margin-left: size(-4);
	}
}
section{
	h1{
		border-bottom: 1px solid white;
		padding-top: size(5); 
		padding-bottom: size(5); 
		@include font-size(25px);
	}
}
.index-container{
	display: -webkit-flex; /* Safari */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	a{
		@include font-size(15px);
		color:$fcolor;
		width:33.33%;
		text-align: center; 
		flex-grow:4;
		padding-top: size(10);
		padding-bottom: size(10);
		span:nth-child(1){
			display: block;
			@include font-size(30px);
		}
	}
}
</style>