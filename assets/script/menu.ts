// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Node) playButton: cc.Node = null;
    @property(cc.Node) achievementButton: cc.Node = null;
    @property(cc.Node) instructionButton: cc.Node = null;

    start () {
        this.playButton.on(cc.Node.EventType.TOUCH_START, this.onPlayBtnClick, this);
        this.achievementButton.on(cc.Node.EventType.TOUCH_START, this.onAchievementBtnClick, this);
        this.instructionButton.on(cc.Node.EventType.TOUCH_START, this.onInstructionBtnClick, this);
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
