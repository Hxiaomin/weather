import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/index'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		weather:{
			currentCity:null,
			dayWeather:{
				temperature:null,
				dWeather:null,
				pm25:null,
				wind:null
			},
			index:{},
			weatherData:{}
		},
		op:{
    title: {
        text: '',
        subtext: '温度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis:  {
        type: 'category',
        boundaryGap : false,
        data: ['周一','周二','周三','周四']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5],
            markPoint: {
                data: [
                    {type: 'min', name: '最小值'},
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: ''
                            }
                        },
                        type: 'max',
                        name: ''
                    }]
                ]
            }
        }
    ]
}
	},
	mutations:{
		INIT_WEATHER:(state,res)=>{
			const Atemperature=res.results[0].weather_data[0].temperature.slice(0,-1).split(' ~ ');
			const i=parseInt(Atemperature[0])+parseInt(Atemperature[1]);
			const temperature=Math.floor(i/2);


			state.weather.currentCity=res.results[0].currentCity;

			state.weather.dayWeather.temperature=temperature;
			state.weather.dayWeather.dWeather=res.results[0].weather_data[0].weather;
			state.weather.dayWeather.pm25=res.results[0].pm25;
			state.weather.dayWeather.wind=res.results[0].weather_data[0].wind;

			state.weather.index=res.results[0].index;

			state.weather.weatherData=res.results[0].weather_data;

			const allTemperature=state.weather.weatherData;
			allTemperature[0].date=allTemperature[0].date.slice(0,2);  
			const highTemperature=new Array(),lowTemperature = new Array(),weeky=new Array();
			const len=allTemperature.length;
			var x=new Date();
			for(var j=0;j<len;j++){
				const weatherData=allTemperature[j];
				const Atemperature=weatherData.temperature.slice(0,-1).split(' ~ ');
				highTemperature.push(Atemperature[0]);
				lowTemperature.push(Atemperature[1]);
				weeky.push(weatherData.date);
				if(j==0){
					allTemperature[j].day=Api.formatDate(x);
				}			
				else{
					x.setDate(x.getDate() + 1);
					allTemperature[j].day=Api.formatDate(x);
				}
			}

			state.op.xAxis.data=weeky;
			state.op.series[0].data=highTemperature;
			state.op.series[1].data=lowTemperature;
		}
	},
	actions:{
		INIT_WEATHER:({commit,dispatch,state})=>{
			const res = Api.Http.get("http://api.jirengu.com/weather.php").then((res)=>{
				if(res.status=="success"){
					commit("INIT_WEATHER",res);
				}
			})
		}
	},
	getters:{
		getCurrentCity(state){
			return state.weather.currentCity;
		},
		getdayWeather(state){
			return state.weather.dayWeather;
		},
		getIndex(state){
			return state.weather.index;
		},
		getWeatherDate(state){
			return state.weather.weatherData;
		},
		getOption(state){
			return state.op;
		}
	}

})

export default store