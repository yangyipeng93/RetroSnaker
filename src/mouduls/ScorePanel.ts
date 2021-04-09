
//记分
export default class ScorePanel {

    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 1) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore() {
        console.log('addScore');
        this.scoreEle.innerText = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerText = ++this.level + '';
        }
    }
}
