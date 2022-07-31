// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button) playButton: cc.Button = null;
    @property(cc.Button) achievementButton: cc.Button = null;
    @property(cc.Button) instructionButton: cc.Button = null;

    start () {
        this.playButton.node.on('click', this.onPlayBtnClick, this);
        this.achievementButton.node.on('click', this.onAchievementBtnClick, this);
        this.instructionButton.node.on('click', this.onInstructionBtnClick, this);
    }

    private onPlayBtnClick(button) {
        cc.director.loadScene('game');
    }
    
    private onAchievementBtnClick() {
        cc.director.loadScene('achievement');
    }

    private onInstructionBtnClick() {
        cc.director.loadScene('instruction');
    }
}
