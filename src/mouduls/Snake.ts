
//蛇
export default class Snake {

    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;


    constructor() {
        this.element=document.getElementById('snake')!;
        this.head=document.querySelector('#snake>div') as HTMLElement;
        this.bodies=this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标（蛇头坐标）
    get X(){
        return this.head.offsetLeft;
    }

    // 获取蛇的Y轴坐标
    get Y(){
        return this.head.offsetTop;
    }

    set X(value:number){
        this.head.style.left=value+'px';
    }

    set Y(value:number){
        this.head.style.top=value+'px';
    }


}

