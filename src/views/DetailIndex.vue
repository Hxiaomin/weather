<template>
	<section>
		<header class="bar bar-nav">
	    <router-link class="button button-link button-nav pull-left" tag="a" :to="'/'">
	    	<span class="icon icon-left"></span>
	      返回
	    </router-link>
	    <h1 class='title' v-text="getIndex.tipt"></h1>
	  </header>
	  <div class="index-detail">
		  <h1 v-text="getIndex.title+getIndex.zs"></h1>
		  <h3 v-text="city"></h3>
		  <h3 v-text="weather.temperature"></h3>
		  <h2 v-text="getIndex.des"></h2>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import "../variables.scss";
@import "../assets/reset.scss";

.index-detail{
	margin-top: size(20);
	padding: size(10);
}
</style>

<script>
import Api from '../api/index'
	export default{
		name: "detailIndex",
		computed:{
		 getIndex(){
		  const url=window.location.toString();
		 	const i=url.slice(-1);
		 	const indexs=this.$store.getters.getIndex;
			return indexs[i];
		 },	
		 city(){
      return this.$store.getters.getCurrentCity;
    },
    weather(){
    	return this.$store.getters.getWeatherDate[0];
    }
		}
	}
</script>


