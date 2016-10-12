import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from '../views/Index'
import WeatherView from '../views/WeatherView'
import RealView from '../views/RealView'
import PeripheryView from "../views/PeripheryView"
import MeView from "../views/MeView"
import DetailIndex from "../views/DetailIndex"

export default new Router({
    mode: 'history',
    routes: [
        { path: '/index', name:"index",component:Index,
        	children: [
        		{path:'weather',name:"weather",component:WeatherView},
        		{path:'real',name:"real",component:RealView},
        		{path:'periphery',name:"periphery",component:PeripheryView},
        		{path:'me',name:"me",component:MeView}
        	]
        },
        {
        	path:'/detailIndex/:id',name:"detailIndex",component:DetailIndex
        },
        {
        	path:'*',redirect:'/index/weather'
        }
    ]
})



