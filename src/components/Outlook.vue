<template>
<div>
  	<div id="line1" class="line-container"></div>
    <ul class="weather-list">
      <li v-for="(item,index) in list">
        <img v-bind:src="item.dayPictureUrl">
        <span v-text="item.day"></span>
        <span v-text="item.weather"></span>
        <span v-text="item.wind"></span>
      </li>
    </ul>
</div>
</template>

<script>
import Line from "./Line.js"

export default {
	name:"outlook",
	data(){
		return {
      		line01:null
		}
	},
  computed:{
    getOption(){
      return this.$store.getters.getOption;
    },
    list(){
      return this.$store.getters.getWeatherDate;
    }
  },
	mounted(){
      console.log(this.getOption);
  		this.line01 = new Line({
            el : document.querySelector("#line1"),
            type : "line",
            subtype : "0",
            data:this.getOption
        });
  	},
}
</script>

<style lang="scss" scoped>

.weather-list{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  li{
    display: inline-block;
    width: 25%;
    text-align: center; 
    img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      opacity: 0.8;
    }
    span{
      display: block;
    }
  }
}

.line-container{
	width:100%;
	height:300px;
  display: -webkit-flex; /* Safari */
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  color:white;
}
</style>