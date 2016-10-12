import BaseChart from "./BaseChart"

export default class Line extends BaseChart{
    constructor(op){
        super(op);
        this.option = op;
        this.create();
    }
    create(){
        this.build(this.option);
    }
}