import echarts from "echarts";
import "echarts/theme/roma";

/**
 * 图表基类
 */
export default class BaseChart {
    constructor(op){
        this.option = op;
        this.init();
        this.build(op.data);
        window.onresize = ()=>this.resize();
    }
    init(){
        this.EC = echarts.init(this.option.el,'roma');
    }
    build(option){
        this.EC.setOption(option);
    }
    resize(){
        this.EC.resize();
    }
}