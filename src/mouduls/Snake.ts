//蛇
export default class Snake {

    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;


    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标（蛇头坐标）
    get X() {
        return this.head.offsetLeft;
    }

    // 获取蛇的Y轴坐标
    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {

        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) {
            return;
        }
        // X的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }

        }

        this.moveBody();
        this.head.style.left = value + 'px';

        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    set Y(value: number) {

        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Y === value) {
            return;
        }
        // Y的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！');
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }

        }

        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';

        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    addBody() {
        // 向element中添加一个div beforeend标签结束之前
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 添加一个蛇身体移动的方法
    moveBody() {

        /*
        *   将后边的身体设置为前边身体的位置
        *       举例子：
        *           第4节 = 第3节的位置
        *           第3节 = 第2节的位置
        *           第2节 = 蛇头的位置
        * */
        // 遍历获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {

            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            console.log(X);

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }

    }

    checkHeadBody() {


        const X = this.X;
        const Y = this.Y;

        for (let i = this.bodies.length - 1; i > 0; i--) {
            if ((this.bodies[i] as HTMLElement).offsetTop === Y && (this.bodies[i] as HTMLElement).offsetLeft === X) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }

        }


    }


}

