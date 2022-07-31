// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Button)
    playButton: cc.Button = null;

    start () {
        this.playButton.node.on('click', this.onPlayBtnClick, this);
    }

    onPlayBtnClick() {
        cc.director.loadScene('game');
    }
    // update (dt) {}
}
