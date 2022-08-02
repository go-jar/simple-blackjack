// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import AchievementItemUI from './achievementItemUI';
import Client from './client'
import { AchievementItem } from './entity/achievementItem';
import { RPC_URL, MY_CKB_PRIVATE_KEY, MY_CKB_ADDRESS } from "./config";

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node) closeBtn: cc.Node = null;
    @property(cc.AudioClip) clickMusic: cc.AudioClip = null;

    @property(cc.Label) progressLabel: cc.Label = null;
    @property(cc.Label) countLabel: cc.Label = null;
    @property(cc.Sprite) progressSprite: cc.Sprite = null;

    @property(cc.Prefab) achievementItem: cc.Prefab = null;

    private client: Client = null;

    async start () {
        this.closeBtn.on(cc.Node.EventType.TOUCH_START, this.onCloseBtnClick, this);
        this.client = new Client(RPC_URL, MY_CKB_PRIVATE_KEY, MY_CKB_ADDRESS);

        const statics = await this.client.get_achievement();
        this.initScore(statics.win_count, statics.win_count + statics.lose_count);

        let total = statics.nfts.length;
        var y = -10;
        for (var i = 0; i < total / 7; ++i) {
            var x = -240;
            for (var j = 0; j < 7 && i * 7 + j < total; j++) {
                let itemUI = this.createItemUI(new AchievementItem(statics.nfts[i * 7 + j]));
                itemUI.node.x = x;
                itemUI.node.y = y;
                this.node.addChild(itemUI.node);
                x += 80;
            }
            y -= 85;
        }
    }
x
    private createItemUI(item: AchievementItem): AchievementItemUI {
        let itemUiNode = cc.instantiate(this.achievementItem);
        let itemUI: AchievementItemUI = itemUiNode.getComponent(AchievementItemUI);
        itemUI.init(item);
        return itemUI;
    }

    private onCloseBtnClick() {
        cc.audioEngine.playEffect(this.clickMusic, false);
        cc.director.loadScene('menu');
    }

    private initScore(count: number, total: number) {
        let percent = total == 0 ? 0 : Math.floor(count * 100 / total)

        this.progressLabel.string = `${percent}%`
        this.countLabel.string = `${count}`
        this.progressSprite.fillRange = percent / 100.0
    }
}
