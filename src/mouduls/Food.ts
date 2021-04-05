
//食物
export default class Food {

    element:HTMLElement;

    constructor() {
        this.element=document.getElementById('food')!;
    }

    get X(){
        return this.element.offsetLeft;
    }

    get Y(){
        return this.element.offsetTop;
    }


    // 修改食物的位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0 最大是290
        // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10

        const top=Math.round(Math.random()*29)*10;
        const left=Math.round(Math.random()*29)*10;

        this.element.style.top=top+"px";
        this.element.style.left=left+"px";


    }

}
