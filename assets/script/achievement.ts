// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import Client from './client'

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node) closeBtn: cc.Node = null;

    @property(cc.Label) progressLabel: cc.Label = null 
    @property(cc.Label) countLabel: cc.Label = null 
    @property(cc.Sprite) progressSprite: cc.Sprite = null

    async start () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);

        // const client = new Client();
        // const scoreRes = await client.getScore('user');
        // this.init(scoreRes.success, scoreRes.total);
        this.init(10, 30);
    }

    private onCloseBtnClick() {
        cc.director.loadScene('menu');
    }

    private init(count: number, total: number) {
        let percent = total == 0 ? 0 : Math.floor(count * 100 / total)

        this.progressLabel.string = `${percent}%`
        this.countLabel.string = `${count}`
        this.progressSprite.fillRange = percent / 100.0
    }
}
