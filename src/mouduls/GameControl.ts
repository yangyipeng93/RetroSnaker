import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

//游戏控制器
export default class GameControl {

    snake:Snake;

    food:Food;

    scorePanel:ScorePanel;

    direction:string='';


    constructor() {
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new ScorePanel();

        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init(){
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keydownHandler);
        // 调用run方法，使蛇移动
        this.run();
    }

    keydownHandler=(event:KeyboardEvent)=>{
        this.direction=event.key;
    }

    run=()=>{

        let X=this.snake.X;
        let Y=this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        this.snake.X=X;
        this.snake.Y=Y;

        this.checkEatFood(X,Y);

        setTimeout(this.run,300-(this.scorePanel.level-1)*30);

    }

    checkEatFood=(X:number,Y:number)=>{

        if (this.food.X===X&&this.food.Y===Y){
            // 分数增加
            this.scorePanel.addScore();
            // 食物的位置要进行重置
            this.food.change();
        }


    }



}




