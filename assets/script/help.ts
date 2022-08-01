// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node) closeBtn: cc.Node = null;
    @property(cc.AudioClip) clickMusic: cc.AudioClip = null;

    start () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
    }

    private onCloseBtnClick() {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('menu');
    }
}
