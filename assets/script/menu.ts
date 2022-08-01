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
    @property(cc.Node) helpButton: cc.Node = null;

    @property(cc.AudioClip) clickMusic: cc.AudioClip = null;

    start () {
        this.playButton.on(cc.Node.EventType.TOUCH_START, this.onPlayBtnClick, this);
        this.achievementButton.on(cc.Node.EventType.TOUCH_START, this.onAchievementBtnClick, this);
        this.helpButton.on(cc.Node.EventType.TOUCH_START, this.onHelpBtnClick, this);
    }

    private onPlayBtnClick(button) {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('game');
    }
    
    private onAchievementBtnClick() {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('achievement');
    }

    private onHelpBtnClick() {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('help');
    }
}
